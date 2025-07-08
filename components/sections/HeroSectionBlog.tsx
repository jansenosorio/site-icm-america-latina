import clsx from "clsx";

type HeroSectionBlogProps = {
  title: string;
  description?: string;
};
export function HeroSectionBlog({ title, description }: HeroSectionBlogProps) {
  return (
    <section
      className={clsx(
        "flex flex-col items-center justify-center w-full h-40 bg-red-800"
      )}
    >
      <div className={clsx("container mx-auto")}>
        <h1 className={clsx("text-4xl font-bold text-white")}>{title}</h1>
        <p className={clsx("text-lg text-gray-200 mt-2")}>
          {description || "Explora nuestras últimas publicaciones y noticias."}
        </p>
      </div>
    </section>
  );
}
