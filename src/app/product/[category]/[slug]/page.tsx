import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, FileDown, ShieldCheck, Truck, Droplets, Star, Settings } from "lucide-react";

interface PageProps {
    params: Promise<{ category: string; slug: string }>;
}

async function getProduct(slug: string) {
    const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    try {
        const res = await fetch(`${base}/api/products/${encodeURIComponent(slug)}`, {
            cache: "no-store",
        });
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        return null;
    }
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { category, slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return notFound();
    }

    const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919811048483";

    return (
        <div className="bg-background min-h-screen">
            {/* Breadcrumbs */}
            <div className="bg-card border-b border-border">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-3">
                    <nav aria-label="Breadcrumb" className="flex text-sm text-muted-foreground">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                                    <Link href="/products" className="hover:text-primary transition-colors">
                                        Categories
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                                    <Link href={`/product/${category}`} className="hover:text-primary transition-colors capitalize">
                                        {category.replace(/-/g, " ")}
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                                    <span className="text-foreground font-medium">{product.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <main className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">

                    {/* Left Column: Images */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative bg-card rounded-lg overflow-hidden border border-border mb-4 aspect-square md:aspect-[4/3] group">
                            {product.images?.[0] ? (
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-accent">
                                    <span className="text-lg">No Image Available</span>
                                </div>
                            )}
                        </div>
                        {/* Thumbnails (if multiple images mapped, right now just repeating main for demo) */}
                        {product.images?.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img: string, i: number) => (
                                    <button key={i} className="border border-border rounded-md overflow-hidden bg-card h-24 relative opacity-70 hover:opacity-100 transition-opacity">
                                        <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Information */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="mb-4">
                            <div className="flex gap-2 mb-3">
                                <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${product.availability === "made_to_order"
                                        ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                                        : "bg-green-500/10 text-green-600 border-green-500/30"
                                    }`}>
                                    {product.availability === "made_to_order" ? "Made to Order" : "In Stock"}
                                </span>
                                <span className="text-xs text-muted-foreground font-medium flex items-center">SKU: {product.sku || 'N/A'}</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">{product.name}</h1>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center text-yellow-500">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 text-muted-foreground" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 pb-6 border-b border-border">
                            {product.price && (
                                <div className="flex items-baseline gap-3 mb-4">
                                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                                </div>
                            )}
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {product.description}
                            </p>
                        </div>

                        <div className="bg-accent/50 p-6 rounded-lg border border-border">
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                {/* WhatsApp Quote Button */}
                                <a
                                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello I want a quotation for *${product.name}* (SKU: ${product.sku || 'N/A'})`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    WhatsApp Quote
                                </a>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>Eligible for bulk discount on high quantity orders</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Truck className="w-4 h-4 text-primary" />
                                    <span>Pan India Shipping Available</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 pt-4">
                            {product.certifications?.map((cert: string) => (
                                <div key={cert} className="flex items-center gap-2 bg-card border border-border px-3 py-2 rounded">
                                    <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs font-medium text-foreground">{cert}</span>
                                </div>
                            ))}
                            {product.datasheetUrl && (
                                <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card border border-border px-3 py-2 rounded hover:border-primary transition-colors cursor-pointer">
                                    <FileDown className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-medium text-foreground">Datasheet</span>
                                </a>
                            )}
                        </div>

                    </div>
                </div>

                {/* Technical Specs Tab */}
                <div className="mt-16">
                    <div className="border-b border-border">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-8 overflow-x-auto">
                            <button className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm">
                                Technical Specs
                            </button>
                        </nav>
                    </div>
                    <div className="py-8 text-muted-foreground max-w-4xl">
                        <h3 className="text-xl font-bold text-foreground mb-4">Detailed Specifications</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-primary text-foreground">
                            {product.brandName && <li><strong>Brand:</strong> {product.brandName}</li>}
                            {product.applications && Array.isArray(product.applications) && (
                                <li><strong>Target Applications:</strong> {product.applications.join(', ')}</li>
                            )}
                            {product.sku && <li><strong>SKU:</strong> {product.sku}</li>}
                        </ul>
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
