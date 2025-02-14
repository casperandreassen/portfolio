import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore some of the projects that i have worked on.",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-5 mt-5">
      <Link href={"/projects/lagkasse   "}>
        <Image
          src={"/cards/lagkasse_card.svg"}
          width={10000}
          height={350}
          alt={"Lagkasse project clickable."}
        />
      </Link>
      <Link href={"/projects/timetable"}>
        <Image
          src={"/cards/timetable_card.svg"}
          width={10000}
          height={350}
          alt={"Timetable project clickable."}
        />
      </Link>
    </main>
  );
}
