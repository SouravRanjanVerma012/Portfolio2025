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
      icon: Code,
      title: "MERN Stack Development",
      description: "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js."
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Creating responsive and dynamic websites using modern technologies like React and Tailwind CSS."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Apps",
      description: "Developing mobile and web applications using React Native and progressive web technologies."
    },
    {
      icon: Search,
      title: "Database Management",
      description: "Designing and implementing efficient database solutions using MySQL, MongoDB, and Firebase."
    },
    {
      icon: Layers,
      title: "IoT Solutions",
      description: "Creating innovative IoT applications like Virtual Bus Conductor systems with real-time functionality."
    },
    {
      icon: Zap,
      title: "Geolocation Services",
      description: "Implementing location-based features and attendance tracking systems using modern web APIs."
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Integrating email services and OTP verification systems using EmailJS and other tools."
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Development",
      description: "Leveraging AI tools like Claude, Cursor, and ChatGPT to streamline development processes."
    },
    {
      icon: Box,
      title: "System Architecture",
      description: "Designing scalable and efficient system architectures for web and mobile applications."
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Converting designs into functional interfaces with attention to user experience and accessibility."
    },
    {
      icon: Camera,
      title: "API Development",
      description: "Creating robust RESTful APIs and integrating third-party services for enhanced functionality."
    },
    {
      icon: Instagram,
      title: "Version Control",
      description: "Managing code repositories and collaborative development using Git and modern workflows."
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