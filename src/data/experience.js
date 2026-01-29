export const experience = [
  {
    role: "Senior Software Developer",
    company: "Uni Express Inc.",
    range: "2025 — Present",
    bullets: [
      "Architected and scaled the Uni Retail Platform (URP), a serverless microservices backend on AWS Lambda with 28+ services handling shipments, payments, and multi-carrier integrations.",
      "Integrated Borderline Genius API for real-time US duty and tariff calculations on HTS codes, facilitating seamless CA-to-US shipping partnerships with PostNL and Wizmo.",
      "Developed Retool-based analytics APIs and dashboards to monitor user onboarding and flag shipments that have not moved within 48 hours.",
      "Optimized the pickup flow with serviceability filtering and designed the database logic for promotional campaign triggers.",
      "Spearheaded team adoption of AI-augmented coding, demonstrating rapid full-stack prototyping using Claude Code, Supabase, and Figma-to-Frontend workflows.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Orium / Myplanet",
    range: "2021 — Present",
    bullets: [
      "Led the design & implementation of a dedicated inventory microservice (Kafka → CommerceTools) to replace a brittle chain of Cloud Functions; eliminated inventory mismatches (0 incidents on Black Friday) and prevented oversell/undersell during peak traffic.",
      "Owned order-event orchestration by building a Kafka consumer middleware that sequences events before applying updates to CommerceTools; resolved concurrent update conflicts, eliminated Narvar email mismatches, and reduced retry-related processing conflicts.",
      "Led production integration of Bold Commerce headless checkout (beta API): implemented a modular, fault-tolerant adapter with fallbacks and cross-team testing; launched with zero downtime, improving mobile checkout speed and reducing cart abandonment.",
      "Led migration from IBM Cloud to GCP: rewrote serverless functions, migrated services to GKE, and introduced CI/CD (GitHub Actions / Cloud Build) plus monitoring/alerts; resulted in a ~50% drop in deployment-related incidents and faster rollback times.",
      "Improved backend performance and reliability by adding short-term caching for styles/brands endpoints and refactoring MongoDB updates (grouped updates instead of per-style Promise.all), solving Kafka offset lag and Cloud Function timeouts during high load.",
      'Launched a new outlet site ("shopfinalcut") reusing core services with feature flags, added same-day shipping and updated subtotal/discount logic across APIs and checkout integrations.',
      "Resolved data-sync race conditions for the Jesta → Kafka connector by introducing staggered query intervals and a next-day reconciliation job, preventing lost or overwritten messages.",
      "Fixed duplicate customer profiles by linking LoginRadius CRM IDs and merging carts, restoring correct customer state across Commercetools and login flows.",
    ],
  },
  {
    role: "Software Developer & Team Lead",
    company: "Convergence Concept Inc.",
    range: "2019 — 2021",
    bullets: [
      "Led frontend engineering and contributed across the stack to build a real-time affiliate marketing platform for banks and fintechs, focusing on responsive dashboards, performance, and usability.",
      "Architected event-driven tracking and reporting pipelines and helped build AWS infrastructure (Lambda, EC2, MongoDB, Auth0) to ensure secure, scalable processing of financial event data.",
      "Balanced fast delivery with correctness by designing modular, testable flows for affiliate tracking; the platform was adopted by major clients and won two FinXTech Awards, including Best Solution for Revenue Growth.",
    ],
  },
  {
    role: "Quality Assurance Specialist",
    company: "Pingyi Software",
    range: "2014",
    bullets: [
      "Tested and analyzed functionality on Web and Mobile Software platforms for different projects within the company.",
      "Developed the ability to quickly learn and adapt to new technologies in a fast-paced environment.",
    ],
  },
];
