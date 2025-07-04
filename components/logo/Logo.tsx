import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-between h-full">
      <Image src="/logo.svg" alt="Logo" width={220} height={125} />
    </div>
  );
}
