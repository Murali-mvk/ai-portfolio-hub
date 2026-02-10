import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = ["All", "NLP", "Computer Vision", "Deep Learning", "Data Science"];

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "Real-time sentiment analysis using transformer models for social media monitoring.",
    tags: ["Python", "Transformers", "FastAPI"],
    category: "NLP",
    github: "#",
    demo: "#",
  },
  {
    title: "Object Detection System",
    description: "YOLOv8-based real-time object detection with custom-trained models for autonomous driving.",
    tags: ["PyTorch", "YOLOv8", "OpenCV"],
    category: "Computer Vision",
    github: "#",
    demo: "#",
  },
  {
    title: "GANs for Art Generation",
    description: "Generative adversarial networks trained to create original artwork in various styles.",
    tags: ["TensorFlow", "GANs", "Python"],
    category: "Deep Learning",
    github: "#",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "End-to-end ML pipeline for customer churn prediction with interactive visualizations.",
    tags: ["Scikit-learn", "Pandas", "Streamlit"],
    category: "Data Science",
    github: "#",
    demo: "#",
  },
  {
    title: "Chatbot with RAG",
    description: "Retrieval-augmented generation chatbot for university FAQ using LangChain and vector DBs.",
    tags: ["LangChain", "Pinecone", "OpenAI"],
    category: "NLP",
    github: "#",
  },
  {
    title: "Medical Image Classifier",
    description: "CNN-based classification of X-ray images for pneumonia detection with 96% accuracy.",
    tags: ["Keras", "CNN", "Medical AI"],
    category: "Computer Vision",
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 scroll-fade-in">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-fade-in">
          Featured Work
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 scroll-fade-in">
          {categories.map((c) => (
            <Button
              key={c}
              variant={active === c ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(c)}
            >
              {c}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="card-3d scroll-fade-in group rounded-xl bg-card border border-border p-6 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
