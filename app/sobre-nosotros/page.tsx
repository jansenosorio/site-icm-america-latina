import { HeroSectionBlog } from "@/components/sections";

export default function SobreNosotrosPage() {
  return (
    <>
      <HeroSectionBlog
        title="Sobre Nosotros"
        description="Conoce más sobre nuestro equipo y nuestra misión."
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-center max-w-2xl">
          Somos un equipo apasionado por la tecnología y el desarrollo web.
          Nuestro objetivo es crear soluciones innovadoras que mejoren la
          experiencia del usuario y faciliten la vida diaria.
        </p>
      </div>
    </>
  );
}
