export const experience = [
  {
    role: "Senior Software Engineer & Platform Engineer",
    company: "UniUni (Uni Express Inc.)",
    range: "2025 — Present",
    themes: [
      {
        label: "Uni Retail Platform (URP)",
        bullets: [
          "Built and scaled backend services for URP across shipments, payments, carrier integrations, merchant webhooks, campaign automation, cross-border shipping, and analytics.",
          "Delivered merchant-facing APIs with AWS Lambda, TypeScript, Prisma, and Zod, improving validation, API contract clarity, and service evolution across platform boundaries.",
        ],
      },
      {
        label: "Cross-Border & Logistics",
        bullets: [
          "Supported the U.S. cross-border soft launch with HTS-based duty automation, tariff transparency, and pickup/serviceability logic across U.S. and Canada shipment flows.",
          "Helped enable Delivered Duty Paid shipping so merchants and buyers could see landed costs upfront before cross-border delivery.",
        ],
      },
      {
        label: "Campaigns, Webhooks & Analytics",
        bullets: [
          "Contributed to the marketing campaign MVP with backend business logic, event-driven payment-method triggers, referral workflows, and campaign automation foundations.",
          "Built merchant-facing webhook self-service flows and migrated configuration away from AWS Secrets Manager fallback logic toward a DB-driven model with stronger auth validation and HTTPS enforcement.",
          "Improved analytics and internal operations tooling by resolving KPI discrepancies end to end, expanding reporting APIs, and reducing reliance on manual Retool workflows.",
        ],
      },
      {
        label: "Deployment & Reliability",
        bullets: [
          "Supported production and standby deployments across U.S. and Canada environments using internal shell-script-based blue-green release workflows.",
          "Debugged release failures involving ECR authentication, Docker multi-arch manifests, ASG standby scale-up, release-comment automation, tag parsing, and environment-specific config paths.",
          "Created and hardened deployment SOPs, service mapping references, release-comment tooling, standby scale-up workflows, and operational runbooks to reduce release risk and tribal knowledge.",
        ],
      },
      {
        label: "uniuni.com & Web Tracking Infrastructure",
        bullets: [
          "Reviewed the infrastructure separation of public shipment tracking traffic from the WordPress-based uniuni.com site toward a dedicated tracking.uniuni.com platform.",
          "Validated EKS, ALB, CloudFront, Route 53, IAM, CloudWatch, Terraform/Terragrunt, DNS, ACM certificate, and Next.js static-routing risks before go-live.",
        ],
      },
      {
        label: "AI-Augmented Engineering",
        bullets: [
          "Use Claude Code, Codex, and Gemini as practical engineering tools for planning, debugging, code review, documentation, and rapid prototyping.",
        ],
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Orium / Myplanet",
    range: "2021 — 2025",
    bullets: [
      "Designed and shipped a dedicated inventory microservice (Kafka → CommerceTools) replacing a brittle Cloud Function chain — eliminated inventory mismatches with 0 incidents on Black Friday.",
      "Built order-event orchestration middleware on Kafka that sequences updates to CommerceTools, resolving concurrent update conflicts and eliminating Narvar email mismatches.",
      "Led production integration of Bold Commerce headless checkout (beta API) with modular adapters and fault-tolerant fallbacks — launched with zero downtime.",
      "Led migration from IBM Cloud to GCP: rewrote serverless functions, migrated services to GKE, and introduced CI/CD (GitHub Actions / Cloud Build), cutting deployment-related incidents by ~50%.",
      "Improved backend reliability by adding short-term caching and refactoring grouped MongoDB updates, solving Kafka offset lag and Cloud Function timeouts during peak load.",
      "Resolved data-sync race conditions for a Jesta → Kafka connector by introducing staggered query intervals and a next-day reconciliation job.",
    ],
  },
  {
    role: "Software Developer & Team Lead",
    company: "Convergence Concept Inc.",
    range: "2019 — 2021",
    bullets: [
      "Led engineering and contributed across the stack on a real-time affiliate marketing platform for banks and fintechs, focusing on event-driven tracking, reporting pipelines, and AWS infrastructure (Lambda, EC2, MongoDB, Auth0).",
      "Designed modular, testable flows for affiliate tracking and financial event processing. The platform was adopted by major clients and won two FinXTech Awards, including Best Solution for Revenue Growth.",
    ],
  },
];
