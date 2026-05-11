export default function Page() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      {/* Content extracted from HTML */}
      
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md dark:bg-background/80 border-b-[0.5px] border-outline-variant dark:border-on-secondary-fixed-variant">
<div className="flex justify-between items-center px-margin-desktop py-gutter max-w-container-max mx-auto">
<div className="flex items-center gap-4">
<button className="text-primary hover:scale-95 transition-all duration-200">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<h1 className="text-headline-md font-headline-md tracking-widest text-primary dark:text-primary-fixed-dim">SILVANUS &amp; CO.</h1>
<div className="flex items-center gap-6">
<span className="hidden md:block text-label-md font-label-md text-on-surface-variant">COLLECTIONS</span>
<span className="hidden md:block text-label-md font-label-md text-primary font-bold border-b border-primary">ORDERS</span>
<button className="text-primary hover:scale-95 transition-all duration-200">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
</header>
<main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
{/* Page Header */}
<div className="mb-16">
<h2 className="text-display-lg font-display-lg text-primary mb-4">Acquisition History</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Tracing the journey of your Silvanus timepieces, from the initial forge in our forest atelier to your private collection.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Orders List (Asymmetric Grid Layout) */}
<div className="lg:col-span-7 space-y-8">
{/* Order Card 1: Active Tracking */}
<div className="group ambient-glow bg-surface-container-low p-8 rounded-xl transition-all duration-500 hover:bg-surface-container">
<div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
<div className="flex gap-6">
<div className="w-24 h-24 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="A macro close-up of a luxury mechanical watch dial with intricate gold gears and a deep forest green face. The lighting is soft and moody, emphasizing the metallic textures and premium craftsmanship of a high-end horological piece in a minimalist light-mode environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8O10t22T21mn4Vkmkj_CKPvvk_Dkq9hG3CNGKYtB_XeAEVI2E4HkCNFTI_p1cfKJFF7EzrC-Jey2wckm3PEq1IRj_gbRH9NOaXJTWin1o1rMrYsHrtMcCtJBB7BdHDdkWcAV3JZhgur8CyEsIUq9n0gE1vGg0tfMbpBoTy01mitJSF_5fxO_yBI1mbtdY5ahfjffhGkf-gvCMYIO6S-UwkmsblSyfyxu45vhI1qHf868WBS3KIyHrqZmbDg8WETLebFOMVNK0uli8"/>
</div>
<div>
<span className="text-label-sm font-label-sm text-on-secondary-fixed-variant uppercase tracking-widest block mb-1">Order #SC-88291</span>
<h3 className="text-headline-sm font-headline-sm text-primary">The Evergreen Chronograph</h3>
<p className="text-label-md font-label-md text-on-surface-variant">Mist Cream / Bronze Caliber</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                In Atelier
                            </div>
<p className="text-headline-sm font-headline-sm text-primary">$12,400</p>
</div>
</div>
{/* Quick Progress Bar */}
<div className="relative h-[1px] bg-outline-variant w-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-primary w-2/3"></div>
</div>
<div className="flex justify-between mt-4 text-label-sm font-label-sm text-on-surface-variant">
<span>Component Selection</span>
<span className="text-primary font-bold">Watchmaking &amp; Assembly</span>
<span>Quality Assay</span>
</div>
</div>
{/* Order Card 2: Delivered */}
<div className="group ambient-glow bg-surface-container-low p-8 rounded-xl opacity-80 hover:opacity-100 transition-all duration-500">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex gap-6">
<div className="w-24 h-24 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" data-alt="A detailed shot of a classic watch with a leather strap resting on a dark mossy stone surface. The image captures the organic minimalism and luxury heritage of the brand, featuring natural forest tones and high-contrast professional lighting that highlights the watch's timeless design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7UV8jAE6fgocagqNm-oPxq7ap6o2Z3ZyPwrEZANl92vqdtXMGNVoOHvvMzZaKs9SE_7oxStcuKWCf26Khl2bm6CHQlONZBROTTQ6pxY2AvXc1Fa11Py6o-ciU6lwseHF9A07i4BEDXvhkzEdAR2E1WK7yTWQaCbPmvC-kfuL7VobkKNd50I_KuEP0ZXp5gu0Yo5z3tI05OhnVwUl5g0oYNqRYWBXxlssiS6AUbJWDkr5iE0_dn5K8D4pCp0aO69q2QWXJT4uM0_9"/>
</div>
<div>
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-1">Order #SC-77402</span>
<h3 className="text-headline-sm font-headline-sm text-primary">Heritage Moonphase</h3>
<p className="text-label-md font-label-md text-on-surface-variant">Oak Leather / Silver Case</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm mb-2">
                                Delivered
                            </div>
<p className="text-headline-sm font-headline-sm text-primary">$9,850</p>
</div>
</div>
</div>
{/* Order Card 3: Delivered */}
<div className="group ambient-glow bg-surface-container-low p-8 rounded-xl opacity-80 hover:opacity-100 transition-all duration-500">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex gap-6">
<div className="w-24 h-24 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" data-alt="A minimalist overhead view of a premium watch movement visible through a glass case back. The aesthetic is clean and sophisticated, with muted metallic tones of bronze and silver against a soft cream background, reflecting the quiet luxury and technical excellence of the watch brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8-MvTXyfV91JHQ99wGLoQTGdE1wn2QXHiq58TdUQxnw4gPYOP87B3qMrMIR9RWOq1fzjj5G6gL6OGUugHd2qBw7czEvum_3u0Vb4g19QlV-rKJWKrqq9awcbTtiHkc_s7GERcDapcXEcUtSVlPzR7dBUA0yyU33TDg5k3uJ25kKcsRsPdtXk1HO8Lfxwp3GcjLDRA4aJXbnNzrV4c_dLYTgDuIU1nEK3jdPpJhcygYa8yMTIVuvi2n9EMwSXx3JJTuUW1NlywfGFD"/>
</div>
<div>
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-1">Order #SC-65120</span>
<h3 className="text-headline-sm font-headline-sm text-primary">The Solstice Diver</h3>
<p className="text-label-md font-label-md text-on-surface-variant">Deep Sea Steel / Rubber Strap</p>
</div>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm mb-2">
                                Delivered
                            </div>
<p className="text-headline-sm font-headline-sm text-primary">$15,200</p>
</div>
</div>
</div>
</div>
{/* Tracking Timeline (Bento Style Sidebar) */}
<aside className="lg:col-span-5">
<div className="glass-panel p-10 rounded-xl sticky top-32">
<h4 className="text-label-sm font-label-sm text-primary uppercase tracking-[0.2em] mb-8 border-b border-outline-variant pb-4">Real-time Watchmaking &amp; Delivery</h4>
<div className="space-y-12">
{/* Step 1: Completed */}
<div className="relative pl-10 border-l border-primary/20">
<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
<div>
<p className="text-label-sm font-label-sm text-on-secondary-fixed-variant mb-1">MARCH 12, 10:30 AM</p>
<h5 className="text-headline-sm font-headline-sm text-primary">Forge &amp; Casting</h5>
<p className="text-body-md font-body-md text-on-surface-variant mt-2">The raw bronze components have been cast and tempered in the forest kiln.</p>
</div>
</div>
{/* Step 2: Completed */}
<div className="relative pl-10 border-l border-primary/20">
<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
<div>
<p className="text-label-sm font-label-sm text-on-secondary-fixed-variant mb-1">MARCH 14, 02:15 PM</p>
<h5 className="text-headline-sm font-headline-sm text-primary">Component Calibration</h5>
<p className="text-body-md font-body-md text-on-surface-variant mt-2">Master horologists are hand-polishing the internal escapement gears.</p>
</div>
</div>
{/* Step 3: Active */}
<div className="relative pl-10 border-l border-primary/20">
<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-25"></div>
<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
<div>
<p className="text-label-sm font-label-sm text-primary font-bold mb-1 uppercase">Active Journey</p>
<h5 className="text-headline-sm font-headline-sm text-primary">Watchmaking &amp; Assembly</h5>
<p className="text-body-md font-body-md text-on-surface-variant mt-2 italic">Currently: Hand-setting the indices on the 'Evergreen' dial face. Estimated completion in 48 hours.</p>
</div>
</div>
{/* Step 4: Pending */}
<div className="relative pl-10">
<div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border border-outline-variant bg-surface"></div>
<div className="opacity-40">
<p className="text-label-sm font-label-sm text-on-surface-variant mb-1">ESTIMATED MARCH 20</p>
<h5 className="text-headline-sm font-headline-sm text-on-surface-variant">Quality Assay</h5>
<p className="text-body-md font-body-md text-on-surface-variant mt-2">A 48-hour movement stability test and water resistance verification.</p>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-outline-variant">
<button className="w-full bg-primary text-on-primary py-4 rounded font-label-md uppercase tracking-widest hover:tracking-[0.3em] transition-all duration-300">
                            Contact Master Horologist
                        </button>
</div>
</div>
</aside>
</div>
</main>
{/* Footer */}
<footer className="w-full mt-24 bg-primary dark:bg-primary-container border-t border-on-secondary-fixed-variant">
<div className="px-margin-desktop py-20 flex flex-col items-center gap-12 max-w-container-max mx-auto">
<h2 className="text-display-lg-mobile font-display-lg-mobile text-on-primary tracking-widest">SILVANUS &amp; CO.</h2>
<div className="flex flex-wrap justify-center gap-8 md:gap-16">
<a className="text-on-primary/70 text-label-sm font-label-sm uppercase hover:text-tertiary-fixed-dim transition-colors" href="#">Sustainability</a>
<a className="text-on-primary/70 text-label-sm font-label-sm uppercase hover:text-tertiary-fixed-dim transition-colors" href="#">Craftsmanship</a>
<a className="text-on-primary/70 text-label-sm font-label-sm uppercase hover:text-tertiary-fixed-dim transition-colors" href="#">Service Centers</a>
<a className="text-on-primary/70 text-label-sm font-label-sm uppercase hover:text-tertiary-fixed-dim transition-colors" href="#">Privacy Policy</a>
</div>
<p className="text-body-lg font-body-lg text-on-primary/50 text-center">© 2024 SILVANUS &amp; CO. HOROLOGY. HANDCRAFTED IN THE FOREST.</p>
</div>
</footer>

    </div>
  );
}
