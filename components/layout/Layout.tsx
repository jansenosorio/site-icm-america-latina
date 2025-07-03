import clsx from "clsx";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={clsx("flex flex-col min-h-screen")}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
