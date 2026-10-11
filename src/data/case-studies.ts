export type LandPalette = "dawn" | "alpine" | "dusk" | "mist";

export type CaseStudy = {
  id: string;
  title: string;
  caption: string;
  problem: string;
  built: string;
  tools: string[];
  outcome: string;
  context: string;
  palette: LandPalette;
  seed: number;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "key-vault",
    title: "Azure Key Vault",
    caption: "Secret storage and renewal across Azure workloads",
    problem:
      "Secrets lived in configs and tickets. Rotation was manual and hard to audit.",
    built:
      "Provisioned Key Vaults, controlled secret lifecycle, and wired renewal into Azure services at HPi and Albertsons.",
    tools: ["Azure Key Vault", "Azure CLI", "Service Principals", "Entra ID"],
    outcome:
      "Secrets sit in one controlled place with a clear renewal path instead of ad-hoc handoffs.",
    context: "BCforward / HPi · Nisum / Albertsons",
    palette: "alpine",
    seed: 11,
  },
  {
    id: "entra-rbac",
    title: "Entra ID & RBAC",
    caption: "Least-privilege access and service principals",
    problem:
      "Production access needed to be granted and reviewed without over-permissioning accounts.",
    built:
      "User provisioning, RBAC role assignments, and Entra ID service principals for app authentication.",
    tools: ["Microsoft Entra ID", "Azure RBAC", "Service Principals", "JIRA"],
    outcome:
      "Access patterns follow least privilege; apps use service identities instead of shared credentials.",
    context: "BCforward / HPi · Nisum / Albertsons",
    palette: "dusk",
    seed: 22,
  },
  {
    id: "data-factory",
    title: "Azure Data Factory",
    caption: "Pipelines for transfer and transformation",
    problem:
      "Operational data moved through brittle one-off jobs that were hard to own.",
    built:
      "Data Factory pipelines for transfer and transformation on Albertsons engineering operations.",
    tools: ["Azure Data Factory", "Blob Storage", "SQL Server"],
    outcome:
      "Integration work runs through structured pipelines with clearer operational ownership.",
    context: "Nisum / Albertsons",
    palette: "mist",
    seed: 33,
  },
  {
    id: "github-actions",
    title: "GitHub Actions CI/CD",
    caption: "Automated test and deploy pipelines",
    problem:
      "Releases depended on manual steps that did not scale with the team.",
    built:
      "GitHub Actions pipelines for test and deploy, with repo hygiene for engineering operations.",
    tools: ["GitHub", "GitHub Actions", "Git"],
    outcome:
      "Builds and deploys follow a repeatable path tied to the repository.",
    context: "Nisum / Albertsons",
    palette: "dawn",
    seed: 44,
  },
  {
    id: "power-bi-tower",
    title: "Power BI Control Tower",
    caption: "Operational dashboards for performance and backlog",
    problem:
      "Teams needed one view of performance, backlog, and financial signals.",
    built:
      "Control Tower dashboards fed from SharePoint, email, OSS/S4, and SQL Server via C# batch jobs.",
    tools: ["Power BI", "SQL Server", "C#", "Excel", "Power Automate"],
    outcome:
      "Published dashboards gave stakeholders a shared operational picture.",
    context: "BCforward / HPi",
    palette: "alpine",
    seed: 55,
  },
  {
    id: "aws-iam",
    title: "AWS IAM Security",
    caption: "BITS M.Tech — RBAC, ABAC, MFA, CloudTrail",
    problem:
      "Needed a secure IAM design with least privilege, MFA, and auditable access on AWS.",
    built:
      "IAM design using RBAC, ABAC, MFA, and CloudTrail/S3 logging for the M.Tech project at BITS Pilani.",
    tools: ["AWS IAM", "RBAC", "ABAC", "MFA", "CloudTrail", "S3"],
    outcome:
      "Validated design that shows multi-cloud security depth next to day-to-day Azure work.",
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
