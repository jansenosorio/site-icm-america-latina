import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div className="flex items-center justify-between h-full">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={220} height={125} />
      </Link>
    </div>
  );
}
