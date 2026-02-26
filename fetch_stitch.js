const fs = require('fs');

const urls = {
    'stitch_homepage.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzhmMWNlMTE4MmYzMzRiYzI5YzMwZjQ4NTY0ZGY2N2JjEgsSBxDu09uenwUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDA4Mjg1MzA5NjQ4ODMwMzc0Mg&filename=&opi=89354086',
    'stitch_product_detail.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAzMTY2Mjg1OThlYTRjMGM4MjlkNjEwM2IyZTljZTQxEgsSBxDu09uenwUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDA4Mjg1MzA5NjQ4ODMwMzc0Mg&filename=&opi=89354086'
};

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
};

async function download() {
    for (const [file, url] of Object.entries(urls)) {
        console.log(`Fetching ${file}...`);
        try {
            const res = await fetch(url, { headers });
            console.log(`Status for ${file}:`, res.status);
            const text = await res.text();
            fs.writeFileSync(file, text);
            console.log(`Downloaded ${file}, length: ${text.length}`);
        } catch (e) {
            console.error(`Error for ${file}:`, e.message);
        }
    }
}
download();
