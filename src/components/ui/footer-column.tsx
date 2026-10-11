import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const data = {
  githubLink: "https://github.com/Kowsikrmr",
  linkedinLink: "https://www.linkedin.com/in/kowsik-naraayanan-k",
  company: {
    name: "Kowsik Naraayanan K",
    description:
      "Azure Cloud Operations Engineer. Key Vault, Entra ID, RBAC, Data Factory, GitHub Actions CI/CD, and Power BI for enterprise clients.",
  },
  contact: {
    email: "kowsikrmr@gmail.com",
    phone: "",
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

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  ...(data.contact.phone
    ? [{ icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` }]
    : []),
  { icon: MapPin, text: data.contact.address, href: "#contact", isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full rounded-t-2xl border-t border-border/50 bg-secondary/40 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                KN
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
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
                    className="text-primary transition hover:text-primary/70"
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
              <p className="font-display text-sm font-semibold tracking-wide text-foreground">Navigate</p>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-muted-foreground transition hover:text-primary" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-display text-sm font-semibold tracking-wide text-foreground">Focus</p>
              <ul className="mt-5 space-y-3 text-sm">
                {focusLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-muted-foreground transition hover:text-primary" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-display text-sm font-semibold tracking-wide text-foreground">Contact</p>
              <ul className="mt-5 space-y-3 text-sm">
                {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-2 sm:justify-start"
                      href={href}
                    >
                      <Icon className="size-4 shrink-0 text-primary" />
                      {isAddress ? (
                        <address className="not-italic text-muted-foreground">{text}</address>
                      ) : (
                        <span className="text-muted-foreground">{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <p>&copy; {new Date().getFullYear()} {data.company.name}. All rights reserved.</p>
            <a
              href="/resume.pdf"
              download="Kowsik_Naraayanan_K_Resume.pdf"
              className="font-display text-xs font-semibold uppercase tracking-wider text-primary transition hover:opacity-80"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
