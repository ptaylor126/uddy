"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const versions = [
  { label: "V1", href: "/" },
  { label: "V2", href: "/v2" },
  { label: "V3", href: "/v3" },
];

export default function StagingNav() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-uddy-black text-white flex items-center justify-center gap-1 py-1.5 px-4 text-xs font-bold uppercase tracking-widest border-b-2 border-uddy-green">
      <span className="text-uddy-green mr-3">Staging:</span>
      {versions.map((v) => {
        const isActive = pathname === v.href;
        return (
          <Link
            key={v.href}
            href={v.href}
            className={`px-3 py-1 transition-colors ${
              isActive
                ? "bg-uddy-green text-uddy-black"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            {v.label}
          </Link>
        );
      })}
    </div>
  );
}
