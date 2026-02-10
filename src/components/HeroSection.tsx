import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingShape = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => <div className={className} style={style} />;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Floating 3D shapes */}
      <FloatingShape
        className="absolute w-16 h-16 rounded-lg border border-primary/30 animate-float animate-pulse-glow"
        style={{ top: "15%", left: "10%", animationDelay: "0s" }}
      />
      <FloatingShape
        className="absolute w-10 h-10 rounded-full bg-primary/10 border border-primary/20 animate-float-slow"
        style={{ top: "25%", right: "15%", animationDelay: "1s" }}
      />
      <FloatingShape
        className="absolute w-20 h-20 rounded-xl border border-primary/20 animate-float-reverse"
        style={{ bottom: "25%", left: "20%", animationDelay: "2s" }}
      />
      <FloatingShape
        className="absolute w-8 h-8 rounded-full bg-primary/15 animate-float"
        style={{ bottom: "30%", right: "10%", animationDelay: "3s" }}
      />
      <FloatingShape
        className="absolute w-12 h-12 rounded-lg border border-primary/25 animate-float-slow"
        style={{ top: "60%", left: "5%", animationDelay: "1.5s" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Avatar placeholder */}
        <div className="w-28 h-28 mx-auto mb-8 rounded-full border-2 border-primary/50 bg-secondary flex items-center justify-center overflow-hidden">
          <span className="text-3xl font-bold text-primary">AI</span>
        </div>

        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
          Artificial Intelligence Student
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
            Your Name
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          ML Engineer & AI Researcher passionate about building intelligent systems
          that solve real-world problems. Currently exploring deep learning,
          NLP, and computer vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="#projects">
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#resume">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
