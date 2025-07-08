"use client";
import clsx from "clsx";
import { BreadCrumbs } from "../breadcrumbs";

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
        <BreadCrumbs />
        <h1 className={clsx("text-2xl md:text-4xl font-bold text-white")}>
          {title}
        </h1>
        <p className={clsx("text-sm md:text-lg text-gray-200 mt-2")}>
          {description || "Explora nuestras últimas publicaciones y noticias."}
        </p>
      </div>
    </section>
  );
}
