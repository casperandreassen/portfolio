"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-end">
      <section className="flex flex-row gap-5 items-end">
        <NavBarLink name="Projects" href={"/projects"} />
        <NavBarLink name="About" href={"/about"} />
        <NavBarLink name="Contact" href={"/contact"} />
      </section>
      <Link href={"/"} className="hidden sm:block h-fit">
        <Image
          src={"/logo_light.svg"}
          height={56}
          width={217}
          alt="Casper logo"
        />
      </Link>
    </nav>
  );
}

function NavBarLink({ name, href }: { name: string; href: Url }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href.toString());
  return (
    <Link
      className={`text-2xl font-bold ${isActive ? "underline" : ""}`}
      href={href}
    >
      {name}
    </Link>
  );
}
