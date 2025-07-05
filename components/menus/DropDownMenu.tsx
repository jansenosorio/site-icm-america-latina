import { SocialMediaType } from "@/const/social-media";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

type DropDownMenuProps = {
  activeButtonName: string;
  sectionName: string;
  arr: SocialMediaType[];
};
export function DropDownMenu({
  activeButtonName,
  sectionName,
  arr,
}: DropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{activeButtonName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{sectionName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {arr.map((item) => (
          <DropdownMenuItem asChild key={item.name}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <item.icon />
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
