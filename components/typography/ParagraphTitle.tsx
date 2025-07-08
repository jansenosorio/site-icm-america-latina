export function ParagraphTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-800 pt-5">
      {children}
    </h2>
  );
}
