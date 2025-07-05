type TitleCardProps = {
  title: string;
};
export function TitleCard({ title }: TitleCardProps) {
  return <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>;
}
