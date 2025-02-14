import { BreadCrumb, BreadCrumbPaths } from "@/app/_components/BreadCrumb";
import Image from "next/image";

export default function Page() {
  const paths: BreadCrumbPaths = [
    { name: "projects", href: "/projects" },
    { name: "timetable", href: "/projects/timetable" },
  ];
  return (
    <>
      <article className="py-5">
        <section>
          <BreadCrumb paths={paths} />
          <h1 className="pt-5">
            Timetable - An expense and timesheet platform
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
              src="/timetable/expense.png"
              width={4320}
              height={2478}
              alt="Picture of an expense report in Timetable"
              className="mx-auto"
            />
            <figcaption className="text-sm text-gray-200">
              A expense that has been sent to the organization.
            </figcaption>
          </figure>
          <p>
            As a developer, I strive to create efficient, scalable, and
            user-friendly applications that solve real business problems. One of
            my recent projects, Timetable, is a timesheet and expense tracking
            application tailored for small to medium-sized businesses. Timetable
            demonstrates my expertise in full-stack development, multi-tenancy
            architecture, and seamless third-party integrations. The project
            also required a deep understanding of secure data management,
            third-party payment integration, and an intuitive user experience to
            streamline business workflows.
          </p>
        </section>
        <figure className="text-center py-3">
          <Image
            src="/timetable/timesheet.png"
            width={4320}
            height={2478}
            alt="Overview of timesheet entries"
            className="mx-auto"
          />
          <figcaption className="text-sm text-gray-200">
            Overview of timesheet entries for a given month.
          </figcaption>
        </figure>
        <section>
          <h2>Technical Highlights</h2>
          <p>
            Timetable is built using modern web technologies to ensure
            performance, security, and scalability. Each component of the
            application has been carefully crafted to provide a seamless and
            efficient experience for businesses and their employees.
          </p>
          <section>
            <h3>Technology Stack</h3>
            <ul>
              <li>
                <strong>Frontend</strong>: React with TRPC for type-safe API
                calls, ensuring a fast and dynamic user experience.
              </li>
              <li>
                <strong>Backend</strong>: Supabase for data management, offering
                a scalable and secure solution.
              </li>
              <li>
                <strong>Authentication & Security</strong>: Role-Based Access
                Control (RBAC) to define permissions between employers and
                employees.
              </li>
              <li>
                <strong>Subscription & Payment Handling</strong>: Stripe
                integration for seamless subscription management and automated
                billing.
              </li>
            </ul>
          </section>
          <section>
            <h3>Multi-Tenancy and Data Management</h3>
            <ul>
              <li>
                <strong>Multi-Tenant Architecture</strong>: Supports multiple
                businesses on the same platform with complete data isolation.
              </li>
              <li>
                <strong>Project-Based Expense & Time Tracking</strong>:
                Employees can log hours and expenses directly linked to projects
                for cost analysis.
              </li>
              <li>
                <strong>Customizable Workflows</strong>: Businesses can
                configure approval processes, submission deadlines, and expense
                approval chains.
              </li>
            </ul>
          </section>
          <section>
            <h3>Automation & Integration</h3>
            <ul>
              <li>
                <strong>Accounting System Sync</strong>: Expense reports are
                automatically integrated into the company&apos;s accounting
                software.
              </li>
              <li>
                <strong>Data Exporting Capabilities</strong>: Generate reports
                in CSV, PDF, or Excel for financial analysis.
              </li>
              <li>
                <strong>Mobile-Friendly Interface</strong>: Fully responsive
                design for tracking hours and expenses on the go.
              </li>
            </ul>
          </section>
        </section>
        <section>
          <h2>Business Impact</h2>
          <p>
            Timetable provides businesses with an affordable and effective way
            to manage employee work hours and expenses. By automating
            administrative tasks and integrating directly with accounting
            systems, it reduces overhead and improves financial tracking for
            employers. The combination of intuitive UI/UX and a strong technical
            foundation makes it a valuable tool for organizations looking for an
            all-in-one solution.
          </p>
          <figure className="text-center py-3">
            <Image
              src="/timetable/expenses.png"
              width={4320}
              height={2478}
              alt="Overview of expenses"
              className="mx-auto"
            />
            <figcaption className="text-sm text-gray-200">
              Overview of expense reports submitted for a given user.
            </figcaption>
          </figure>
          <p>
            Furthermore, Timetable enhances operational efficiency by reducing
            paperwork, minimizing errors, and streamlining approval processes.
            The ability to generate insightful reports helps businesses make
            informed decisions based on real-time data. With its cost-effective
            pricing model, small and medium-sized enterprises can leverage the
            platform to improve workforce management without incurring high
            expenses.
          </p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            Building Timetable allowed me to leverage my skills in full-stack
            development, cloud services, and secure multi-tenant application
            design. The project showcases my ability to develop scalable SaaS
            applications, integrate third-party services, and create intuitive
            user experiences. Additionally, it highlights my expertise in
            designing efficient database architectures, implementing payment
            solutions, and building enterprise-grade security models.
          </p>
          <p>
            This project has been a rewarding challenge, allowing me to refine
            my technical skills while creating a solution that genuinely
            improves business operations.
          </p>
        </section>
      </article>
    </>
  );
}
