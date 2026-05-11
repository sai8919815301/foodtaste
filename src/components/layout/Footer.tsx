export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-primary border-t border-on-secondary-fixed-variant">
<div className="px-margin-mobile md:px-margin-desktop py-20 flex flex-col items-center gap-12 max-w-container-max mx-auto">
<h2 className="text-display-lg-mobile font-display-lg-mobile text-on-primary tracking-widest">SILVANUS &amp; CO.</h2>
<nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors uppercase tracking-[0.2em]" href="#">Sustainability</a>
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors uppercase tracking-[0.2em]" href="#">Craftsmanship</a>
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors uppercase tracking-[0.2em]" href="#">Service Centers</a>
<a className="text-on-primary/70 text-label-sm font-label-sm hover:text-tertiary-fixed-dim transition-colors uppercase tracking-[0.2em]" href="#">Privacy Policy</a>
</nav>
<div className="flex gap-8">
<a className="text-on-primary/50 hover:text-on-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="text-on-primary/50 hover:text-on-primary transition-colors" href="#"><span className="material-symbols-outlined">auto_awesome</span></a>
<a className="text-on-primary/50 hover:text-on-primary transition-colors" href="#"><span className="material-symbols-outlined">history_edu</span></a>
</div>
<p className="text-on-primary/40 font-label-sm text-center tracking-wider mt-8">
                © 2024 SILVANUS &amp; CO. HOROLOGY. HANDCRAFTED IN THE FOREST.
            </p>
</div>
</footer>
  );
}
