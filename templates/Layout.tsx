import clsx from "clsx";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={clsx("flex flex-col min-h-screen")}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
