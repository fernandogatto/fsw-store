"use client";

import PromoBanner from "./components/promo-banner";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />
    </div>
  );
}
