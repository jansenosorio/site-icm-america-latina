import { Paragraph, ParagraphTitle } from "@/components/typography";
import { clsx } from "clsx";

export function PalabraDeEsperanzaPage() {
  return (
    <section className="flex-grow h-full">
      <div className={clsx("container-content mx-auto h-full px-4 py-14")}>
        <ParagraphTitle>Nuestra Historia</ParagraphTitle>
        <Paragraph>
          La Iglesia Cristiana Maranata surgió en el seno de la comunidad
          evangélica como resultado de un acontecimiento previsto para el tiempo
          presente, como está escrito en el libro del profeta Joel 2:28, que
          dice: Y después de esto derramaré mi Espíritu sobre toda carne, y
          profetizarán vuestros hijos y vuestras hijas; vuestros ancianos
          soñarán sueños, y vuestros jóvenes verán visiones.
        </Paragraph>
        <ParagraphTitle>El Fundador y el Fundamento</ParagraphTitle>
        <Paragraph>
          El fundador y el fundamento se identifican en la persona del Señor
          Jesucristo. No hay, por tanto, énfasis en otro nombre o nombres, ya
          que Su existencia es parte del plan profético de Dios para nuestros
          días.
        </Paragraph>
        <Paragraph>
          Sin embargo, la Iglesia Cristiana Maranatha, como institución
          religiosa, nació en enero de 1968, en el municipio de Vila Velha,
          Estado de Espírito Santo, Brasil, con el objetivo de adorar a Dios y
          predicar el evangelio conforme a las Escrituras del Antiguo y Nuevo
          Testamento como única regla de fe y práctica, así como concientizar la
          formación espiritual y social del hombre, la educación cristiana,
          promover obras de beneficencia y asistencia moral y educacional, sin
          fines de lucro en territorio nacional y en el extranjero.
        </Paragraph>
      </div>
    </section>
  );
}
