type FastAccessInfoType = {
  backgroundImage: string;
  title: string;
  href: string;
};

export const FAST_ACCESS_CARD_INFOS: FastAccessInfoType[] = [
  {
    backgroundImage: "/assets/images/img-igreja-2.webp",
    title: "Sobre nosotros",
    href: "/sobre-nosotros",
  },
  {
    backgroundImage: "/assets/images/img-igreja-1.png",
    title: "Nuestras direcciones",
    href: "/direcciones",
  },
  {
    backgroundImage: "/assets/images/img-igreja-4-biblia.webp",
    title: "Una palabra de esperanza",
    href: "/palabra-de-esperanza",
  },
  {
    backgroundImage: "/assets/images/img-igreja-3-trombetas.webp",
    title: "Instituto Bíblico",
    href: "https://institutoicm.com.br/ensino/nossos-cursos/?keyword=&tutor-course-filter-category=125&course_filter=true&loop_content_only=false&column_per_row=3&course_per_page=12&show_pagination=true&current_page=1&action=tutor_course_filter_ajax",
  },
];
