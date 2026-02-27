import { notFound } from "next/navigation";
import Link from "next/link";
import { CategoryListing } from "@/components/category-listing";
import { CATEGORIES } from "@/app/products/page";

interface PageProps {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        category: category.slug,
    }));
}

export default async function DedicatedCategoryPage({ params }: PageProps) {
    const { category: slug } = await params;
    const category = CATEGORIES.find(c => c.slug === slug);

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
                    <span className="text-foreground font-medium">{category.title}</span>
                </div>

                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-6 bg-card border border-border p-6 md:p-10 rounded-xl relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/10 to-transparent pointer-events-none"></div>

                    {/* Category Image */}
                    {category.image && (
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0 shadow-lg border-2 border-yellow-500/20">
                            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 border border-yellow-500/20 text-xs font-bold uppercase rounded tracking-wider">
                                {category.badge || "Safety Gear"}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight uppercase">
                            {category.title}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            {category.description} Browse our collection of {category.title.toLowerCase()} equipment, fully certified for safety and reliability across industrial applications. Use the sidebar filters to find exactly what you need.
                        </p>
                    </div>
                </div>

                {/* Product Grid and Filters */}
                <CategoryListing categorySlug={slug} />
            </main>
        </div>
    );
}
