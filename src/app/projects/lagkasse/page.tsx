import { BreadCrumb, BreadCrumbPaths } from "@/app/_components/BreadCrumb";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lagkasse / Project",
  description:
    "Discover how I developed Lagkasse, a multitenant accounting platform for sports teams. Learn about the tech stack, role-based authentication, customizable group structures, and the challenges of building scalable financial software.",
};

export default function Page() {
  const paths: BreadCrumbPaths = [
    { name: "projects", href: "/projects" },
    { name: "lagkasse", href: "/projects/lagkasse" },
  ];
  return (
    <>
      <article className="py-5">
        <section>
          <BreadCrumb paths={paths} />
          <h1 className="pt-5">
            Lagkasse – An Accounting Platform for Sports Teams
          </h1>
          <div className="flex flex-row justify-between">
            <p className="italic text-gray-200">
              Written by: Casper Salminen Andreassen
            </p>
            <p className="italic text-gray-200">
              {new Date(2025, 2, 14).toLocaleDateString()}
            </p>
          </div>
          <hr className="border-t-2 border-gray-600" />
        </section>
        <section>
          <figure className="text-center py-3">
            <Image
              src="/lagkasse/pic1.png"
              width={4320}
              height={2478}
              alt="Picture of the Lagkasse application"
              className="mx-auto"
            />
            <figcaption className="text-sm text-gray-200">
              A transaction made with an attachment in Lagkasse.
            </figcaption>
          </figure>
          <p>
            As a developer, I enjoy tackling real-world problems with software
            solutions. One such problem was the financial management of sports
            teams—many clubs struggle with keeping track of funds, roles, and
            reporting. To address this, I built Lagkasse in cooperation with the
            idea owner, an accounting platform designed specifically for sports
            organizations. The platform was developed with{" "}
            <strong>multitenancy</strong> in mind, ensuring that multiple clubs
            could use the system independently while sharing the same
            infrastructure.
          </p>
        </section>
        <section>
          <h2>Technical Challenges & Solutions</h2>

          <figure className="text-center py-3">
            <Image
              src="/lagkasse/multi_tenant.png"
              width={4064}
              height={1984}
              alt="Diagram of the multi tenancy"
              className="mx-auto rounded-md "
            />
            <figcaption className="text-sm text-gray-200">
              Diagram of the multi tenancy in Lagkasse.
            </figcaption>
          </figure>

          <section>
            <h3>Flexible Group Structure</h3>
            <p>
              A key challenge was ensuring that clubs could structure their
              finances in a way that made sense for them. Instead of forcing a
              rigid model, I implemented a customizable group hierarchy where a
              club can divide itself into multiple subdivisions (e.g., football,
              handball) while maintaining a single bank account. This required
              designing a robust relational data model that tracks balances and
              transactions per group while enforcing strict data isolation
              between different organizations.
            </p>
          </section>
          <section>
            <h3>Role-Based Authentication with Two Layers</h3>
            <p>
              Security was a major focus, especially given that different users
              needed different levels of access. I implemented role-based
              authentication at two levels:
            </p>
            <ul>
              <li>Organization-level roles, managing the entire club.</li>
              <li>
                Group-level roles, giving specific teams control over their own
                finances.
              </li>
            </ul>
            <p>
              This ensures that group admins only see their own data, while
              accountants can be invited for financial oversight.
            </p>
          </section>
        </section>
        <section>
          <figure className="text-center py-3">
            <Image
              src="/lagkasse/filtering.png"
              width={4320}
              height={2478}
              alt="Picture of filtering capabilities in lagkasse."
              className="mx-auto"
            />
            <figcaption className="text-sm text-gray-200">
              Main view with filtered transactions
            </figcaption>
          </figure>
          <h2>Streamlined Reporting & Data Exports</h2>
          <p>
            Financial transparency is important, so I built a powerful export
            system that allows clubs to generate reports and extract structured
            data. This required designing efficient SQL queries to handle
            complex filtering, sorting, and aggregation across multiple levels
            of financial records.
          </p>
        </section>
        <section>
          <h2>Tech Stack & Implementation</h2>
          <p>
            I built Lagkasse using the T3 Stack (Next.js, tRPC, TypeScript,
            Tailwind CSS) and Supabase as the backend. This stack allowed me to:
          </p>
          <ul>
            <li>Build a type-safe API using tRPC.</li>
            <li>
              Leverage Supabase for authentication, database management, and
              real-time data synchronization.
            </li>
            <li>Ensure a snappy UI with Next.js and Tailwind CSS.</li>
          </ul>
        </section>
        <section>
          <h2>Lessons Learned</h2>
          <p>
            Developing Lagkasse reinforced several important software
            engineering principles:
          </p>
          <ul>
            <li>
              <strong>Scalability:</strong> Designing a system that supports
              different club structures and large datasets.
            </li>
            <li>
              <strong>Security:</strong> Implementing fine-grained access
              control without compromising usability.
            </li>
            <li>
              <strong>User Experience:</strong> Balancing complexity with an
              intuitive UI that makes financial management easy.
            </li>
          </ul>
        </section>
        <section>
          <h2>Final Thoughts</h2>
          <p>
            Lagkasse was an exciting project that allowed me to combine my
            technical expertise with solving a real-world problem. It showcases
            my ability to build scalable, secure, and user-friendly
            applications.
          </p>
        </section>
      </article>
    </>
  );
}
