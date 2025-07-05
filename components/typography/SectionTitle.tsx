import clsx from "clsx";
import { FolderTree } from "lucide-react";

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className={clsx("flex items-center gap-4")}>
      <FolderTree className="h-6 w-6 text-red-950" />
      <h3 className="text-2xl font-bold text-red-950">{title}</h3>
    </div>
  );
}
