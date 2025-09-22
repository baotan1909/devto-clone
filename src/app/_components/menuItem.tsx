import Link from "next/link";
import type { ReactNode } from "react";

export default function MenuItem({
  href,
  children,
  onClick,
  borderTop = false,
  borderBottom = false,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  borderTop?: boolean;
  borderBottom?: boolean;
}) {
    const baseClass = "block px-6 py-4 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition";
    const border = `${borderTop ? "border-t border-gray-200" : ""} ${borderBottom ? "border-b border-gray-200" : ""}`
    
      return (
        <li className={border}>
            <Link href={href} className={baseClass} onClick={onClick}>
                {children}
            </Link>
        </li>
    );
}