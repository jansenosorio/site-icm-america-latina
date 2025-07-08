import clsx from "clsx";
type HeroSectionProps = {
  lema: string;
};
export function HeroSection({ lema }: HeroSectionProps) {
  return (
    <div
      className={clsx(
        "w-screen h-60 bg-red-800",
        "flex items-center justify-center"
      )}
    >
      <div className="container">
        <h1
          className={clsx(
            "text-white text-2xl md:text-3xl font-semibold whitespace-pre-wrap text-center"
          )}
        >
          {lema}
        </h1>
      </div>
    </div>
  );
}
