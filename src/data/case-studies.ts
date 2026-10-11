import type { LandPalette } from "@/components/ui/polaroid-line-carousel";

export type CaseStudy = {
  id: string;
  title: string;
  /** Short line under the polaroid / carousel caption */
  caption: string;
  problem: string;
  built: string;
  tools: string[];
  outcome: string;
  /** Replace with a real number when available */
  metric: string;
  context: string;
  palette: LandPalette;
  seed: number;
};

/**
 * Project case studies for the polaroid carousel.
 * Facts only from stated experience — metrics left as [ADD METRIC].
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "key-vault",
    title: "Azure Key Vault",
    caption: "Secret lifecycle & automated renewal for enterprise workloads.",
    problem:
      "Application secrets and certificates needed a controlled home with rotation, not ad-hoc storage in configs or tickets.",
    built:
      "Provisioned and managed Azure Key Vaults for secure secret storage and lifecycle control; supported automated renewal patterns and integration with Azure services (including work at Albertsons via Nisum).",
    tools: ["Azure Key Vault", "Azure CLI", "Service Principals", "Microsoft Entra ID"],
    outcome:
      "Centralized secret storage with clearer ownership and a path to automated renewal instead of manual, error-prone handoffs.",
    metric: "[ADD METRIC — e.g. vaults managed, secrets rotated, tickets avoided]",
    context: "BCforward / HPi · Nisum / Albertsons",
    palette: "alpine",
    seed: 11,
  },
  {
    id: "entra-rbac",
    title: "Entra ID & RBAC",
    caption: "Least-privilege access, service principals, audit-ready policies.",
    problem:
      "Access had to be granted and reviewed without over-permissioning production resources.",
    built:
      "Implemented IAM with user provisioning, role assignments, and enforced Role-Based Access Control (RBAC); configured service principals in Microsoft Entra ID for secure app authentication.",
    tools: ["Microsoft Entra ID", "Azure RBAC", "Service Principals", "JIRA"],
    outcome:
      "More consistent least-privilege access patterns and service identity usage instead of shared or overly broad credentials.",
    metric: "[ADD METRIC — e.g. roles standardized, privileged accounts reduced]",
    context: "BCforward / HPi · Nisum / Albertsons",
    palette: "dusk",
    seed: 22,
  },
  {
    id: "data-factory",
    title: "Azure Data Factory",
    caption: "Reliable pipelines for transfer and transformation at scale.",
    problem:
      "Operational data needed dependable movement and transformation across systems without brittle one-off jobs.",
    built:
      "Designed and oversaw data integration pipelines in Azure Data Factory for reliable transfer and transformation (Albertsons engineering operations).",
    tools: ["Azure Data Factory", "Azure Blob Storage", "SQL Server"],
    outcome:
      "Structured pipelines for integration work with clearer operational ownership than ad-hoc scripts alone.",
    metric: "[ADD METRIC — e.g. pipelines owned, failure rate, data volume]",
    context: "Nisum / Albertsons (Safeway)",
    palette: "mist",
    seed: 33,
  },
  {
    id: "github-actions",
    title: "GitHub Actions CI/CD",
    caption: "CI/CD that ships tested builds with confidence.",
    problem:
      "Releases needed automation so testing and deployment were repeatable rather than manual.",
    built:
      "Managed GitHub repositories and implemented GitHub Actions CI/CD pipelines to automate testing and deployment for engineering operations work.",
    tools: ["GitHub", "GitHub Actions", "Git"],
    outcome:
      "Repeatable build and deploy path aligned with repo-based workflows instead of fully manual release steps.",
    metric: "[ADD METRIC — e.g. deploy frequency, pipeline success rate]",
    context: "Nisum / Albertsons",
    palette: "dawn",
    seed: 44,
  },
  {
    id: "power-bi-tower",
    title: "Power BI Control Tower",
    caption: "Dashboards for performance, backlog, and financial metrics.",
    problem:
      "Stakeholders needed a shared view of performance, backlog, and financial signals across operational sources.",
    built:
      "Maintained and published Power BI Control Tower dashboards; consolidated inputs from email, SharePoint, enterprise systems (OSS, S4), and related sources; supported SQL Server ingestion via C# batch processes.",
    tools: ["Power BI", "SQL Server (SSMS)", "C#", "Excel", "Power Automate"],
    outcome:
      "Published Control Tower views that gave teams a consistent operational picture for discussion and follow-up.",
    metric: "[ADD METRIC — e.g. dashboards owned, refresh cadence, active users]",
    context: "BCforward / HPi",
    palette: "alpine",
    seed: 55,
  },
  {
    id: "aws-iam",
    title: "AWS IAM Security",
    caption: "BITS M.Tech — RBAC, ABAC, MFA, CloudTrail compliance.",
    problem:
      "Academic project required a secure IAM design that demonstrated least privilege, strong authentication, and auditability on AWS.",
    built:
      "Designed and validated a secure AWS IAM solution using RBAC, ABAC, least-privilege policies, MFA, and CloudTrail/S3 audit logging as part of the M.Tech Cloud Computing program at BITS Pilani.",
    tools: ["AWS IAM", "RBAC", "ABAC", "MFA", "CloudTrail", "S3"],
    outcome:
      "Documented, validated IAM design showing multi-cloud security depth alongside day-to-day Azure operations experience.",
    metric: "[ADD METRIC — optional academic grade or scope note]",
    context: "BITS Pilani · M.Tech Cloud Computing",
    palette: "dusk",
    seed: 66,
  },
];

export function caseStudyToSlide(cs: CaseStudy) {
  return {
    title: cs.title,
    caption: cs.caption,
    palette: cs.palette,
    seed: cs.seed,
    alt: cs.title,
  };
}
