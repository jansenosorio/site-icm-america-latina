import clsx from "clsx";

type SectionTitleProps = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
export function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div className={clsx("flex items-center gap-4")}>
      {Icon && <Icon className="h-6 w-6 text-red-950" />}
      <h3 className="text-2xl font-bold text-red-950">{title}</h3>
    </div>
  );
}
