export const experience = [
  {
    role: "Senior Software Engineer & Platform Engineer",
    company: "UniUni (Uni Express Inc.)",
    range: "2025 — Present",
    themes: [
      {
        label: "Platform Architecture",
        bullets: [
          "Own and scale the Uni Retail Platform (URP) — a serverless backend on AWS Lambda with 28+ services spanning shipments, payments, carrier integrations, and analytics.",
          "Drive API contract design with Prisma, Zod, and TypeScript, enforcing schema validation and safe evolution across services.",
        ],
      },
      {
        label: "Cross-Border & Logistics",
        bullets: [
          "Built HTS-based duty and tariff automation via Borderline Genius API, enabling real-time cost transparency for CA-to-US cross-border shipments with PostNL and Wizmo.",
          "Designed pickup serviceability filtering and service-area logic across U.S. and Canadian regions to support the U.S. soft launch.",
        ],
      },
      {
        label: "Event-Driven & Payment Systems",
        bullets: [
          "Architected a marketing campaign MVP with payment-method-triggered events and webhook-driven backend flows for merchant-facing features.",
          "Built a merchant self-service webhook platform, migrating from AWS Secrets Manager fallback logic to a DB-driven architecture with improved auth validation and HTTPS enforcement.",
        ],
      },
      {
        label: "Analytics & Internal Platforms",
        bullets: [
          "Debugged and corrected KPI accuracy issues across analytics pipelines. Migrated Retool-dependent workflows into the main web app to reduce tooling fragmentation.",
        ],
      },
      {
        label: "Deployment & Reliability",
        bullets: [
          "Operate regional deployments and blue-green-style releases via shell-script-based workflows. Own production debugging, incident support, and infrastructure SOPs.",
        ],
      },
      {
        label: "AI-Augmented Engineering",
        bullets: [
          "Introduced Claude Code, Codex, and Gemini as practical engineering tools for planning, debugging, TDD, code review, and rapid prototyping — adopted across the team as standard workflow.",
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
