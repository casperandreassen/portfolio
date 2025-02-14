import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Read about me as a person, my hobbies, education and experience.",
};

export default function Page() {
  return <p>Hello from about</p>;
}
