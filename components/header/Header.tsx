import clsx from "clsx";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={clsx("container")}>
      <Image src="/logo.svg" alt="Logo" width={220} height={125} />
    </header>
  );
};
