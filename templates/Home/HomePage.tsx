import clsx from "clsx";
import { HeroSection } from "./HeroSection";
import { FastAccessCard } from "@/components/cards/FastAccessCard";

export function HomePage() {
  return (
    <section className="flex-grow h-full">
      <HeroSection
        lema={
          "Lema 2025\n\n'Huid, salvad vuestra vida, y sed como retama en el desierto.' - Jeremías 48:6"
        }
      />
      <div
        className={clsx(
          "container",
          "flex flex-wrap items-center justify-between py-10 gap-4"
        )}
      >
        <FastAccessCard />
        <FastAccessCard />
        <FastAccessCard />
        <FastAccessCard />
      </div>
    </section>
  );
}
