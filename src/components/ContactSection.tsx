import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 scroll-fade-in">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 scroll-fade-in">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form
            className="space-y-5 scroll-fade-in"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Your Name" className="bg-card" />
            <Input placeholder="Your Email" type="email" className="bg-card" />
            <Textarea placeholder="Your Message" rows={5} className="bg-card" />
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Send className="w-4 h-4" /> Send Message
            </Button>
          </form>

          {/* Info */}
          <div className="scroll-fade-in space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing AI projects, research collaborations,
              internship opportunities, or just chatting about machine learning.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>your.email@example.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
