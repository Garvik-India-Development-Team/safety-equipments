
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/* Utility Bar */}
<div className="w-full bg-surface-dark border-b border-border-dark py-2 px-4 md:px-10 flex justify-end gap-6 text-xs font-medium text-text-muted">
<a className="hover:text-primary transition-colors" href="#">Support</a>
<a className="hover:text-primary transition-colors" href="#">Store Locator</a>
<a className="hover:text-primary transition-colors" href="#">Login</a>
</div>
{/* Main Header */}
<header className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-sm border-b border-border-dark px-4 md:px-10 py-4">
<div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
{/* Logo */}
<div className="flex items-center gap-3 text-white shrink-0">
<div className="size-8 text-primary">
<svg fill="currentColor" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
</svg>
</div>
<h2 className="text-xl font-bold tracking-tight">SafetyPro</h2>
</div>
{/* Search Bar */}
<div className="hidden md:flex flex-1 max-w-2xl">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
<span className="material-symbols-outlined">search</span>
</div>
<input />
</div>
</div>
{/* Actions */}
<div className="flex items-center gap-4 shrink-0">
<button className="relative p-2 text-white hover:text-primary transition-colors rounded-lg hover:bg-surface-dark">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="absolute top-1 right-1 size-2 bg-primary rounded-full"></span>
</button>
<button className="hidden md:flex bg-primary hover:bg-primary-dark text-black px-5 py-2.5 rounded-lg text-sm font-bold transition-colors items-center gap-2">
<span>My Account</span>
</button>
<button className="md:hidden text-white p-2">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
{/* Mobile Search (Visible only on small screens) */}
<div className="md:hidden mt-4">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
<span className="material-symbols-outlined">search</span>
</div>
<input />
</div>
</div>
</header>
{/* Main Content */}
<main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8">
{/* Hero Section */}
<section className="rounded-2xl overflow-hidden bg-surface-dark border border-border-dark shadow-2xl mb-16">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
{/* Image Side */}
<div className="relative h-64 lg:h-full w-full bg-gray-800">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Industrial worker in safety gear looking at tablet" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsKfpxb8hkt32BKgQoAsBph0OuATpkvIkYm7I-lQMM-IgxuUAM8fggkFBh6EBHZqzu7_Ace_2slQ6m1uMitNtNZTxsSNUTwxq_j3dmIWD6cUzbSda57i-iHinUBzo38uybscC3wL4SREYmjOqXn-EZi6ILxUi-8u_THQ-5gEmGyEq1Myjfqf0jjliCo7uqpPbNjBKFqD_BatoaldHgBVvCXmWEhndKYrbLZ4WtRJLCLZo6wuN3o4QdrRStCOtg3lJYu2bSqr_Qp_q6');"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 lg:bg-gradient-to-r lg:from-transparent lg:to-surface-dark"></div>
</div>
{/* Content Side */}
<div className="flex flex-col justify-center p-8 lg:p-16 text-left">
<div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-4">
<span className="w-8 h-[2px] bg-primary"></span>
                            Premium Protection
                        </div>
<h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Safety First,<br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Excellence Always</span>
</h1>
<p className="text-text-muted text-lg mb-8 max-w-md leading-relaxed">
                            Equip your team with premium industrial safety gear designed for maximum protection, compliance, and all-day comfort.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary hover:bg-primary-dark text-black px-8 py-3.5 rounded-lg text-base font-bold transition-all shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center gap-2">
                                Shop All Categories
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<button className="bg-transparent border border-border-dark hover:border-white text-white px-8 py-3.5 rounded-lg text-base font-medium transition-colors">
                                View Catalog
                            </button>
</div>
</div>
</div>
</section>
{/* Stats / Trust Indicators */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-y border-border-dark py-8">
<div className="flex flex-col items-center justify-center text-center gap-1 border-r border-border-dark last:border-0">
<span className="text-3xl font-black text-white">50k+</span>
<span className="text-xs text-text-muted uppercase tracking-wider">Products</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1 border-r border-border-dark last:border-0 md:border-r">
<span className="text-3xl font-black text-white">24/7</span>
<span className="text-xs text-text-muted uppercase tracking-wider">Support</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1 border-r border-border-dark last:border-0">
<span className="text-3xl font-black text-white">100%</span>
<span className="text-xs text-text-muted uppercase tracking-wider">Compliant</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<span className="text-3xl font-black text-white">Free</span>
<span className="text-xs text-text-muted uppercase tracking-wider">Shipping &gt; $500</span>
</div>
</div>
{/* Deals of the Day */}
<section className="mb-20">
<div className="flex items-center justify-between mb-8 px-2">
<h2 className="text-2xl font-bold text-white flex items-center gap-3">
<span className="material-symbols-outlined text-primary">local_offer</span>
                        Deals of the Day
                    </h2>
<a className="text-primary hover:text-white text-sm font-medium transition-colors flex items-center gap-1" href="#">
                        View All Offers
                        <span className="material-symbols-outlined text-base">chevron_right</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Product Card 1 */}
<div className="group bg-surface-dark rounded-xl border border-border-dark hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/5] overflow-hidden bg-white/5">
<div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">-20%</div>
<div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" data-alt="Yellow hard hat safety helmet" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5IwWxFoxD6L9iSDgu7ITA5WSI1mGMzammoYXBZA-3lVBO8E8VyL_L0pcOD8bsG3TyYCrEfB0mNsKOniFxqlSEQ1kWdW_PVIyVdEusGDLr0qqxkPYDjMRxT3b8WlKKlslDwpGhYF-X1pmBjkFPgn7Yu0qyKM1I4X4ubRuLjuML6p78yCchsTJ-osKSZdxJ7U5R71DIaRzmC099tzMwin2wGhiCZh5ZWpsP-0V-b_87kJVdpVkylAhAiRwlxRAm5ZshdipD79wG2P4T');"></div>
<button className="absolute bottom-4 right-4 bg-primary text-black p-2 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<p className="text-xs text-text-muted mb-1">Head Protection</p>
<h3 className="text-white font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">Ultra-Guard Hard Hat Pro Series</h3>
<div className="mt-auto flex items-end gap-2">
<span className="text-primary font-bold text-lg">$24.99</span>
<span className="text-text-muted text-sm line-through decoration-red-500">$31.99</span>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="group bg-surface-dark rounded-xl border border-border-dark hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/5] overflow-hidden bg-white/5">
<div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" data-alt="Safety protective glasses on table" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCgWooSAhgjkzHAD3nglqfZaGlQL6fF2YrOxaVYWnXQxsvaOdLlS_W3c2shMJHQ55TBgaBY36FNdt2yLT0n0alBdudqgPEgnGJlyBwcU3KTNMHUp3mwlhf1DfX1rG-XNVBZGa8NlNUJfDf3tZNet1o0DGRXaYd6vRDw3WKbqixlsZReW8Ax8r5EypOHlCzyrpQEJmY43d7Qk1whebmRjeVhRVp9SbyB6bHuthSikTfevgBtYCdg1Rmmo8j9qvdUljD9hYJMppEuWh7');"></div>
<button className="absolute bottom-4 right-4 bg-primary text-black p-2 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<p className="text-xs text-text-muted mb-1">Eye Protection</p>
<h3 className="text-white font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">VisionPro Anti-Fog Safety Glasses</h3>
<div className="mt-auto flex items-end gap-2">
<span className="text-primary font-bold text-lg">$12.50</span>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="group bg-surface-dark rounded-xl border border-border-dark hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/5] overflow-hidden bg-white/5">
<div className="absolute top-3 left-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded">Best Seller</div>
<div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" data-alt="High visibility reflective safety vest" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5np85BL7NbPpsI80Ye4EizDunz0--nuS_q2EUgcKnU8Di-uvBdB_pYDq57a5BLY63jkVLKeXBkT0xVmvQzC9W1PogjKANsF_cRgsSms0UzvG5KM7I0zOKujCJX9qTRBpfDEnygb1P5RK0tGyeyDV0IuCbcJcf3ClOVGhkMeFaLiNzQriT5gTdTLc22rLxXs0Vj3yDPqvT-BE9rngJ1bF4xvX9teYhsQl_ZoUU6YiJP1LkGhPaMtjmvC_kUhOAPH-mvoIxukexiVHL');"></div>
<button className="absolute bottom-4 right-4 bg-primary text-black p-2 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<p className="text-xs text-text-muted mb-1">Apparel</p>
<h3 className="text-white font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">Reflective High-Vis Vest L/XL</h3>
<div className="mt-auto flex items-end gap-2">
<span className="text-primary font-bold text-lg">$19.99</span>
</div>
</div>
</div>
{/* Product Card 4 */}
<div className="group bg-surface-dark rounded-xl border border-border-dark hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="relative aspect-[4/5] overflow-hidden bg-white/5">
<div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" data-alt="Industrial steel toe work boots" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzZR1HomkeoIUQ6SDVWnZz5qkOt_YoNLBQh2qeNNWm3rp6tSYWruFFZSLizS9w_d4iWrNB5O8UyfG0s6K9YwsQMNfEwN3xBiMBLrGFTZ8yJ1_-aUW3yxtnEwDaRG-wU_pZc20bUFK0Xwfexktc14HM2YZIa7RfHNWEkAKDjWxItvTh1dmd_xD_vU3wgbvWu7_LVD072ZXqH3KwW6UpYXdq3IM9hob8O59zyt4T85rnrHxu4U5RAIhkuwwrU3a3KNzRQi--xs_k7UrY');"></div>
<button className="absolute bottom-4 right-4 bg-primary text-black p-2 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<p className="text-xs text-text-muted mb-1">Footwear</p>
<h3 className="text-white font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">Titan Heavy Duty Work Boots</h3>
<div className="mt-auto flex items-end gap-2">
<span className="text-primary font-bold text-lg">$89.99</span>
<span className="text-text-muted text-sm line-through decoration-red-500">$110.00</span>
</div>
</div>
</div>
</div>
</section>
{/* Industries We Serve */}
<section className="mb-20">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
<p className="text-text-muted max-w-2xl mx-auto">Providing specialized equipment tailored to the unique safety challenges of major industrial sectors.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Industry Card 1 */}
<a className="group relative overflow-hidden rounded-xl aspect-video bg-surface-dark border border-border-dark hover:border-primary transition-colors" href="#">
<div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" data-alt="Construction site cranes sunset" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1z6vZHHKot_Pwwg8Ui2jIoOZN1ho1fO14wGH-pNucY9WdK18abNkrjfJDsCOdk_7Gtun0WJH4FdnvCFArsjBPudUcKqvZmA4L1LnBPlk_h-yjKOBf6oES8kx7ic3C7iPvCQIlHLpbcX-OiND63LYETJIhuDRRknJU2o1hGc9mji0BlvJhopf3W7sd9gPScZGyS8o8gGbJAOgxdQomlTMdFtijzIXdJikZyr4QfkVPpFh1-yVefbLSL63N1BjKjjSh7Xp-R7nXH0kf');"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
<div className="w-16 h-16 rounded-full bg-background-dark/80 border border-border-dark flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-3xl text-primary">construction</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Construction</h3>
<p className="text-sm text-text-muted opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Site safety, fall protection &amp; heavy machinery gear.</p>
</div>
</a>
{/* Industry Card 2 */}
<a className="group relative overflow-hidden rounded-xl aspect-video bg-surface-dark border border-border-dark hover:border-primary transition-colors" href="#">
<div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" data-alt="Automated manufacturing robotic arm" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpb_Aj3ch3m6a2Vw5068g6KNVejp_x_1XdkxMKifhL3detY6fbpgq0BL7MRIOU9HykkYhOUnS7JuQDYX0AGoLG2V9hERIpX3zskguL-fsqe4evqVrWw6VHf1GYr29Vly61S3wvXbm5fcHSjrlAx3RyuJBlt8YSX59jgQWqPGcxtCnr39NSnLacv_IlkgZF91f2M_I6gKFKSRQbJ2kp5eARtVwxBDQc0hLRDE4zIQnLy_w_BjUebwTAMsBTWTtUmkKZhrYdOJuhAYZ6');"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
<div className="w-16 h-16 rounded-full bg-background-dark/80 border border-border-dark flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-3xl text-primary">precision_manufacturing</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
<p className="text-sm text-text-muted opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Assembly line PPE, hearing &amp; respiratory protection.</p>
</div>
</a>
{/* Industry Card 3 */}
<a className="group relative overflow-hidden rounded-xl aspect-video bg-surface-dark border border-border-dark hover:border-primary transition-colors" href="#">
<div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" data-alt="Underground mining tunnel dark" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyPE-Y3ndkJ4T3S9YJWEsP57TnjOfbm4jltmehMKLfhmipBTsTfwjttyx3ZNw7dukOTWByODsZORVIEkliqw75X6gVJR7RLBkR4djOFyGPtnFzqkG00gVG-25-gp4Fx3u4AO6TCBoxASXuvCoPI-rNlE4w1O4L4bFoSMD7ck_Q7PKCYhJe7tsF3ovn9jxaYk7pLDnof6GXwbIGrd1sMBPDYrbbGRi7YzVCVx3F_6lXHUGAkDReX1ukmBXGuWdY-EbfKKQJsffv03PM');"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
<div className="w-16 h-16 rounded-full bg-background-dark/80 border border-border-dark flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-3xl text-primary">engineering</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Mining &amp; Energy</h3>
<p className="text-sm text-text-muted opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Explosion proof gear, lights &amp; high-vis apparel.</p>
</div>
</a>
</div>
</section>
</main>
{/* Newsletter & Footer */}
<footer className="bg-surface-dark border-t border-border-dark pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-4 md:px-10">
{/* Newsletter Signup */}
<div className="bg-background-dark rounded-2xl p-8 md:p-12 mb-16 border border-border-dark flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<h3 className="text-2xl font-bold text-white mb-2">Join the SafetyPro Newsletter</h3>
<p className="text-text-muted">Get the latest safety regulations updates and exclusive product offers.</p>
</div>
<form className="flex w-full md:w-auto gap-2">
<input />
<button className="bg-primary hover:bg-primary-dark text-black font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<div className="size-6 text-primary">
<svg fill="currentColor" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
</svg>
</div>
<span className="text-lg font-bold">SafetyPro</span>
</div>
<p className="text-text-muted text-sm mb-6">Your trusted partner in industrial safety since 1995. Ensuring your workforce returns home safe, every day.</p>
<div className="flex gap-4">
<a className="text-text-muted hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a> {/* Representing generic social icon */}
<a className="text-text-muted hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-text-muted">
<li><a className="hover:text-primary transition-colors" href="#">Personal Protective Equipment</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Workwear</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Footwear</a></li>
<li><a className="hover:text-primary transition-colors" href="#">First Aid</a></li>
<li><a className="hover:text-primary transition-colors" href="#">New Arrivals</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Company</h4>
<ul className="space-y-4 text-sm text-text-muted">
<li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Corporate Responsibility</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-text-muted">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
<span>123 Safety Blvd,<br />Industrial District, NY 10012</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-lg">phone</span>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-lg">mail</span>
<span>support@safetypro.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
<p>© 2023 SafetyPro Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>
