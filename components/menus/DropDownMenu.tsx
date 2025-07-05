import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type DropDownMenuProps = {
  activeButtonName: string;
  sectionName: string;
};
export function DropDownMenu({
  activeButtonName,
  sectionName,
}: DropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>{activeButtonName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{sectionName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Facturación</DropdownMenuItem>
        <DropdownMenuItem>Equipo</DropdownMenuItem>
        <DropdownMenuItem>Suscripción</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
