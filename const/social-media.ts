import {Facebook, Instagram, Youtube } from "lucide-react";

export type SocialMediaType = {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SOCIAL_MEDIA: Array<SocialMediaType> = [
  {
    name: "YouTube",
    url: "https://youtube.com/@maranataorg",
    icon: Youtube,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/maranata.org/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/icm_chileoficial/",
    icon: Instagram,
  },
  
];
export default SOCIAL_MEDIA;
