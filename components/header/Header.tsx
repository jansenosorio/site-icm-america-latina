import clsx from "clsx";
import { Menu } from "./Menu";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className={clsx("w-full")}>
      <div className={clsx("flex items-center justify-between")}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
