import { FacebookIcon, Instagram, Twitter, Youtube } from "lucide-react";

type SocialMediaType = {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SOCIAL_MEDIA: Array<SocialMediaType> = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/icmchile",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/icmchile/",
    icon: Instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/icmchile",
    icon: Twitter,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@icmchile",
    icon: Youtube,
  },
];
export default SOCIAL_MEDIA;
