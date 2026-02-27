import { notFound } from "next/navigation";
import Link from "next/link";
import { CategoryListing } from "@/components/category-listing";

interface PageProps {
    params: Promise<{ category: string }>;
}

async function getCategory(slug: string) {
    const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    try {
        const res = await fetch(`${base}/api/categories?slug=${encodeURIComponent(slug)}`, {
            cache: "no-store",
        });
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

export default async function DedicatedCategoryPage({ params }: PageProps) {
    const { category: slug } = await params;
    const category = await getCategory(slug);

    if (!category) {
        return notFound();
    }

    return (
        <div className="flex flex-col bg-background">
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 pb-24">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="material-symbols-outlined !text-[16px]">chevron_right</span>
                    <Link href="/products" className="hover:text-primary transition-colors">Categories</Link>
                    <span className="material-symbols-outlined !text-[16px]">chevron_right</span>
                    <span className="text-foreground font-medium">{category.name}</span>
                </div>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight uppercase">
                        {category.name}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Browse our collection of {category.name.toLowerCase()} equipment, fully certified for safety and reliability across industrial applications. Use the filters to find exactly what you need.
                    </p>
                </div>

                {/* Product Grid and Filters */}
                <CategoryListing categorySlug={slug} />
            </main>
        </div>
    );
}
