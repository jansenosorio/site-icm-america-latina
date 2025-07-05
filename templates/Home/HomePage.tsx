import clsx from "clsx";
import { HeroSection } from "../../components/sections/HeroSection";
import { FastAccessCard } from "@/components/cards/FastAccessCard";
import { FAST_ACCESS_CARD_INFOS } from "@/const/fast-access-infos";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { FolderTree } from "lucide-react";

export function HomePage() {
  return (
    <section className="flex-grow h-full">
      {/* HERO SECTION */}
      <HeroSection
        lema={
          "Lema 2025\n\n'Huid, salvad vuestra vida, y sed como retama en el desierto.' - Jeremías 48:6"
        }
      />

      {/* FAST ACCESS CARDS */}
      <div className={clsx("container", "pt-10")}>
        <SectionTitle title="Acceso rápido" icon={FolderTree} />
      </div>
      <section
        className={clsx(
          "container",
          "flex flex-wrap items-center justify-between py-10 gap-4"
        )}
      >
        {FAST_ACCESS_CARD_INFOS.map((info) => (
          <FastAccessCard key={info.href} {...info} />
        ))}
      </section>
    </section>
  );
}
