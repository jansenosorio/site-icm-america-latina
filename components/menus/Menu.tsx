import { MenuItem } from "@/const/menu-itens";
import Link from "next/link";
import { Button } from "../ui/button";

type MenuProps = {
  menuItens: MenuItem[];
};
export function Menu({ menuItens }: MenuProps) {
  return (
    <nav className="text-red-950 px-4">
      <div className="mx-auto flex justify-between items-center">
        <ul className="grid grid-cols-2 md:flex md:items-center gap-4">
          {menuItens.map((item) => (
            <Button variant={"ghost"} asChild key={item.href}>
              <Link href={item.href} className="hover:text-white">
                {item.title}
              </Link>
            </Button>
          ))}
        </ul>
      </div>
    </nav>
  );
}
