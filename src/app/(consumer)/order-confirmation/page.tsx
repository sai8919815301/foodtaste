export default function Page() {
  return (
    <div className="bg-background text-on-background selection:bg-secondary-container">
      {/* Content extracted from HTML */}
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md dark:bg-background/80 border-b-[0.5px] border-outline-variant dark:border-on-secondary-fixed-variant">
<div className="flex justify-between items-center px-margin-desktop py-gutter max-w-container-max mx-auto">
<button className="text-primary hover:tracking-widest transition-all duration-300 ease-in-out active:scale-95">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="text-headline-md font-headline-md tracking-widest text-primary dark:text-primary-fixed-dim">SILVANUS &amp; CO.</div>
<button className="text-primary hover:tracking-widest transition-all duration-300 ease-in-out active:scale-95">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
</div>
</header>
<main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
{/* Success Celebration Section */}
<section className="flex flex-col items-center text-center mb-20">
<div className="mb-8 w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[48px]" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
</div>
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-4 text-primary">Gratitude, Artisan.</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Your timepiece is currently being prepared within our forest atelier. We appreciate your commitment to horological excellence.</p>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
{/* Left Column: Details & Map */}
<div className="lg:col-span-7 space-y-12">
{/* Tracking Visual */}
<div className="relative rounded-xl overflow-hidden aspect-video bg-surface-container-high border border-outline-variant shadow-sm shadow-primary/5 group">
<img alt="Delivery Path" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A lush, misty forest landscape seen from an aerial perspective with a subtle, glowing bronze path winding through the deep green trees. The lighting is soft and ethereal, mimicking a sunrise in a secluded woodland. The visual style is premium and cinematic, utilizing the deep green and mist cream palette of Silvanus and Co." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIH5upnL11O6S7l5FktoPnPDPVpj7SgMTrm2Wc4U0MqoshDUMzq_9da2md3lHkksI5rtsVmq4hFEuMRjyGLw2r_py4Bd4yoUdA0ijbz5Kkn5FWtDr1EG8fyePjJ5-rcwtFTg04IExgLLGaV14LCMaccbKQnNDtbtza5XuN38weJoCJbh1v4Ij7BFisgAY1Oqbm-_Z8NMLUEOXMn5U2lUARQzYsAItjb4juvUr4muyUcRwAoXlQwg3Rf2wIrKM7j8kYtRNwKIFOwIQA"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div className="text-white">
<span className="text-label-sm font-label-sm uppercase tracking-widest opacity-80">Estimated Delivery</span>
<div className="text-headline-sm font-headline-sm">October 24, 2024</div>
</div>
<div className="bg-surface/95 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant">
<span className="text-label-md font-label-md text-primary">Order #SC-89234-LX</span>
</div>
</div>
</div>
{/* Order Details Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant">
<div className="flex items-center gap-3 mb-4 text-secondary">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
<span className="text-label-md font-label-md uppercase tracking-wider">Shipping To</span>
</div>
<address className="not-italic text-body-md font-body-md text-on-surface-variant space-y-1">
<span className="block text-on-surface font-semibold">Julian Vane</span>
<span className="block">127 Hemlock Ridge</span>
<span className="block">Asheville, NC 28801</span>
<span className="block">United States</span>
</address>
</div>
<div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant">
<div className="flex items-center gap-3 mb-4 text-secondary">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="text-label-md font-label-md uppercase tracking-wider">Payment Method</span>
</div>
<div className="text-body-md font-body-md text-on-surface-variant space-y-1">
<span className="block text-on-surface font-semibold">Mastercard •••• 9802</span>
<span className="block">Transaction: SC_TX_99120</span>
<span className="block">Billed: $8,450.00 USD</span>
</div>
</div>
</div>
{/* Action Links */}
<div className="flex flex-wrap gap-8 items-center pt-4">
<button className="bg-primary text-on-primary px-10 py-4 rounded-full text-label-md font-label-md flex items-center gap-3 transition-all duration-300 hover:tracking-widest active:scale-95">
<span className="material-symbols-outlined" data-icon="download">download</span>
                        DOWNLOAD INVOICE
                    </button>
<a className="text-primary font-label-md text-label-md flex items-center gap-2 group transition-all duration-300" href="#">
                        CONTINUE SHOPPING
                        <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
{/* Right Column: Purchase Summary */}
<div className="lg:col-span-5">
<div className="bg-surface p-10 rounded-xl border border-outline-variant sticky top-32">
<h3 className="text-headline-sm font-headline-sm text-primary mb-8 border-b border-outline-variant pb-4">Purchase Summary</h3>
<div className="space-y-8 mb-12">
{/* Product Item */}
<div className="flex gap-6">
<div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
<img alt="Silvanus Heritage" className="w-full h-full object-cover" data-alt="A close-up shot of a luxury mechanical watch with a bronze casing and a deep forest green leather strap. The watch rests on a bed of dark moss and pine needles, with soft light filtering through a forest canopy in the background. The aesthetic is organic minimalism with metallic bronze accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwjgrScJIW55OVyRPkjAvpcZNRX37aOFXjBIdqFM9CrImuveAJsBU6c3Xa84PsO5Jv5007rIuZ9OfIabVMhWsjaUddUAEH4XfToOT23hWVSrFtcceKvXUGbLG1sq3WR4DpE2DNIYY2ZKaiqAi6Y2sqFOR_3-ehMwsRI-dOV_w36p1VEdERDjodROicxoZieM-PZrVA_zCJOC2FOz3HQD8bSsUEez_fb6N9wONfDkMi-vIlExb_oKxAZWHWYPbhQ7icFvFp5nYJaP0"/>
</div>
<div className="flex-grow">
<h4 className="text-body-md font-semibold text-primary">Heritage Chronograph v.1</h4>
<p className="text-label-sm font-label-sm text-on-surface-variant mb-2">Bronze / Forest Green Leather</p>
<div className="flex justify-between items-center">
<span className="text-label-sm font-label-sm">Qty: 1</span>
<span className="text-body-md font-semibold text-primary">$8,200.00</span>
</div>
</div>
</div>
{/* Product Item 2 */}
<div className="flex gap-6">
<div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
<img alt="Sustainable Strap" className="w-full h-full object-cover" data-alt="A high-end sustainable watch strap made from recycled cork and organic pine fibers, colored in a deep umber tone. The strap is laid across a weathered oak surface with a subtle bronze buckle reflecting soft studio light. The image captures tactile textures and high-quality craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx7rpJ2HimxIWDxyY9J35p4XXUNNKLsZHADH7GbhduvHQbTCLl7VMSqgouuk0TZ0nu0eDdfiFRNutkW3pebWt4WmeZp85ZuDtQWxh4SqT5QAH76Ekz860MjSSevBaZspTgSPYsHlOcL4vwYOYpTuVlk9xMVzaYAC5IFwH7eRr8DbF559RGu6q_1TVmLHAItO96GAJq4EfBo_9f0Kbh5hqUq3b57u59OG4YLqgwR8lKtD0fJsbVSmeAtTRuQE0piCbdBVvgsUdyErR9"/>
</div>
<div className="flex-grow">
<h4 className="text-body-md font-semibold text-primary">Sustainable Pine Strap</h4>
<p className="text-label-sm font-label-sm text-on-surface-variant mb-2">Umber / Cork Lining</p>
<div className="flex justify-between items-center">
<span className="text-label-sm font-label-sm">Qty: 1</span>
<span className="text-body-md font-semibold text-primary">$250.00</span>
</div>
</div>
</div>
</div>
{/* Totals */}
<div className="space-y-4 border-t border-outline-variant pt-8">
<div className="flex justify-between text-body-md">
<span className="text-on-surface-variant">Subtotal</span>
<span className="text-primary">$8,450.00</span>
</div>
<div className="flex justify-between text-body-md">
<span className="text-on-surface-variant">White Glove Shipping</span>
<span className="text-secondary font-medium">Complimentary</span>
</div>
<div className="flex justify-between text-body-md">
<span className="text-on-surface-variant">Taxes &amp; Duties</span>
<span className="text-primary">$0.00</span>
</div>
<div className="flex justify-between pt-4 text-headline-sm font-headline-sm border-t border-outline-variant">
<span className="text-primary">Total Amount</span>
<span className="text-primary">$8,450.00</span>
</div>
</div>
<div className="mt-10 p-6 bg-secondary-container/30 rounded-lg border border-secondary-container flex gap-4 items-start">
<span className="material-symbols-outlined text-secondary" data-icon="eco" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
<p className="text-label-sm font-label-sm text-on-secondary-container">Your purchase contributed to the planting of 12 native pines within the Black Forest heritage restoration project.</p>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="w-full mt-24 bg-primary dark:bg-primary-container border-t border-on-secondary-fixed-variant">
<div className="px-margin-desktop py-20 flex flex-col items-center gap-12 max-w-container-max mx-auto">
<div className="text-display-lg-mobile font-display-lg-mobile text-on-primary">SILVANUS &amp; CO.</div>
<nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors" href="#">Sustainability</a>
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors" href="#">Craftsmanship</a>
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors" href="#">Service Centers</a>
<a className="text-tertiary-fixed font-bold text-label-sm font-label-sm" href="#">Privacy Policy</a>
</nav>
<div className="text-on-primary/70 text-body-lg font-body-lg text-center">
                © 2024 SILVANUS &amp; CO. HOROLOGY. HANDCRAFTED IN THE FOREST.
            </div>
<div className="flex gap-8 text-on-primary">
<span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed-dim transition-colors" data-icon="history_edu">history_edu</span>
<span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed-dim transition-colors" data-icon="watch">watch</span>
<span className="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed-dim transition-colors" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
</footer>

    </div>
  );
}
