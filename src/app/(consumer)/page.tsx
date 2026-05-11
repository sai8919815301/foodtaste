'use client';

import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DealOfDay from '@/components/home/DealOfDay';
import { useCart } from '@/store/useCart';

export default function Home() {
  const { addItem } = useCart();

  const handleAddArboreal = () => {
    addItem({
      id: 'arboreal-chrono-hero',
      name: 'The Arboreal Chronograph',
      price: 14200,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2-DAfJkAPWHtg8G2dMR0jW-cHtx-A02L9MrS4UpV-Es426hFUQNJ8yNUcZWGBpPzeIIg-7-R5xjghqfi_lBPNqVGqNh0OsjRBXboSKolka8vAX1Tdv7uHYklAjoBausY7EZ165K7tvUcZtq7fSZCW2T7W3pkxRy0uZHVp6YMFP8cdxO8seEqOdd3CoeP-2bELm5AbqK9Gpf-1-9sRUnKYhjIRS190aJ2iKOXHl-iz1sQRgB7SDrU9PpU5dzo42ipgsNVSG4_uBxhd',
      quantity: 1,
      options: {
        collection: 'Heritage Collection',
        details: 'Limited Edition'
      }
    });
    alert('Added to your bag!');
  };

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container selection:text-primary">
      <HeroBanner />
      
      {/* The Heritage Collection (Bento Grid) */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-primary mb-4 text-headline-md uppercase tracking-widest">The Heritage Collection</h2>
            <p className="text-on-surface-variant font-body-lg">Every Silvanus watch is a testament to timeless endurance, inspired by the ancient whispers of the great northern woodlands.</p>
          </div>
          <a className="text-label-md text-on-tertiary-fixed-variant border-b border-on-tertiary-fixed-variant pb-1 hover:tracking-widest transition-all uppercase tracking-widest" href="/catalog">VIEW ALL MODELS</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-8 group relative aspect-[4/3] md:aspect-auto overflow-hidden bg-surface-container-low cursor-pointer" onClick={handleAddArboreal}>
            <img className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2-DAfJkAPWHtg8G2dMR0jW-cHtx-A02L9MrS4UpV-Es426hFUQNJ8yNUcZWGBpPzeIIg-7-R5xjghqfi_lBPNqVGqNh0OsjRBXboSKolka8vAX1Tdv7uHYklAjoBausY7EZ165K7tvUcZtq7fSZCW2T7W3pkxRy0uZHVp6YMFP8cdxO8seEqOdd3CoeP-2bELm5AbqK9Gpf-1-9sRUnKYhjIRS190aJ2iKOXHl-iz1sQRgB7SDrU9PpU5dzo42ipgsNVSG4_uBxhd" alt="Feature"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-white/70 font-label-sm tracking-[0.2em] mb-2 uppercase">Limited Edition</span>
              <h3 className="text-white font-headline-sm text-headline-sm mb-4 uppercase tracking-widest">The Arboreal Chronograph</h3>
              <button className="bg-white text-primary px-8 py-3 w-fit text-label-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Add to Bag</button>
            </div>
          </div>
          {/* Vertical Card */}
          <div className="md:col-span-4 grid grid-rows-2 gap-8">
            <div className="bg-surface-container flex flex-col items-center justify-center p-8 text-center ambient-glow border-t-[0.5px] border-outline-variant">
              <h3 className="font-headline-sm text-primary mb-4 uppercase tracking-widest">Silver Pine Dial</h3>
              <p className="text-on-surface-variant font-body-md mb-6 italic">A dial textured with the pattern of frosted pine needles.</p>
              <button className="border border-on-tertiary-fixed-variant text-on-tertiary-fixed-variant px-6 py-2 text-label-sm hover:tracking-widest transition-all uppercase tracking-widest">Learn More</button>
            </div>
            <div className="relative overflow-hidden group cursor-pointer">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoGLYVkJ8Ay92ajbw0FufnGFdeSrpXhbOc3Pqwfb3KCw9TO7JM4zlshEOz-RnoNrnQv8EgaMTF-9smXuulr3gqIGsqATgE8S-cbY5qMtBFSo0tdjQwXwM43eLGrg4hOlBPtbffB_6ss1N2VKkObZbfj998AUxrH2fs8iQROgiue1kVVXhokHQMlXF5yvcwzXG8kKabGOF9KVFlCxoSvEZ7Oy5LrLPvIQcSwHCkT54MdZbybxnwG7ymR79FHqnlXv7IWF5LoeEGSMgC" alt="Pine Dial"/>
            </div>
          </div>
        </div>
      </section>

      <DealOfDay />

      {/* Craftsmanship (Story) */}
      <section className="bg-primary py-32 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 border border-white/10 rounded-full"></div>
            <img className="relative z-10 w-full h-auto ambient-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKrDnzfM9b5dVHqujfsIPyLv4B-VmqhExBrzv-dtwhmdGJeZlGUmsQ3Dg2_G0dFJ5wbOv_Ce9v0NNX49Ymo0ahtHxPzHkK2zeIminYVUl7n3p2QS7xIW_DxPYvhzGq03cWnIgEmeAv0Z4Zk7T0rVkDUIA5PYStpHenYK7A6612iS7cOq1ostCifEd7DFoN0NDWqavP-1-KF1SBNi4hhZCmDQbHpMIaPwFi9uTAyW_o1WWP3MXiwM-b2PywRXCtIogkmp__uiD5m7D" alt="Craftsmanship"/>
          </div>
          <div className="text-white">
            <p className="text-secondary-fixed font-label-md tracking-[0.4em] mb-6 uppercase">Our Philosophy</p>
            <h2 className="text-display-lg-mobile md:text-headline-md font-headline-md mb-8 leading-snug uppercase tracking-widest">Handcrafted in the heart of the forest.</h2>
            <p className="text-white/70 font-body-lg mb-8 leading-relaxed italic">
              At Silvanus &amp; Co., we believe time shouldn't be measured in seconds, but in the slow growth of an oak tree or the steady flow of a woodland stream. Our workshop is nestled deep within a protected woodland, where our artisans work in harmony with the natural rhythms of the earth.
            </p>
            <button className="group flex items-center gap-4 text-label-md tracking-widest text-white uppercase">
              THE ART OF HOROLOGY 
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Newsletter / Contact */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-headline-md text-primary mb-4 text-headline-md uppercase tracking-widest">Join the Inner Circle</h3>
          <p className="text-on-surface-variant font-body-lg mb-10 italic">Receive early access to rare editions and invitations to our woodland retreat experiences.</p>
          <form className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full text-left">
              <label className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-2 block">EMAIL ADDRESS</label>
              <input className="w-full bg-transparent border-0 border-b border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-primary font-body-md placeholder:text-outline-variant" placeholder="forest@silvanus.co" type="email"/>
            </div>
            <button className="bg-primary text-on-primary px-10 py-3 text-label-md tracking-widest hover:tracking-[0.2em] transition-all duration-300 w-full md:w-auto uppercase" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
