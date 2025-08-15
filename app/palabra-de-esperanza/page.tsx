import { HeroSectionBlog } from "@/components/sections/HeroSectionBlog";
import { PalabraDeEsperanzaPage } from "@/templates/Palabra-de-Esperanza/index";

export default function PalabraEsperanzaPage() {
  return (
    <>
      <HeroSectionBlog
        title="Una palabra de esperanza"
        description="Descubre mensajes de esperanza y fe que transforman vidas."
      />
      <PalabraDeEsperanzaPage />
    </>
  );
}
