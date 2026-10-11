import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, lazy, Suspense } from "react";
import Footer4Col from "@/components/ui/footer-column";
import { BrandMark } from "@/components/ui/brand-mark";
import { ProjectCaseDialog } from "@/components/ui/project-case-dialog";
import { caseStudies, caseStudyToSlide } from "@/data/case-studies";
import { PHOTO_FORMAL } from "@/lib/photos";

const PolaroidLineCarousel = lazy(() => import("@/components/ui/polaroid-line-carousel"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        name: "description",
        content:
          "Azure Cloud Operations Engineer with 2.5+ years in Key Vault, Entra ID, RBAC, Data Factory, GitHub Actions CI/CD, and Power BI.",
      },
      { property: "og:title", content: "Kowsik Naraayanan K — Azure Cloud Operations Engineer" },
      {
        property: "og:description",
        content:
          "Azure Cloud Operations Engineer. Key Vault, Entra ID, RBAC, Data Factory, GitHub Actions, Power BI. HP and Albertsons.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
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
    note: "Project: AWS IAM with RBAC, ABAC, least privilege, MFA, and CloudTrail/S3 audit logging.",
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
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(max-width: 640px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `translateZ(20px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
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

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 sm:text-xs">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">{title}</h2>
      <div aria-hidden className="mt-3 h-0.5 w-14 rounded-full" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}

function Portrait({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`photo-ring shadow-[var(--shadow-glow)] ${className}`}>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-secondary/60">
        {ok ? (
          <img
            src={src}
            alt={alt}
            width={256}
            height={256}
            className="h-full w-full object-cover object-top"
            onError={() => setOk(false)}
          />
        ) : (
          <span className="font-display text-3xl font-bold text-primary" aria-hidden>
            KN
          </span>
        )}
      </div>
    </div>
  );
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden />;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [caseIndex, setCaseIndex] = useState(0);

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
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorGlow />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="glow-orb left-[-8rem] top-[-6rem] h-[22rem] w-[22rem] bg-primary sm:h-[26rem] sm:w-[26rem]" />
        <div className="glow-orb right-[-6rem] top-[16rem] h-[18rem] w-[18rem] bg-indigo [animation-delay:-5s] sm:h-[22rem] sm:w-[22rem]" />
        <div className="glow-orb bottom-[-8rem] left-1/3 h-[16rem] w-[16rem] bg-amber [animation-delay:-9s] sm:h-[20rem] sm:w-[20rem]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
          <a href="#" className="flex shrink-0 items-center gap-2 font-display text-base font-bold tracking-tight sm:text-lg">
            <BrandMark size={30} className="shrink-0" />
            <span className="hidden sm:inline">Kowsik</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary">{l.label}</a>
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
              <span className="hidden sm:inline">Résumé</span>
              <span className="sm:hidden">CV</span>
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground sm:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/60 bg-background/95 px-4 py-3 sm:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <section className="relative z-10 min-h-[min(88vh,820px)] w-full overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
        <div aria-hidden className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-52" />
        <div className="relative z-10 mx-auto flex min-h-[min(88vh,820px)] w-full max-w-6xl flex-col items-center justify-end gap-10 px-4 pb-14 pt-12 sm:flex-row sm:items-end sm:gap-14 sm:px-6 sm:pb-20 sm:pt-16">
          <div className="order-2 max-w-xl flex-1 animate-rise sm:order-1">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.35em] text-amber sm:text-xs sm:tracking-[0.4em]">
              Azure Cloud Operations Engineer
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient">Kowsik Naraayanan K</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              2.5+ years on Azure for HP and Albertsons — Key Vault, Entra ID & RBAC, Data Factory, GitHub Actions, and Power BI Control Tower. AWS IAM depth from M.Tech at BITS Pilani.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <a
                href="/resume.pdf"
                download="Kowsik_Naraayanan_K_Resume.pdf"
                className="rounded-full px-6 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                Download Résumé
              </a>
              <a
                href="#experience"
                className="rounded-full border border-border/80 bg-background/40 px-6 py-2.5 font-display text-sm font-bold backdrop-blur-sm hover:border-primary hover:text-primary"
              >
                Experience
              </a>
            </div>
          </div>
          <div className="order-1 shrink-0 sm:order-2">
            <Portrait
              src={PHOTO_FORMAL}
              alt="Kowsik Naraayanan K"
              className="h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-border/40 bg-background/50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-10">
          {[
            { k: "2.5+ yrs", v: "Cloud operations" },
            { k: "HP · Albertsons", v: "Enterprise clients" },
            { k: "M.Tech", v: "Cloud Computing, BITS Pilani" },
          ].map((s) => (
            <Tilt key={s.k} className="p-5 sm:p-6">
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.k}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.v}</p>
            </Tilt>
          ))}
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
                    <li key={i} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-primary sm:px-3 sm:py-1.5 sm:text-sm">{i}</li>
                  ))}
                </ul>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Track record" title="Experience">
          <div className="space-y-6 sm:space-y-8">
            {experience.map((e) => (
              <Tilt key={e.company} className="p-5 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{e.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.company}<span className="mx-1.5 text-border">·</span><span className="text-primary">{e.client}</span>
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-border px-3 py-1 font-display text-xs tracking-wide text-amber sm:px-4 sm:py-1.5">{e.period}</span>
                </div>
                <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                  {e.blocks.map((b) => (
                    <div key={b.label}>
                      <p className="font-display text-sm font-bold text-amber">{b.label}</p>
                      <ul className="mt-2.5 space-y-2 sm:mt-3">
                        {b.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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

        <Section id="projects" eyebrow="Work" title="Selected projects">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-secondary/20">
            <Suspense fallback={<div className="flex h-[min(70vh,560px)] items-center justify-center text-sm text-muted-foreground">Loading…</div>}>
              <PolaroidLineCarousel
                slides={caseStudies.map(caseStudyToSlide)}
                height="min(70vh, 560px)"
                cardWidth={280}
                background="transparent"
                ink="var(--color-foreground)"
                string="color-mix(in srgb, var(--color-primary) 50%, transparent)"
                ariaLabel="Project carousel"
                onSelect={(i) => {
                  setCaseIndex(i);
                  setCaseOpen(true);
                }}
              />
            </Suspense>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">Click a print for details</p>
        </Section>

        <Section id="education" eyebrow="Education" title="Education">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {education.map((ed) => (
              <Tilt key={ed.degree} className="p-5 sm:p-7">
                <h3 className="font-display text-lg font-bold sm:text-xl">{ed.degree}</h3>
                <p className="mt-1 text-sm text-primary">{ed.school}</p>
                <p className="mt-1 font-display text-xs tracking-wide text-amber">{ed.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ed.note}</p>
              </Tilt>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Get in touch">
          <Tilt className="p-6 sm:p-10">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Open to Azure Cloud Operations, DevOps, and cloud engineering roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:kowsikrmr@gmail.com" className="rounded-full px-6 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]" style={{ backgroundImage: "var(--gradient-hero)" }}>
                Email
              </a>
              <a href="https://www.linkedin.com/in/kowsiknaraayanan/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border/80 bg-background/40 px-6 py-2.5 font-display text-sm font-bold hover:border-primary hover:text-primary">
                LinkedIn
              </a>
              <a href="/resume.pdf" download="Kowsik_Naraayanan_K_Resume.pdf" className="rounded-full border border-border/80 bg-background/40 px-6 py-2.5 font-display text-sm font-bold hover:border-primary hover:text-primary">
                Résumé
              </a>
            </div>
          </Tilt>
        </Section>
      </div>

      <ProjectCaseDialog study={caseStudies[caseIndex] ?? null} open={caseOpen} onOpenChange={setCaseOpen} />

      <div id="footer" className="relative z-10">
        <Footer4Col />
      </div>
    </main>
  );
}
