export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap text-justify">
      {children}
    </p>
  );
}
