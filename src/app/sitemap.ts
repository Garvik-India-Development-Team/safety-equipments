import { MetadataRoute } from "next";

/**
 * Auto-generated sitemap for SEO.
 * TODO: Replace the base URL with your actual domain after deploying.
 * TODO: Add dynamic product/category URLs from your database.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://safetypro.netlify.app";

    const staticRoutes = [
        "",
        "/about",
        "/contact",
        "/bulk-quote",
        "/brands",
        "/industries",
        "/category/ppe",
    ];

    return staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
    }));
}
