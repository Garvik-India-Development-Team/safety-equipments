import Link from "next/link";
import { CategoryListing } from "@/components/category-listing";

export default function ProductsPage() {
    return (
        <div className="flex flex-col">
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-8 text-sm text-text-muted">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="material-symbols-outlined !text-[16px]">chevron_right</span>
                    <span className="text-white font-medium">All Products</span>
                </div>

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-white">Product Catalogue</h1>
                </div>

                {/* The CategoryListing component handles the actual product grid and filtering by category */}
                <CategoryListing categorySlug="" />

            </main>
        </div>
    );
}
