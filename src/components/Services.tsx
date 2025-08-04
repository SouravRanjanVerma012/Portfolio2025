import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Code, 
  Palette, 
  Layers, 
  Camera, 
  Smartphone,
  Search,
  Mail,
  Instagram,
  TrendingUp,
  Box,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Crafting visually appealing and user-friendly websites to enhance online experiences."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building robust and interactive web applications, turning ideas into functional code."
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Creating a unique and memorable identity for businesses to stand out in the market."
    },
    {
      icon: Layers,
      title: "Logo Design",
      description: "Designing distinctive and meaningful logos that represent a brand's essence."
    },
    {
      icon: Camera,
      title: "Graphic Design",
      description: "Using visual elements to communicate messages and captivate audiences."
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Balancing aesthetics and functionality to create seamless and enjoyable user experiences."
    },
    {
      icon: Box,
      title: "3D Assets",
      description: "Producing 3D models with a minimalist polygonal style for games or animations."
    },
    {
      icon: Search,
      title: "SEO",
      description: "Optimizing websites to improve search engine rankings and increase visibility."
    },
    {
      icon: Mail,
      title: "Email Templates",
      description: "Designing reusable and visually appealing templates for effective email communication."
    },
    {
      icon: Instagram,
      title: "Instagram Filters",
      description: "Creating cool Meta filters for brands to increase customer engagement."
    },
    {
      icon: TrendingUp,
      title: "Ads",
      description: "Posting compelling social media ads to improve brand visibility."
    },
    {
      icon: Zap,
      title: "No Code Solutions",
      description: "Building powerful applications without traditional coding using modern no-code platforms."
    }
  ];

  return (
    <section id="services" className="py-section px-6 bg-subtle-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">I can help you with</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;