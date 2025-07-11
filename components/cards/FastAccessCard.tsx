import clsx from "clsx";
import { TitleCard } from "../typography/TitleCard";
import Link from "next/link";

type FastAccessCardProps = {
  backgroundImage: string;
  title: string;
  href: string;
};
export function FastAccessCard({
  backgroundImage,
  title,
  href,
}: FastAccessCardProps) {
  return (
    <Link href={href} className="min-w-full md:min-w-fit">
      <div className={clsx("w-full md:min-w-fit", "flex items-center gap-4")}>
        <div
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={clsx(
            "relative",
            "w-full md:w-[340px] h-64 rounded-lg shadow-2xl",
            "cursor-pointer",
            "hover:shadow-gray-950/80 hover:scale-105 active:scale-95 transition-all duration-300"
          )}
        >
          <div
            className={clsx(
              "flex items-end w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-700 to-transparent z-10 rounded-lg",
              "p-4"
            )}
          >
            <TitleCard title={title} />
          </div>
        </div>
      </div>
    </Link>
  );
}
