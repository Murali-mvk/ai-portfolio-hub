import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Attention Mechanisms in Low-Resource NLP",
    date: "Jan 2025",
    abstract: "Exploring efficient attention patterns for transformer models in low-resource language settings, achieving state-of-the-art results.",
    tags: ["Transformers", "NLP"],
    link: "#",
  },
  {
    title: "Federated Learning for Healthcare Data",
    date: "Sep 2024",
    abstract: "A privacy-preserving approach to training ML models across hospital networks without sharing sensitive patient data.",
    tags: ["Federated Learning", "Privacy"],
    link: "#",
  },
  {
    title: "GANs for Data Augmentation in Medical Imaging",
    date: "May 2024",
    abstract: "Using generative models to synthesize realistic X-ray images, improving classifier performance on small datasets.",
    tags: ["GANs", "Medical AI"],
    link: "#",
  },
  {
    title: "Reinforcement Learning in Robotic Navigation",
    date: "Dec 2023",
    abstract: "Training autonomous agents to navigate complex environments using deep Q-learning and policy gradient methods.",
    tags: ["Reinforcement Learning", "Robotics"],
    link: "#",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 scroll-fade-in">
          Blog & Research
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 scroll-fade-in">
          Publications & Writing
        </h2>

        <div className="space-y-4">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.link}
              className="scroll-fade-in card-3d block rounded-xl bg-card border border-border p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs text-primary font-mono mb-1">{a.date}</p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.abstract}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {a.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
