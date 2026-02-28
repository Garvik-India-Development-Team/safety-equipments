import fs from "fs";
import https from "https";
import path from "path";

const images = [
    { name: "ppe.jpg", url: "https://images.unsplash.com/photo-1582131503261-f2ea4ece8efa?w=800&q=80" },
    { name: "clothing.jpg", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
    { name: "fall.jpg", url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80" },
    { name: "fire.jpg", url: "https://images.unsplash.com/photo-1563223771-38ae345dbf48?w=800&q=80" },
    { name: "firstaid.jpg", url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80" },
    { name: "signs.jpg", url: "https://images.unsplash.com/photo-1510443905586-7977a4bbd41e?w=800&q=80" },
    { name: "lockout.jpg", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
    { name: "gas.jpg", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
    { name: "electrical.jpg", url: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?w=800&q=80" },
    { name: "hero.jpg", url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&q=80" }
];

const dir = path.join(process.cwd(), "public", "images");

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            // Handle redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                download(res.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }
            const stream = fs.createWriteStream(dest);
            res.pipe(stream);
            stream.on("finish", () => resolve());
            stream.on("error", reject);
        }).on("error", reject);
    });
}

(async () => {
    for (const img of images) {
        console.log(`Downloading ${img.name}...`);
        await download(img.url, path.join(dir, img.name));
    }
    console.log("Done");
})();
