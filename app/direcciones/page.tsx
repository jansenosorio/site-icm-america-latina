import { HeroSectionBlog } from "@/components/sections";
import { DireccionesPageComponent } from "@/templates/Direcciones";

export default function DireccionesPage() {
  return (
    <>
      <HeroSectionBlog
        title="Direcciones"
        description="Encuentra nuestras ubicaciones y puntos de contacto."
      />
      <DireccionesPageComponent />
    </>
  );
}
