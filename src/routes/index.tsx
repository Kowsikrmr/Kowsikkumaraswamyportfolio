import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ProjectCaseDialog } from "@/components/ui/project-case-dialog";
import { caseStudies } from "@/data/case-studies";
import { PHOTO_FORMAL } from "@/lib/photos";
import { downloadResume } from "@/lib/resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        name: "description",
        content:
          "Azure Cloud Operations Engineer. Key Vault, Entra ID, RBAC, Data Factory, GitHub Actions CI/CD, and Power BI for enterprise clients.",
      },
    ],
  }),
  component: Portfolio,
});

const expertise = [
  {
    title: "Azure infrastructure and security",
    items: [
      "Azure Key Vault",
      "Microsoft Entra ID",
      "RBAC & service principals",
      "Blob Storage",
      "Azure CLI",
      "Virtual Networks",
    ],
  },
  {
    title: "Automation and delivery",
    items: ["GitHub Actions", "CI/CD pipelines", "Bash / shell scripting", "Git", "Workflow automation"],
  },
  {
    title: "Data and reporting",
    items: [
      "Azure Data Factory",
      "SQL Server",
      "Power BI Control Tower",
      "Power Automate",
      "Excel",
      "C# batch ingestion",
    ],
  },
  {
    title: "Engineering tools",
    items: ["Python", "Jira", "Confluence", "Citrix Workspace"],
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
          "Managed Blob Storage lifecycle with Azure CLI and Bash; automated recurring tasks.",
          "Provisioned Key Vaults for secret storage and lifecycle control.",
          "IAM: user provisioning, role assignments, and RBAC enforcement.",
          "Deployed VNets for production connectivity.",
          "Tracked work in JIRA, Confluence, and Citrix Workspace.",
        ],
      },
      {
        label: "ETL & Power BI · Apr 2025 — Nov 2025",
        points: [
          "Pulled data from email, SharePoint, Power BI, OSS, and S4 for analysis.",
          "Supported SQL Server ingestion via C# batch jobs with monitoring.",
          "Maintained Power BI Control Tower dashboards for performance, backlog, and financial metrics.",
          "Used Excel and Power Automate for day-to-day workflow support.",
        ],
      },
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Nisum Consulting Pvt Ltd, Hyderabad",
    client: "Albertsons (Safeway)",
    period: "Jan 2024 — Jan 2025",
    blocks: [
      {
        label: "Cloud Engineering & CI/CD",
        points: [
          "Key Vault for secrets with automated renewal, integrated with Azure services.",
          "Service principals in Entra ID for app authentication.",
          "Blob Storage solutions tuned for performance and cost.",
          "Data Factory pipelines for transfer and transformation.",
          "GitHub Actions CI/CD for test and deploy.",
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
    note: "Academic project: AWS IAM design with RBAC, ABAC, least privilege, MFA, and CloudTrail/S3 audit logging.",
  },
  {
    degree: "B.E, Computer Science and Engineering",
    school: "Prince Shri Venkateshwara Padmavathy Engineering College",
    period: "2019 — 2023",
    note: "CGPA 8.3 / 10",
  },
];

function Section({
  id,
  label,
  title,
  children,
  dark = false,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 ${
        dark ? "bg-ink text-white" : "bg-background text-foreground"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className={`section-label ${dark ? "text-white/50" : ""}`}>{label}</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-[2.75rem]">{title}</h2>
        <div className={`mt-3 h-px w-12 ${dark ? "bg-white/20" : "bg-border"}`} />
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [caseIndex, setCaseIndex] = useState(0);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Floating glass navigation */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="glass-nav flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:px-5 sm:py-2.5">
          <a href="#" className="flex shrink-0 items-center gap-2.5 pl-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-sm text-white">
              KN
            </span>
            <span className="hidden font-sans text-sm font-semibold tracking-tight text-ink sm:inline">
              Kowsik
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-[13px] font-medium text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={downloadResume}
              className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-graphite sm:px-4 sm:py-2 sm:text-[13px]"
              aria-label="Download résumé PDF"
            >
              Résumé
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-[4.25rem] z-40 px-3 md:hidden">
          <nav className="glass-nav rounded-2xl p-3 shadow-lg">
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-secondary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
        <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="animate-fade-up">
            <p className="section-label">Azure Cloud Operations Engineer</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-tight text-ink">
              Cloud systems.
              <br />
              <span className="italic text-steel">Built with care.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Azure cloud operations, identity and access management, automation, and data workflows.
            </p>
            <div className="mt-2">
              <span className="font-script text-2xl text-champagne sm:text-3xl">Kowsik Naraayanan K</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-graphite"
              >
                Explore my work
              </a>
              <button
                type="button"
                onClick={downloadResume}
                className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-secondary"
              >
                Download résumé
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs animate-fade-up lg:mx-0 lg:max-w-none" style={{ animationDelay: "0.12s" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-lift)]">
              <img
                src={PHOTO_FORMAL}
                alt="Kowsik Naraayanan K"
                width={400}
                height={500}
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Minimal network diagram accent */}
            <svg
              className="pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-32 text-steel/30 sm:block"
              viewBox="0 0 120 80"
              fill="none"
              aria-hidden
            >
              <circle cx="12" cy="40" r="4" fill="currentColor" />
              <circle cx="60" cy="16" r="4" fill="currentColor" />
              <circle cx="60" cy="64" r="4" fill="currentColor" />
              <circle cx="108" cy="40" r="4" fill="currentColor" />
              <path d="M16 40H56M64 20L104 38M64 60L104 42" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section id="about" className="border-y border-border bg-card px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto grid w-full max-w-5xl gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            { k: "2.5+ years", v: "Cloud operations across Azure environments" },
            { k: "Enterprise clients", v: "HP and Albertsons via BCforward and Nisum" },
            { k: "M.Tech in progress", v: "Cloud Computing at BITS Pilani" },
          ].map((s) => (
            <div key={s.k} className="text-center sm:text-left">
              <p className="font-display text-xl text-ink sm:text-2xl">{s.k}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <Section id="expertise" label="Toolkit" title="Technical expertise">
        <div className="grid gap-6 sm:grid-cols-2">
          {expertise.map((g) => (
            <div key={g.title} className="surface-card p-6 sm:p-7">
              <h3 className="font-display text-xl text-ink">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-steel" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience timeline */}
      <Section id="experience" label="Track record" title="Experience">
        <div className="space-y-10">
          {experience.map((e, idx) => (
            <article key={e.company} className="relative grid gap-4 border-l-2 border-border pl-6 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-steel" />
              <div>
                <h3 className="font-display text-2xl text-ink">{e.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.company}
                  <span className="mx-1.5 text-border">·</span>
                  <span className="text-steel">{e.client}</span>
                </p>
                <div className="mt-5 space-y-5">
                  {e.blocks.map((b) => (
                    <div key={b.label}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-champagne">{b.label}</p>
                      <ul className="mt-2.5 space-y-2">
                        {b.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel/60" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <span className="h-fit w-fit rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                {e.period}
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Projects — editorial list, no lazy-load polaroid */}
      <Section id="projects" label="Work" title="Selected work" dark>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/60">
          Focus areas from enterprise engagements and academic work. Each entry reflects real responsibilities — not standalone products.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              type="button"
              onClick={() => {
                setCaseIndex(i);
                setCaseOpen(true);
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">{cs.context}</p>
              <h3 className="mt-2 font-display text-xl text-white group-hover:text-white">{cs.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{cs.caption}</p>
              <p className="mt-4 text-xs font-medium text-champagne">View details →</p>
            </button>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="Education" title="Education">
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((ed) => (
            <div key={ed.degree} className="surface-card p-6 sm:p-7">
              <h3 className="font-display text-xl text-ink">{ed.degree}</h3>
              <p className="mt-1 text-sm font-medium text-steel">{ed.school}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-champagne">{ed.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ed.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact" title="Get in touch">
        <div className="surface-card p-8 sm:p-10">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Open to conversations about Azure cloud operations, identity and access management, DevOps, and related engineering roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:kowsikrmr@gmail.com"
              className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-graphite"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/kowsiknaraayanan/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-secondary"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={downloadResume}
              className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-secondary"
            >
              Résumé
            </button>
          </div>
          <p className="mt-6 font-script text-2xl text-champagne">— Kowsik</p>
        </div>
      </Section>

      <ProjectCaseDialog study={caseStudies[caseIndex] ?? null} open={caseOpen} onOpenChange={setCaseOpen} />

      {/* Footer */}
      <footer className="border-t border-border px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-medium text-ink">Kowsik Naraayanan K</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Azure Cloud Operations Engineer</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="https://github.com/Kowsikrmr" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kowsiknaraayanan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
            <button type="button" onClick={downloadResume} className="hover:text-ink">
              Résumé
            </button>
          </div>
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
