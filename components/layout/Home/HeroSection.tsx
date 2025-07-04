import clsx from "clsx";
type HeroSectionProps = {
  lema: string;
};
export function HeroSection({ lema }: HeroSectionProps) {
  return (
    <div
      className={clsx(
        "w-screen h-96 bg-red-900",
        "flex items-center justify-center"
      )}
    >
      <div className="container">
        <h1
          className={clsx(
            "text-white text-2xl md:text-4xl font-bold whitespace-pre-wrap text-center"
          )}
        >
          {lema}
        </h1>
      </div>
    </div>
  );
}
