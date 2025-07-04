import clsx from "clsx";

export function HomePage() {
  return (
    <section className="flex-grow h-full">
      <div
        className={clsx(
          "w-screen h-96 bg-red-900",
          "flex items-center justify-center"
        )}
      >
        <div className="container">
          <h1
            className={clsx(
              "text-white text-4xl font-bold whitespace-pre-wrap text-center"
            )}
          >
            {
              'Lema 2025\n"Huid, salvad vuestra vida, y sed como retama en el desierto." - Jeremías 48:6'
            }
          </h1>
        </div>
      </div>
    </section>
  );
}
