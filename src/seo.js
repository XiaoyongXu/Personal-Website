const canonicalUrl = "https://xiaoyongxu.com/";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${canonicalUrl}#person`,
      name: "Xiaoyong Xu",
      alternateName: "Tony Xu",
      url: canonicalUrl,
      image: `${canonicalUrl}photo.png`,
      jobTitle: "Staff Software Engineer / Platform Engineer",
      sameAs: [
        "https://github.com/XiaoyongXu",
        "https://www.linkedin.com/in/tonyx258",
      ],
      knowsAbout: [
        "AWS",
        "Terraform",
        "Amazon EKS",
        "TypeScript",
        "Node.js",
        "Platform Engineering",
        "Release Engineering",
        "Logistics Platforms",
      ],
      worksFor: {
        "@type": "Organization",
        name: "UniUni",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}#website`,
      name: "Xiaoyong Xu",
      url: canonicalUrl,
      publisher: {
        "@id": `${canonicalUrl}#person`,
      },
    },
  ],
};
