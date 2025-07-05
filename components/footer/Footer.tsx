import clsx from "clsx";
import { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <div
        style={{
          background: "url('/assets/images/bkg-footer.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className={clsx("w-full h-14")}
      ></div>
      <footer className="bg-gray-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ICM - Iglesia Cristiana Maranata.
            Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Sitio web desarrollado por{" "}
            <a
              href="https://github.com/jansenosorio"
              className="text-blue-400 hover:underline"
            >
              Jansen Osório
            </a>
          </p>
        </div>
      </footer>
    </Fragment>
  );
};
