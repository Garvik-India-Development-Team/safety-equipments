
{/* Header */}
<header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background-dark/95 backdrop-blur-sm">
<div className="px-4 md:px-10 py-3 mx-auto max-w-7xl w-full flex items-center justify-between whitespace-nowrap">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">
<div className="size-6 text-primary">
<span className="material-symbols-outlined !text-[24px]">shield</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">SafetyPro</h2>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium leading-normal text-text-muted hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-medium leading-normal text-text-muted hover:text-white transition-colors" href="#">Safety Standards</a>
<a className="text-sm font-medium leading-normal text-text-muted hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm font-medium leading-normal text-text-muted hover:text-white transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<div className="hidden md:flex flex-col min-w-40 !h-10 max-w-64 w-full">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-surface-border bg-surface-dark focus-within:border-primary transition-colors">
<div className="text-text-muted flex items-center justify-center pl-3">
<span className="material-symbols-outlined !text-[20px]">search</span>
</div>
<input />
</div>
</div>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg size-10 bg-surface-dark border border-surface-border text-white hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined !text-[20px]">shopping_cart</span>
</button>
<button className="flex items-center justify-center rounded-lg size-10 bg-surface-dark border border-surface-border text-white hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined !text-[20px]">account_circle</span>
</button>
<button className="lg:hidden flex items-center justify-center rounded-lg size-10 bg-surface-dark border border-surface-border text-white hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined !text-[20px]">menu</span>
</button>
</div>
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
{/* Breadcrumbs */}
<div className="flex flex-wrap gap-2 mb-8 items-center text-sm">
<a className="text-text-muted hover:text-primary transition-colors" href="#">Home</a>
<span className="text-surface-border material-symbols-outlined !text-[16px]">chevron_right</span>
<a className="text-text-muted hover:text-primary transition-colors" href="#">Head Protection</a>
<span className="text-surface-border material-symbols-outlined !text-[16px]">chevron_right</span>
<span className="text-white font-medium">ProGuard Safety Helmet</span>
</div>
{/* Product Hero Section */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
{/* Left Column: Gallery */}
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="aspect-[4/3] w-full bg-surface-dark rounded-xl overflow-hidden border border-surface-border relative group">
<img />
<button className="absolute top-4 right-4 p-2 bg-background-dark/50 backdrop-blur rounded-full text-white hover:bg-primary hover:text-background-dark transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="grid grid-cols-4 gap-4">
<button className="aspect-square rounded-lg border-2 border-primary overflow-hidden bg-surface-dark">
<img />
</button>
<button className="aspect-square rounded-lg border border-surface-border overflow-hidden bg-surface-dark hover:border-text-muted transition-colors opacity-70 hover:opacity-100">
<img />
</button>
<button className="aspect-square rounded-lg border border-surface-border overflow-hidden bg-surface-dark hover:border-text-muted transition-colors opacity-70 hover:opacity-100">
<img />
</button>
<button className="aspect-square rounded-lg border border-surface-border overflow-hidden bg-surface-dark hover:border-text-muted transition-colors opacity-70 hover:opacity-100 flex items-center justify-center text-text-muted">
<span className="material-symbols-outlined !text-[32px]">play_circle</span>
</button>
</div>
</div>
{/* Right Column: Details */}
<div className="lg:col-span-5 flex flex-col gap-6">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-0.5 rounded text-xs font-bold bg-primary text-background-dark uppercase tracking-wider">In Stock</span>
<div className="flex items-center gap-1 text-primary text-sm">
<span className="material-symbols-outlined !text-[16px] fill-current">star</span>
<span className="material-symbols-outlined !text-[16px] fill-current">star</span>
<span className="material-symbols-outlined !text-[16px] fill-current">star</span>
<span className="material-symbols-outlined !text-[16px] fill-current">star</span>
<span className="material-symbols-outlined !text-[16px] fill-current">star_half</span>
<span className="text-text-muted ml-1">(124 reviews)</span>
</div>
</div>
<h1 className="text-3xl md:text-4xl font-bold text-white mb-2">ProGuard Industrial Safety Helmet</h1>
<p className="text-text-muted text-lg leading-relaxed">
                        Advanced impact protection with ventilated comfort system. Meets ANSI/ISEA Z89.1-2014 Type 1, Class C standards.
                    </p>
</div>
<div className="h-px bg-surface-border w-full"></div>
<div className="flex flex-col gap-4">
<div className="flex items-end gap-2">
<span className="text-4xl font-bold text-white">$89.99</span>
<span className="text-lg text-text-muted mb-1 line-through">$109.00</span>
<span className="text-sm text-green-400 mb-1.5 ml-2 font-medium">Save 18%</span>
</div>
{/* Color Selection */}
<div className="space-y-3">
<span className="text-sm font-medium text-white">Color: <span className="text-primary">Safety Yellow</span></span>
<div className="flex gap-3">
<button className="size-10 rounded-full bg-primary ring-2 ring-offset-2 ring-offset-background-dark ring-primary"></button>
<button className="size-10 rounded-full bg-white ring-1 ring-surface-border hover:ring-2 hover:ring-offset-2 hover:ring-offset-background-dark hover:ring-white transition-all"></button>
<button className="size-10 rounded-full bg-orange-500 ring-1 ring-surface-border hover:ring-2 hover:ring-offset-2 hover:ring-offset-background-dark hover:ring-orange-500 transition-all"></button>
</div>
</div>
</div>
{/* Add to Cart Area */}
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<div className="flex items-center border border-surface-border rounded-lg bg-surface-dark h-12 w-32">
<button className="w-10 h-full flex items-center justify-center text-text-muted hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[18px]">remove</span>
</button>
<input />
<button className="w-10 h-full flex items-center justify-center text-text-muted hover:text-white transition-colors">
<span className="material-symbols-outlined !text-[18px]">add</span>
</button>
</div>
<button className="flex-1 h-12 bg-primary hover:bg-yellow-400 text-background-dark font-bold text-lg rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">shopping_cart</span>
                        Add to Cart
                    </button>
</div>
{/* Quick Features */}
<div className="grid grid-cols-2 gap-4 mt-2">
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-dark/50 border border-surface-border/50">
<div className="text-primary mt-0.5">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">2 Year Warranty</h4>
<p className="text-text-muted text-xs">Full protection guarantee</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-dark/50 border border-surface-border/50">
<div className="text-primary mt-0.5">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Fast Shipping</h4>
<p className="text-text-muted text-xs">Delivery in 2-3 days</p>
</div>
</div>
</div>
</div>
</div>
{/* Content Tabs Section */}
<div className="mt-20">
<div className="border-b border-surface-border mb-8">
<nav aria-label="Tabs" className="flex gap-8 overflow-x-auto">
<button aria-current="page" className="border-b-2 border-primary py-4 px-1 text-sm font-bold text-white">Specifications</button>
<button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-text-muted hover:border-text-muted hover:text-white transition-colors">Safety Certifications</button>
<button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-text-muted hover:border-text-muted hover:text-white transition-colors">User Reviews (124)</button>
<button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-text-muted hover:border-text-muted hover:text-white transition-colors">FAQ</button>
</nav>
</div>
{/* Tab Content */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-2 space-y-8 text-text-muted">
<div className="prose prose-invert max-w-none">
<h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
<p className="mb-4">
                            The ProGuard Industrial Safety Helmet is designed for optimal protection in high-risk environments. 
                            Features a 6-point ratchet suspension system for superior impact absorption and comfort.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-6">
<div className="flex justify-between border-b border-surface-border py-2">
<span className="font-medium text-white">Material</span>
<span>High-Density Polyethylene (HDPE)</span>
</div>
<div className="flex justify-between border-b border-surface-border py-2">
<span className="font-medium text-white">Weight</span>
<span>13.5 oz (380g)</span>
</div>
<div className="flex justify-between border-b border-surface-border py-2">
<span className="font-medium text-white">Suspension</span>
<span>6-Point Ratchet</span>
</div>
<div className="flex justify-between border-b border-surface-border py-2">
<span className="font-medium text-white">Standards</span>
<span>ANSI/ISEA Z89.1-2014</span>
</div>
<div className="flex justify-between border-b border-surface-border py-2">
<span className="font-medium text-white">Ventilation</span>
<span>Top and Side Vents</span>
</div>
<div className="flex justify-between border-b border-surface-border py-2">
<span className="font-medium text-white">Size Range</span>
<span>53cm - 63cm (Adjustable)</span>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-4">Downloads</h3>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center gap-3 p-4 rounded-lg bg-surface-dark border border-surface-border hover:border-primary group transition-all" href="#">
<div className="bg-surface-border p-2 rounded text-white group-hover:bg-primary group-hover:text-background-dark transition-colors">
<span className="material-symbols-outlined">description</span>
</div>
<div>
<div className="font-bold text-white text-sm">Product Manual</div>
<div className="text-xs">PDF - 2.4 MB</div>
</div>
<span className="material-symbols-outlined ml-2 text-text-muted group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="flex items-center gap-3 p-4 rounded-lg bg-surface-dark border border-surface-border hover:border-primary group transition-all" href="#">
<div className="bg-surface-border p-2 rounded text-white group-hover:bg-primary group-hover:text-background-dark transition-colors">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<div className="font-bold text-white text-sm">CE Certificate</div>
<div className="text-xs">PDF - 1.1 MB</div>
</div>
<span className="material-symbols-outlined ml-2 text-text-muted group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
{/* Sidebar / Related */}
<div className="md:col-span-1">
<div className="bg-surface-dark border border-surface-border rounded-xl p-6">
<h3 className="text-lg font-bold text-white mb-4">Frequently Bought Together</h3>
<div className="space-y-4">
{/* Related Item 1 */}
<div className="flex gap-3 items-center group cursor-pointer">
<div className="size-16 rounded bg-surface-border/30 overflow-hidden shrink-0">
<img />
</div>
<div className="flex-1 min-w-0">
<p className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">ClearVision Safety Goggles</p>
<p className="text-text-muted text-xs">$15.99</p>
</div>
<button className="size-8 rounded-full border border-surface-border flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-colors">
<span className="material-symbols-outlined !text-[16px]">add</span>
</button>
</div>
{/* Related Item 2 */}
<div className="flex gap-3 items-center group cursor-pointer">
<div className="size-16 rounded bg-surface-border/30 overflow-hidden shrink-0">
<img />
</div>
<div className="flex-1 min-w-0">
<p className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">NoiseGuard Ear Muffs</p>
<p className="text-text-muted text-xs">$24.50</p>
</div>
<button className="size-8 rounded-full border border-surface-border flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-colors">
<span className="material-symbols-outlined !text-[16px]">add</span>
</button>
</div>
{/* Related Item 3 */}
<div className="flex gap-3 items-center group cursor-pointer">
<div className="size-16 rounded bg-surface-border/30 overflow-hidden shrink-0">
<img />
</div>
<div className="flex-1 min-w-0">
<p className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">Hi-Vis Reflective Vest</p>
<p className="text-text-muted text-xs">$12.99</p>
</div>
<button className="size-8 rounded-full border border-surface-border flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-colors">
<span className="material-symbols-outlined !text-[16px]">add</span>
</button>
</div>
</div>
<button className="w-full mt-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background-dark rounded-lg text-sm font-bold transition-colors">
                            Add All to Cart
                        </button>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="mt-20 border-t border-surface-border bg-[#1a160d] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-4">
<span className="material-symbols-outlined text-primary !text-[28px]">shield</span>
<h2 className="text-xl font-bold">SafetyPro</h2>
</div>
<p className="text-text-muted text-sm leading-relaxed">
                        Leading supplier of industrial safety equipment. Dedicated to protecting workers in the most demanding environments worldwide.
                    </p>
</div>
<div>
<h4 className="text-white font-bold mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-text-muted">
<li><a className="hover:text-primary transition-colors" href="#">Head Protection</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Eye &amp; Face</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Hearing Protection</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Respiratory</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Workwear</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Support</h4>
<ul className="space-y-2 text-sm text-text-muted">
<li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Warranty Info</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Safety Standards</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Downloads</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Newsletter</h4>
<p className="text-text-muted text-sm mb-4">Subscribe to receive safety tips and new product updates.</p>
<div className="flex">
<input />
<button className="bg-primary text-background-dark px-4 font-bold rounded-r-lg hover:bg-white transition-colors">
<span className="material-symbols-outlined !text-[20px]">send</span>
</button>
</div>
</div>
</div>
<div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-text-muted text-sm">© 2023 SafetyPro Equipment. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
<a className="text-text-muted hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
