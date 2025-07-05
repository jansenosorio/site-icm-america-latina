type TextCardProps = {
  title: string;
};
export function TextCard({ title }: TextCardProps) {
  return <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>;
}
