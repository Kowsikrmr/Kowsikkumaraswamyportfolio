import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Kowsik Naraayanan K, Azure Cloud Operations Engineer with 2.5+ years in cloud infrastructure, CI/CD, ETL and Power BI reporting.",
      },
      { property: "og:title", content: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        property: "og:description",
        content:
          "Azure Cloud Operations Engineer specializing in Key Vault, Blob Storage, Entra ID, GitHub Actions CI/CD and Power BI dashboards.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { title: "Azure Cloud", items: ["Data Factory", "Key Vault", "Blob Storage", "Entra ID", "Azure CLI", "VNet / RBAC"] },
  { title: "DevOps", items: ["GitHub", "Git", "GitHub Actions CI/CD", "Shell Scripting"] },
  { title: "Data", items: ["SQL Server (SSMS)", "Power BI", "Power Automate", "Excel / Pivot / VLOOKUP"] },
  { title: "Languages", items: ["Python", "C# batch processes", "Bash"] },
];

const experience = [
  {
    role: "Cloud Operations Analyst",
    company: "BCforward India Technologies",
    client: "HPi (Hewlett-Packard)",
    period: "Apr 2025 — Present",
    blocks: [
      {
        label: "Azure Cloud & Access Management · Nov'25 — Present",
        points: [
          "Managed Azure Blob Storage lifecycle operations via Azure CLI (Bash) with automation to improve efficiency.",
          "Created and managed Azure Key Vaults, securing secret storage and lifecycle management.",
          "Implemented IAM: user provisioning, role assignment and RBAC enforcement.",
          "Designed and deployed Virtual Networks for secure, scalable production connectivity.",
          "Worked across JIRA, Confluence and Citrix Workspace for tracking and documentation.",
        ],
      },
      {
        label: "ETL Operations & Power BI Reporting · Apr'25 — Nov'25",
        points: [
          "Consolidated data from Email, SharePoint, Power BI and enterprise portals (OSS, S4).",
          "Managed SQL Server ingestion through C# batch processes with accuracy monitoring.",
          "Published Control Tower dashboards covering performance, backlog and financial metrics.",
        ],
      },
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Nisum Consulting Pvt Ltd, Hyderabad",
    client: "Albertsons (Safeway) · Engineering Operations",
    period: "Jan 2024 — Jan 2025",
    blocks: [
      {
        label: "Cloud Engineering",
        points: [
          "Implemented Azure Key Vault for secure secret storage with automated renewal.",
          "Configured Service Principals in Microsoft Entra ID for secure authentication and authorization.",
          "Built scalable Azure Blob Storage solutions optimized for performance and cost.",
          "Designed data integration pipelines in Azure Data Factory for reliable transfer and transformation.",
          "Managed repositories and GitHub Actions CI/CD, automating testing and deployment.",
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "M.Tech, Cloud Computing",
    school: "BITS Pilani",
    period: "2025 — Present",
    note: "Project — AWS IAM Security Implementation: secure IAM design using RBAC, ABAC, least-privilege policies, MFA and CloudTrail/S3 audit logging for compliance readiness.",
  },
  {
    degree: "B.E, Computer Science and Engineering",
    school: "Prince Shri Venkateshwara Padmavathy Engineering College",
    period: "2019 — 2023",
    note: "CGPA 8.3 / 10",
  },
];

function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `translateZ(30px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="scene">
      <div ref={ref} className={`card-3d ${className}`}>
        {children}
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="glow-orb left-[-8rem] top-[-6rem] h-[26rem] w-[26rem] bg-primary" />
        <div className="glow-orb right-[-6rem] top-[20rem] h-[24rem] w-[24rem] bg-accent [animation-delay:-5s]" />
        <div className="glow-orb bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] bg-violet [animation-delay:-9s]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg font-bold tracking-tight">KN·K</span>
        <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
          <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
          <a href="#experience" className="transition-colors hover:text-primary">Experience</a>
          <a href="#education" className="transition-colors hover:text-primary">Education</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
        <div aria-hidden className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-64" />
        <div className="scene relative">
          <div className="animate-rise max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">
              Azure Cloud Operations Engineer
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">
              <span className="text-gradient">Kowsik Naraayanan K</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              2.5+ years managing, configuring and optimizing Azure environments — secure secret
              management, IAM and RBAC, CI/CD with GitHub Actions, and ETL pipelines feeding
              Power BI Control Tower dashboards.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={resumeAsset.url}
                download="Kowsik_Naraayanan_K_Resume.pdf"
                className="rounded-full px-7 py-3 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                Download Résumé
              </a>
              <a
                href="mailto:kowsikrmr@gmail.com"
                className="rounded-full border border-border px-7 py-3 font-display text-sm font-bold transition-colors hover:border-primary hover:text-primary"
              >
                kowsikrmr@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { k: "2.5+ yrs", v: "Cloud operations experience" },
              { k: "2", v: "Enterprise clients — HP, Albertsons" },
              { k: "M.Tech", v: "Cloud Computing @ BITS Pilani" },
            ].map((s) => (
              <Tilt key={s.k} className="p-6">
                <p className="font-display text-3xl font-bold text-gradient">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Section id="skills" eyebrow="Toolkit" title="Technical Skills">
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((g) => (
              <Tilt key={g.title} className="p-7">
                <h3 className="font-display text-xl font-bold">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Track record" title="Project Experience">
          <div className="space-y-8">
            {experience.map((e) => (
              <Tilt key={e.company} className="p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{e.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.company} · <span className="text-accent">{e.client}</span>
                    </p>
                  </div>
                  <span className="rounded-full border border-border px-4 py-1.5 font-display text-xs tracking-wide text-primary">
                    {e.period}
                  </span>
                </div>
                <div className="mt-6 space-y-6">
                  {e.blocks.map((b) => (
                    <div key={b.label}>
                      <p className="font-display text-sm font-bold text-amber">{b.label}</p>
                      <ul className="mt-3 space-y-2">
                        {b.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Foundation" title="Education">
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((ed) => (
              <Tilt key={ed.degree} className="p-7">
                <span className="font-display text-xs tracking-widest text-primary">{ed.period}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{ed.degree}</h3>
                <p className="mt-1 text-sm text-accent">{ed.school}</p>
                <p className="mt-4 text-sm text-muted-foreground">{ed.note}</p>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Say hello" title="Let's build on the cloud">
          <Tilt className="p-10 text-center">
            <p className="mx-auto max-w-xl text-muted-foreground">
              Open to cloud operations, DevOps and data platform roles. Reach out anytime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kowsikrmr@gmail.com"
                className="rounded-full px-7 py-3 font-display text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                kowsikrmr@gmail.com
              </a>
              <a
                href="tel:+917305768257"
                className="rounded-full border border-border px-7 py-3 font-display text-sm font-bold transition-colors hover:border-accent hover:text-accent"
              >
                +91 73057 68257
              </a>
            </div>
          </Tilt>
        </Section>

        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kowsik Naraayanan K
        </footer>
      </div>
    </main>
  );
}
