import {Instagram, Youtube } from "lucide-react";

export type SocialMediaType = {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SOCIAL_MEDIA: Array<SocialMediaType> = [
  {
    name: "Instagram - Chile",
    url: "https://www.instagram.com/icm_chileoficial/",
    icon: Instagram,
  },
  {
    name: "Instagram - Oficial",
    url: "https://www.facebook.com/maranata.org/",
    icon: Instagram,
  },
  {
    name: "YouTube - Oficial",
    url: "https://youtube.com/@maranataorg",
    icon: Youtube,
  },
];
export default SOCIAL_MEDIA;
