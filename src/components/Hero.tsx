import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden border-4 border-border shadow-lg">
            <img
              src="/lovable-uploads/a05fc74a-304d-498a-901d-4c9ebeb94ba6.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="animate-slide-up">
          <h1 className="text-hero mb-6 text-gradient leading-tight">
            Your Name
          </h1>
          
          <div className="text-2xl md:text-3xl mb-6 text-muted-foreground font-light">
            I'm a <span className="text-foreground font-semibold">Designer</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafting visual poetry since 2024. Passionate about creating engaging digital experiences 
            that blend creativity with functionality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Floating Animation Element */}
        <div className="mt-16 animate-float">
          <div className="w-8 h-8 rounded-full bg-accent/20 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;