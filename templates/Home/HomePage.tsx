import clsx from "clsx";
import { HeroSection } from "./HeroSection";
import { FastAccessCard } from "@/components/cards/FastAccessCard";
import { FAST_ACCESS_CARD_INFOS } from "@/const/fast-access-infos";
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
        <div
          className={clsx(
            "flex items-center gap-4",
            "border-b border-red-950 pb-4"
          )}
        >
          <FolderTree className="h-8 w-8" />
          <h3 className="text-3xl font-bold text-red-950">Acceso rápido</h3>
        </div>
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
