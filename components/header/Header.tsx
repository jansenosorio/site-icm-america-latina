import clsx from "clsx";
import { Menu } from "./Menu";
import { Logo } from "../logo";
import { MENU_ITENS } from "@/const/menu-itens";

export const Header = () => {
  return (
    <header className={clsx("w-full py-5", "container")}>
      <div className={clsx("flex items-center justify-between")}>
        <Logo />
        <Menu menuItens={MENU_ITENS} />
      </div>
    </header>
  );
};
