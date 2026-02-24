import { SearchListing } from "@/components/search-listing";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        {q ? `Search results for “${q}”` : "Search products"}
      </h1>
      <SearchListing query={q ?? ""} />
    </div>
  );
}
