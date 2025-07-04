import { MenuItem } from "@/const/menu-itens";
import Link from "next/link";
import { Button } from "../ui/button";

type MenuProps = {
  menuItens: MenuItem[];
};
export function Menu({ menuItens }: MenuProps) {
  return (
    <nav className="text-red-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
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
