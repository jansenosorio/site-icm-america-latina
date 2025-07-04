import clsx from "clsx";
import { Menu } from "./Menu";
import { Logo } from "../logo";
import { MENU_ITENS } from "@/const/menu-itens";

export const Header = () => {
  return (
    <header
      className={clsx(
        "sticky top-0 left-0 w-full py-5 shadow-2xl",
        "bg-red-100/10"
      )}
    >
      <div
        className={clsx(
          "flex flex-col md:flex-row items-center justify-between",
          "container"
        )}
      >
        <Logo />
        <Menu menuItens={MENU_ITENS} />
      </div>
    </header>
  );
};
