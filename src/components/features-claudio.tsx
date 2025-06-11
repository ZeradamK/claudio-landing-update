"use client";
import React from "react";
import { EvervaultCard } from "../ui/evervault-card";

const cloudCards = [
  {
    icon: "/aws.png",
    alt: "AWS",
    title: "Built for AWS-native scalability",
    description:
      "Claudio generates fault-tolerant architectures using services like Lambda, VPC, and DynamoDB, complete with CDK and Terraform exports.",
  },
  {
    icon: "/azure.png",
    alt: "Azure",
    title: "Azure-ready cloud intelligence",
    description:
      "From AKS to Cosmos DB, Claudio maps your prompt to secure and scalable Azure solutions, with full Bicep and ARM template support.",
  },
  {
    icon: "/gcp.png",
    alt: "GCP",
    title: "GCP-optimized architecture automation",
    description:
      "Claudio designs resilient GCP systems using services like Cloud Run, BigQuery, and Pub/Sub — including IaC in Terraform and SDK snippets.",
  },
];

function CloudCard({ icon, alt, title, description }: { icon: string; alt: string; title: string; description: string }) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[30rem] bg-black/50 backdrop-blur-sm rounded-[15px]">
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex-1 flex items-center justify-center">
          <EvervaultCard icon={icon} iconAlt={alt} />
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col items-start justify-end flex-grow">
        <h3 className="text-lg font-bold text-white dark:text-white mb-2 text-left">{title}</h3>
        <p className="text-[12px] font-light text-neutral-300 dark:text-neutral-300 text-left max-w-xs">{description}</p>
      </div>
    </div>
  );
}

const FeaturesClaudio = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-start mb-16">
        <h5 className="text-[45px] font-light text-black dark:text-white mb-4 font-[var(--font-lato)] leading-tight" style={{float: 'left'}}>
          <span className="font-bold">Claudio</span> integrates all cloud services.
        </h5>
        <p className="max-w-2xl text-[14px] font-medium text-muted-foreground text-left font-[var(--font-lato)]">
          Claudio integrates AWS, Azure, and GCP in one platform, making it easy to design scalable infrastructure with multiple options for users, all intent-driven from your prompt.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-6 items-stretch justify-center w-full">
        {cloudCards.map((card) => (
          <CloudCard key={card.alt} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesClaudio; 