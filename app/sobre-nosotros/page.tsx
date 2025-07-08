import { HeroSectionBlog } from "@/components/sections";
import { SobreNosotrosPageContent } from "@/templates";

export default function SobreNosotrosPage() {
  return (
    <>
      <HeroSectionBlog
        title="Sobre Nosotros"
        description="Conoce más sobre nuestro equipo y nuestra misión."
      />
      <SobreNosotrosPageContent />
    </>
  );
}
