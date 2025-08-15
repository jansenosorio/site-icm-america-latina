import { ParagraphTitle } from "@/components/typography";
import clsx from "clsx";

export function DireccionesPageComponent() {
  return (
    <section className="flex-grow h-full">
      <div className={clsx("container-content mx-auto h-full px-4 pb-10")}>
        <ParagraphTitle>Chile</ParagraphTitle>
        <h3 className="sm:text-md text-xl">
          <strong>Dirección:</strong> Hoevel 5471, Quinta Normal, Región Metropolitana
        </h3>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26640.660160602256!2d-70.7294364!3d-33.4210929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c405bc4e3ffb%3A0x9729fccad0fac9f8!2sIglesia%20Cristiana%20Maranata!5e0!3m2!1spt-BR!2sbr!4v1755217500859!5m2!1spt-BR!2sbr"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full max-w-2xl rounded shadow"
            title="Ubicación Iglesia Cristiana Maranata"
          />
        </div>

        <h3 className="sm:text-md text-xl pt-10">
          <strong>Dirección:</strong> Décima Avenida 1163, San Miguel, Región Metropolitana
        </h3>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1663.2692993247024!2d-70.6598678!3d-33.5133797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db01400e935f%3A0xade97f692cb95348!2sIglesia%20Cristiana%20Maranata!5e0!3m2!1spt-BR!2sbr!4v1755217689922!5m2!1spt-BR!2sbr"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full max-w-2xl rounded shadow"
            title="Ubicación Iglesia Cristiana Maranata"
          />
        </div>
      </div>
    </section>
  );
}
