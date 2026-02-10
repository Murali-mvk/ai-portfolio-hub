import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", level: 95 },
  { name: "TensorFlow / Keras", level: 85 },
  { name: "PyTorch", level: 80 },
  { name: "Scikit-learn", level: 90 },
  { name: "NLP / Transformers", level: 75 },
  { name: "Computer Vision", level: 70 },
  { name: "Data Analysis (Pandas/NumPy)", level: 90 },
  { name: "SQL & Databases", level: 80 },
];

const education = [
  {
    year: "2023 — Present",
    title: "M.Sc. Artificial Intelligence",
    institution: "University Name",
    description: "Specializing in deep learning and NLP research.",
  },
  {
    year: "2019 — 2023",
    title: "B.Sc. Computer Science",
    institution: "University Name",
    description: "Graduated with honors. Focus on machine learning and algorithms.",
  },
];

const certifications = [
  "Deep Learning Specialization — Coursera",
  "TensorFlow Developer Certificate — Google",
  "AWS Machine Learning Specialty",
  "Stanford CS229 — Machine Learning",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 scroll-fade-in">
          Skills & Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 scroll-fade-in">
          My Technical Arsenal
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="space-y-5 scroll-fade-in">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <Progress value={s.level} className="h-2" />
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="space-y-10 scroll-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6 border-l-2 border-primary/30 pl-6">
                {education.map((e) => (
                  <div key={e.title} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <p className="text-xs text-primary font-mono">{e.year}</p>
                    <p className="font-semibold text-foreground">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
