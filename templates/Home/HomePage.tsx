import { HeroSection } from "./HeroSection";

export function HomePage() {
  return (
    <section className="flex-grow h-full">
      <HeroSection
        lema={
          "Lema 2025\n\n'Huid, salvad vuestra vida, y sed como retama en el desierto.' - Jeremías 48:6"
        }
      />
    </section>
  );
}
