import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export type BreadCrumbPaths = { name: string; href: Url }[];

export function BreadCrumb({ paths }: { paths: BreadCrumbPaths }) {
  return (
    <nav>
      {paths.map((path, idx) => (
        <Link key={path.name} href={path.href}>
          {path.name} {idx < paths.length - 1 && "/ "}
        </Link>
      ))}
    </nav>
  );
}
