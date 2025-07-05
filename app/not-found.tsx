import { Archive } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-[60vh] md:h-screen bg-gray-100">
      <div className="text-center">
        <Archive className="mx-auto my-4 h-20 w-20 text-red-700" />
        <h1 className="text-8xl font-bold text-red-700">
          <p className="inline-block -translate-x-1 -rotate-12">4</p>04
        </h1>
        <p className="mt-4 text-lg text-gray-700">Página no encontrada</p>
      </div>
    </div>
  );
}
