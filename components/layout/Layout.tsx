import clsx from "clsx";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={clsx("flex flex-col min-h-screen")}>
      <Header />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
}
