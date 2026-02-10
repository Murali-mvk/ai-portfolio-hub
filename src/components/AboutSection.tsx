import { Brain, Code, BookOpen, Award } from "lucide-react";

const stats = [
  { icon: Brain, label: "ML Models Built", value: "15+" },
  { icon: Code, label: "Technologies", value: "12+" },
  { icon: BookOpen, label: "Research Papers", value: "5" },
  { icon: Award, label: "Certifications", value: "8" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 scroll-fade-in">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-fade-in">
          Turning Data Into Intelligence
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 scroll-fade-in">
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated AI student with a deep fascination for machine learning
              and its potential to transform industries. My journey began with curiosity
              about how machines learn and has evolved into hands-on experience building
              models for NLP, computer vision, and reinforcement learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my degree in Computer Science with a specialization in
              Artificial Intelligence, I balance academic research with practical
              projects. I believe in learning by doing — every project is an opportunity
              to push boundaries and create something meaningful.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 scroll-fade-in">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-3d rounded-xl bg-card border border-border p-6 text-center"
              >
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
