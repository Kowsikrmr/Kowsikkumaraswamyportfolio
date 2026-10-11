import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";

const data = {
  githubLink: "https://github.com/Kowsikrmr",
  linkedinLink: "https://www.linkedin.com/in/kowsiknaraayanan/",
  company: {
    name: "Kowsik Naraayanan K",
    description:
      "Azure Cloud Operations Engineer. Key Vault, Entra ID, RBAC, Data Factory, GitHub Actions CI/CD, and Power BI for enterprise clients.",
  },
  contact: {
    email: "kowsikrmr@gmail.com",
    address: "India",
  },
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: data.githubLink },
  { icon: Linkedin, label: "LinkedIn", href: data.linkedinLink },
  { icon: Mail, label: "Email", href: `mailto:${data.contact.email}` },
];

const navLinks = [
  { text: "Skills", href: "#skills" },
  { text: "Experience", href: "#experience" },
  { text: "Projects", href: "#projects" },
  { text: "Education", href: "#education" },
];

const focusLinks = [
  { text: "Azure Key Vault", href: "#experience" },
  { text: "Entra ID & RBAC", href: "#experience" },
  { text: "GitHub Actions CI/CD", href: "#experience" },
  { text: "Power BI Control Tower", href: "#experience" },
];

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <BrandMark size={36} />
              <span className="font-display text-lg font-semibold tracking-tight">
                {data.company.name}
              </span>
            </div>
            <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-muted-foreground sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>
            <ul className="mt-7 flex justify-center gap-5 sm:justify-start">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition hover:text-amber"
                    aria-label={label}
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-foreground/80 transition hover:text-primary" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Focus
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {focusLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-foreground/80 transition hover:text-primary" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    className="inline-flex items-center justify-center gap-2 text-foreground/80 transition hover:text-primary sm:justify-start"
                    href={`mailto:${data.contact.email}`}
                  >
                    <Mail className="size-4 shrink-0 text-primary" />
                    {data.contact.email}
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center justify-center gap-2 text-foreground/80 sm:justify-start">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    <address className="not-italic">{data.contact.address}</address>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
            <a
              href="/resume.pdf"
              download="Kowsik_Naraayanan_K_Resume.pdf"
              className="font-display text-xs font-semibold uppercase tracking-wider text-primary transition hover:text-amber"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
