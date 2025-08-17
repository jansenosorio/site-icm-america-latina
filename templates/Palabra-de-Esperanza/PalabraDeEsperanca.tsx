import { Paragraph, ParagraphTitle } from "@/components/typography";
import { clsx } from "clsx";

import img1 from "@/public/assets/images/una-palabra-esperanza-img1.webp";
import img2 from "@/public/assets/images/una-palabra-esperanza-img2.webp";
import Image from "next/image";

export function PalabraDeEsperanzaPage() {
  return (
    <section className="flex-grow h-full">
      <div className={clsx("container-content mx-auto h-full px-4 py-14")}>
        <ParagraphTitle>
          Una palabra de esperanza para tu corazón.
        </ParagraphTitle>
        <Paragraph>
          Su alma es inmortal. Jamás morirá. Pero al separarse de su cuerpo, dos
          destinos habrá para ella: el CIELO (la eternidad con Dios – la
          felicidad eterna) o la eternidad sin Dios (el sufrimiento eterno). Hay
          solo una persona en este mundo capaz de elegir el lugar donde usted
          vivirá eternamente.
        </Paragraph>
        <div className={clsx("my-8")}>
          <Image src={img1} alt="imagem de convite" />
        </div>
        <Paragraph>
          Usted dirá que esa persona es Dios, pero Dios dice en Su Palabra, la
          Santa Biblia, que esa persona es usted. Solo usted puede elegir o
          determinar el destino eterno de su alma. Usted podrá, si quiere,
          elegir ahora el cielo, pero si cree que puede dejar el asunto para
          otro momento, ya habrá elegido para usted la eternidad sin Dios; si
          usted muere ahora, irá allá para siempre. Y si no muere ahora, estará
          caminando hacia la eternidad sin Dios.
        </Paragraph>
        <div className={clsx("my-8")}>
          <Image src={img2} alt="hermanos in evangelizacion" />
        </div>

        <Paragraph>
          {`Ciertamente usted quiere el Cielo. Y para que tenga la seguridad de que va a disfrutar del cielo, lo que debe hacer es:

Reconocerse pecador. Dios dice:
“por cuanto todos pecaron, y están destituidos de la gloria de Dios”. (Romanos 3:23)

Reconocer que usted no puede entrar en el Cielo por sus propios esfuerzos.
“Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe”. (Efesios 2:8-9)

Creer que solamente Jesucristo puede llevarle al Cielo. Jesús dice en Juan 14:6:
“Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí”.
Jesús no dijo “un camino”, sino “el camino”.

Aceptar a Jesucristo como su único Salvador.
“Cree en el Señor Jesucristo, y serás salvo”. (Hechos 16:31)

Pero algunos dirán: Soy joven y dejaré esto para después. Nos gustaría decir dos cosas:
No necesita ser viejo para estar cerca de la eternidad.
Las profecías de la Biblia dicen que Jesús volverá otra vez; y estas profecías se están cumpliendo en nuestros días. ¿Cómo estará su vida en aquel día? Piense en esto. Pues el único medio para alcanzar esta bendición es Jesús.
“¡He aquí, vengo pronto!” (Apocalipsis 22:7)

Pero si usted no quiere elegir el Cielo, sepa que está caminando hacia la eternidad sin Dios, bajo la ira de Dios.
“…mas el que rehúsa creer en el Hijo no verá la vida, sino que la ira de Dios está sobre él”. (Juan 3:36b)`}
        </Paragraph>
      </div>
    </section>
  );
}
