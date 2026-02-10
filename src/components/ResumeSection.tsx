import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: GraduationCap, text: "M.Sc. in Artificial Intelligence (In Progress)" },
  { icon: Briefcase, text: "ML Engineering Intern at Tech Company" },
  { icon: Award, text: "Top 5% in Kaggle Competition" },
  { icon: Briefcase, text: "Research Assistant — NLP Lab" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 scroll-fade-in">
          Resume
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 scroll-fade-in">
          Career Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 scroll-fade-in">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-start gap-4 rounded-xl bg-card border border-border p-5"
              >
                <h.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="scroll-fade-in flex flex-col items-center justify-center rounded-xl bg-card border border-border p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Download My Resume
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get the full PDF with my complete experience, skills, and education.
            </p>
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" /> Download PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
