import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        name: "description",
        content:
          "Azure Cloud Operations Engineer with 2.5+ years experience in Key Vault, Blob Storage, Entra ID, RBAC, Azure Data Factory, GitHub Actions CI/CD and Power BI Control Tower dashboards. Open to cloud operations and DevOps roles.",
      },
      { property: "og:title", content: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        property: "og:description",
        content:
          "Azure Cloud Operations Engineer specializing in secure IAM, Key Vault, Blob Storage, Entra ID, GitHub Actions CI/CD and Power BI dashboards for enterprise clients (HP, Albertsons).",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "Azure Cloud Operations, Azure Key Vault, Entra ID, RBAC, Azure Data Factory, GitHub Actions, CI/CD, Power BI, SQL Server, Cloud Engineer, DevOps" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    title: "Azure Cloud",
    items: ["Azure Data Factory", "Key Vault", "Blob Storage", "Microsoft Entra ID", "Azure CLI", "VNet", "RBAC", "Service Principals"],
  },
  {
    title: "DevOps & Automation",
    items: ["GitHub Actions CI/CD", "Git / GitHub", "Shell Scripting", "Bash automation"],
  },
  {
    title: "Data & Reporting",
    items: ["SQL Server (SSMS)", "Power BI (Control Tower)", "Power Automate", "Excel (Pivot, VLOOKUP)", "C# batch ingestion"],
  },
  {
    title: "Languages & Tools",
    items: ["Python", "C#", "Bash", "JIRA", "Confluence", "Citrix Workspace"],
  },
];

const experience = [
  {
    role: "Cloud Operations Analyst",
    company: "BCforward India Technologies",
    client: "HPi (Hewlett-Packard)",
    period: "Apr 2025 — Present",
    blocks: [
      {
        label: "Azure Cloud & Access Management · Nov 2025 — Present",
        points: [
          "Managed Azure Blob Storage lifecycle (create/delete) using Azure CLI and Bash scripts; automated recurring tasks to reduce manual effort.",
          "Provisioned and managed Azure Key Vaults for secure secret storage and lifecycle control.",
          "Implemented IAM: user provisioning, role assignments and enforced Role-Based Access Control (RBAC) policies.",
          "Designed and deployed Virtual Networks (VNet) for production environments, enabling secure and scalable connectivity.",
          "Coordinated work across JIRA, Confluence and Citrix Workspace for task tracking, documentation and remote access.",
        ],
      },
      {
        label: "ETL Operations & Power BI Reporting · Apr 2025 — Nov 2025",
        points: [
          "Consolidated data from Email, SharePoint, Power BI dashboards and enterprise systems (OSS, S4) for analysis.",
          "Supported data ingestion into SQL Server (SSMS) via C# batch processes with monitoring for accuracy and consistency.",
          "Maintained and published Power BI Control Tower dashboards delivering insights on performance, backlog and financial metrics.",
          "Applied Excel data processing and functional exposure to Power Automate for workflow support.",
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
        label: "Cloud Engineering & CI/CD",
        points: [
          "Implemented Azure Key Vault for secure secret storage with automated renewal; integrated with Azure services.",
          "Configured Service Principals in Microsoft Entra ID for secure authentication and authorization.",
          "Built scalable Azure Blob Storage solutions optimized for performance and cost; integrated with applications.",
          "Designed and oversaw data integration pipelines in Azure Data Factory for reliable transfer and transformation.",
          "Managed GitHub repositories and implemented GitHub Actions CI/CD pipelines to automate testing and deployment.",
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "M.Tech, Cloud Computing",
    school: "Birla Institute of Technology and Science (BITS), Pilani",
    period: "2025 — Present",
    note: "M.Tech Project — AWS IAM Security Implementation: Designed and validated a secure AWS IAM solution using RBAC, ABAC, least-privilege policies, MFA, and CloudTrail/S3 audit logging to enforce access control and demonstrate cloud security compliance readiness.",
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

    // Disable heavy 3D on coarse pointers / small screens for better mobile UX
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow = window.matchMedia("(max-width: 640px)").matches;
    if (isCoarse || isNarrow) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `translateZ(24px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
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
    <section id={id} className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="glow-orb left-[-8rem] top-[-6rem] h-[22rem] w-[22rem] bg-primary sm:h-[26rem] sm:w-[26rem]" />
        <div className="glow-orb right-[-6rem] top-[18rem] h-[20rem] w-[20rem] bg-accent [animation-delay:-5s] sm:h-[24rem] sm:w-[24rem]" />
        <div className="glow-orb bottom-[-8rem] left-1/3 h-[18rem] w-[18rem] bg-violet [animation-delay:-9s] sm:h-[22rem] sm:w-[22rem]" />
      </div>

      {/* Sticky header — logo left, nav center, Download Résumé top-right */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
          <a href="#" className="font-display shrink-0 text-base font-bold tracking-tight sm:text-lg">
            KN·K
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Kowsik_Naraayanan_K_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 font-display text-xs font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
              style={{ backgroundImage: "var(--gradient-hero)" }}
              aria-label="Download résumé PDF"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden xs:inline sm:inline">Résumé</span>
              <span className="sm:hidden">CV</span>
            </a>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="border-t border-border/60 bg-background/95 px-4 py-3 sm:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
        <div aria-hidden className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-48 sm:h-64" />
        <div className="scene relative">
          <div className="animate-rise max-w-3xl">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.35em] text-accent sm:text-xs sm:tracking-[0.4em]">
              Azure Cloud Operations Engineer
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient">Kowsik Naraayanan K</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              2.5+ years managing and optimizing Azure environments for enterprise clients.
              Specializing in secure secret management (Key Vault), IAM &amp; RBAC, Virtual Networks,
              Azure Data Factory pipelines, GitHub Actions CI/CD, and Power BI Control Tower dashboards.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <a
                href="/resume.pdf"
                download="Kowsik_Naraayanan_K_Resume.pdf"
                className="rounded-full px-6 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                Download Résumé
              </a>
              <a
                href="mailto:kowsikrmr@gmail.com"
                className="rounded-full border border-border px-6 py-2.5 font-display text-sm font-bold transition-colors hover:border-primary hover:text-primary sm:px-7 sm:py-3"
              >
                kowsikrmr@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
            {[
              { k: "2.5+ yrs", v: "Cloud operations experience" },
              { k: "2", v: "Enterprise clients — HP & Albertsons" },
              { k: "M.Tech", v: "Cloud Computing @ BITS Pilani" },
            ].map((s) => (
              <Tilt key={s.k} className="p-5 sm:p-6">
                <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.k}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.v}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Section id="skills" eyebrow="Toolkit" title="Technical Skills">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {skills.map((g) => (
              <Tilt key={g.title} className="p-5 sm:p-7">
                <h3 className="font-display text-lg font-bold sm:text-xl">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground sm:px-3 sm:py-1.5 sm:text-sm"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Track record" title="Professional Experience">
          <div className="space-y-6 sm:space-y-8">
            {experience.map((e) => (
              <Tilt key={e.company} className="p-5 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{e.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.company}
                      <span className="mx-1.5 text-border">·</span>
                      <span className="text-accent">{e.client}</span>
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-border px-3 py-1 font-display text-xs tracking-wide text-primary sm:px-4 sm:py-1.5">
                    {e.period}
                  </span>
                </div>
                <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                  {e.blocks.map((b) => (
                    <div key={b.label}>
                      <p className="font-display text-sm font-bold text-amber">{b.label}</p>
                      <ul className="mt-2.5 space-y-2 sm:mt-3">
                        {b.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:gap-3">
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
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {education.map((ed) => (
              <Tilt key={ed.degree} className="p-5 sm:p-7">
                <span className="font-display text-xs tracking-widest text-primary">{ed.period}</span>
                <h3 className="mt-2 font-display text-lg font-bold sm:mt-3 sm:text-xl">{ed.degree}</h3>
                <p className="mt-1 text-sm text-accent">{ed.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4">{ed.note}</p>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Say hello" title="Let's build on the cloud">
          <Tilt className="p-6 text-center sm:p-10">
            <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
              Open to Azure Cloud Operations, DevOps and data platform roles.
              Available for opportunities that value secure, scalable cloud infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href="mailto:kowsikrmr@gmail.com"
                className="rounded-full px-6 py-2.5 font-display text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                kowsikrmr@gmail.com
              </a>
              <a
                href="tel:+917305768257"
                className="rounded-full border border-border px-6 py-2.5 font-display text-sm font-bold transition-colors hover:border-accent hover:text-accent sm:px-7 sm:py-3"
              >
                +91 73057 68257
              </a>
            </div>
          </Tilt>
        </Section>

        <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground sm:py-8 sm:text-sm">
          © {new Date().getFullYear()} Kowsik Naraayanan K · Azure Cloud Operations Engineer
        </footer>
      </div>
    </main>
  );
}
