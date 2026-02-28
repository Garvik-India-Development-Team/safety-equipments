import fs from "fs";
import https from "https";
import http from "http";
import path from "path";
import gis from "g-i-s";

const filePath = "./src/lib/seed-products.ts";
let content = fs.readFileSync(filePath, "utf-8");

const productRegex = /name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
let match;
const products = [];

while ((match = productRegex.exec(content)) !== null) {
    products.push({ name: match[1], slug: match[2] });
}

console.log(`Found ${products.length} products.`);

const dir = path.join(process.cwd(), "public", "products");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith("https") ? https : http;
        const req = client.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                download(res.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }

            // Fast fail for non-images
            const contentType = res.headers['content-type'];
            if (!contentType || !contentType.startsWith('image/')) {
                res.resume();
                reject(new Error(`Invalid content type: ${contentType}`));
                return;
            }

            const stream = fs.createWriteStream(dest);
            res.pipe(stream);
            stream.on("finish", () => resolve(true));
            stream.on("error", reject);
        }).on("error", reject);
        req.setTimeout(5000, () => {
            req.destroy();
            reject(new Error("Timeout"));
        });
    });
}

function searchImage(query) {
    return new Promise((resolve) => {
        gis({ searchTerm: query + " isolated product white background" }, (error, results) => {
            if (error || !results || results.length === 0) {
                resolve([]);
            } else {
                resolve(results.map(r => r.url));
            }
        });
    });
}

(async () => {
    for (const prod of products) {
        console.log(`Processing: ${prod.name}`);
        const urls = await searchImage(prod.name);

        let downloaded = false;
        let ext = ".jpg";
        for (const url of urls) {
            try {
                if (url.includes(".png")) ext = ".png";
                else if (url.includes(".webp")) ext = ".webp";
                else ext = ".jpg";

                const dest = path.join(dir, prod.slug + ext);
                await download(url, dest);

                // Ensure image isn't 0 bytes
                const stats = fs.statSync(dest);
                if (stats.size < 1000) {
                    fs.unlinkSync(dest);
                    throw new Error("File too small, possibly invalid.");
                }

                const imgPath = `/products/${prod.slug}${ext}`;
                const blockRegex = new RegExp(`(slug:\\s*"${prod.slug}"[\\s\\S]*?images:\\s*\\[")[^"]+("\\])`, 'g');
                content = content.replace(blockRegex, `$1${imgPath}$2`);

                console.log(`  -> Downloaded ${url}`);
                downloaded = true;
                break;
            } catch (err) {
                // Ignore download errors to try the next URL
            }
        }
        if (!downloaded) {
            console.log(`  -> Failed all for ${prod.name}.`);
        }
        await new Promise(r => setTimeout(r, 100)); // avoid rate limits
    }

    fs.writeFileSync(filePath, content, "utf-8");
    console.log("Finished updating seed-products.ts");
})();
