import React from 'react';
import Link from 'next/link';

export default function ComparePage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-container">
      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <header className="mb-16 text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-4">Compare Models</h1>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Find the perfect timepiece to accompany your journey. Compare features, materials, and technology.</p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="sticky top-20 bg-background/95 backdrop-blur z-40 border-b border-outline-variant">
              <tr>
                <th className="p-6 w-1/4 align-bottom">
                  <h3 className="text-headline-sm text-primary mb-2">Features</h3>
                </th>
                <th className="p-6 w-1/4 align-bottom text-center">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmgalLAICL04uKopGbWqLsvrEmTqldnQew0ZXDJA4iCpUEoQpM2Q1PgnY5kyi7bfGOytxHFtnAjB2i4lWQGZrJL8ctqCHV5p7RQrLym2LBKfxDf42lBHnXQzpF4b5RAyQcTAwtmjP8fzgQbxW1RzOyDodRAi9-JvFY8y14enWdEUnObOUlaB8A-W1OurcTuIgAfUASeRyzz8JBe0kURKNO1GBUybbXcD4jQV9W27WzWnDleqZaDezEXKCd6Kx15mk3K619ROtImFYf" alt="The Evergreen GMT" className="w-32 h-32 object-cover mx-auto mb-4 rounded-xl" />
                  <h4 className="text-label-lg font-bold text-primary mb-1">The Evergreen GMT</h4>
                  <p className="text-body-sm text-on-surface-variant mb-4">$8,450</p>
                  <button className="bg-primary text-on-primary px-6 py-2 text-label-sm uppercase tracking-widest hover:tracking-[0.2em] transition-all">Buy</button>
                </th>
                <th className="p-6 w-1/4 align-bottom text-center">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5YbEYNh6clW8BkYNzJJ6WxQU2c2WICuso_13euLD87kFdba7YlEu7YvsCmRrvZbP2dc2LstwyAcuZdh_-wVc0a3G1eaNLzskxjW8KRQ7LUFs93onWrBgLPdVHQixLn8VttmuOLnbPVXTA8jftxrLdvGX3lsr3NP4ZFa76AeRBg7eoCO0fKA2hDBVBLEB6O1ZIS60tBIe1fA3UE_vurxR0-k625rOeEpDQ__uPomY2r7Rkz94Nzbk83io_NawaaqhiqyDsdq0ogZ0" alt="The Midnight Chronograph" className="w-32 h-32 object-cover mx-auto mb-4 rounded-xl" />
                  <h4 className="text-label-lg font-bold text-primary mb-1">Midnight Chronograph</h4>
                  <p className="text-body-sm text-on-surface-variant mb-4">$6,200</p>
                  <button className="bg-primary text-on-primary px-6 py-2 text-label-sm uppercase tracking-widest hover:tracking-[0.2em] transition-all">Buy</button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              <tr>
                <td className="p-6 text-label-md font-bold text-primary">Case Material</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">Hand-Polished Bronze</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">Titanium Alloy</td>
              </tr>
              <tr>
                <td className="p-6 text-label-md font-bold text-primary">Display</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">1.4" AMOLED LTPO</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">1.3" OLED</td>
              </tr>
              <tr>
                <td className="p-6 text-label-md font-bold text-primary">Battery Life</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">Up to 72 Hours</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">Up to 48 Hours</td>
              </tr>
              <tr>
                <td className="p-6 text-label-md font-bold text-primary">Water Resistance</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">10 ATM (100m)</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">5 ATM (50m)</td>
              </tr>
              <tr>
                <td className="p-6 text-label-md font-bold text-primary">Sensors</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">ECG, Heart Rate, SpO2, Altimeter</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">Heart Rate, SpO2</td>
              </tr>
              <tr>
                <td className="p-6 text-label-md font-bold text-primary">Compatibility</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">iOS &amp; Android</td>
                <td className="p-6 text-body-md text-on-surface-variant text-center">iOS &amp; Android</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
