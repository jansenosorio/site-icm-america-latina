import clsx from "clsx";
import { Menu } from "../menus/Menu";
import { Logo } from "../logo";
import { MENU_ITENS } from "@/const/menu-itens";
import { DropDownMenu } from "../menus";

export const Header = () => {
  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-50 w-full py-5 shadow-2xl",
        "bg-white"
      )}
    >
      <div
        className={clsx(
          "flex flex-col md:flex-row items-center justify-between",
          "container"
        )}
      >
        <Logo />
        <div className="flex items-center">
          <Menu menuItens={MENU_ITENS} />
          <DropDownMenu
            activeButtonName="Redes sociales"
            sectionName={"América Latina"}
          />
        </div>
      </div>
    </header>
  );
};
