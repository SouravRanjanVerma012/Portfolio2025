import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Attendance Management System",
      description: "Web application using JavaScript for geolocation tracking, Firebase for data storage, and EmailJS for OTP verification. Helps organizations manage employee attendance efficiently.",
      technologies: ["JavaScript", "Firebase", "EmailJS", "Geolocation API"],
      type: "Web Application",
      features: ["Real-time location tracking", "OTP verification", "Database integration", "Employee management"],
      githubUrl: "https://github.com/SouravRanjanVerma012/attendance-management-system"
    },
    {
      title: "Virtual Bus Services",
      description: "Web application that allows users to book bus tickets, check bus locations, and view routes. Built with Node.js, Express, MongoDB, and modern web technologies.",
      technologies: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
      type: "Web Application",
      features: ["Bus ticket booking", "Route management", "Payment integration", "Real-time tracking"],
      githubUrl: "https://github.com/SouravRanjanVerma012/Virtual-bus-services"
    },
    {
      title: "FitForge Buddy",
      description: "Cross-platform fitness app with workout tracking, nutrition management, and social features. Developed using React.js, React Native, and Tailwind CSS with AI-powered design tools.",
      technologies: ["React.js", "React Native", "Tailwind CSS", "AI Tools"],
      type: "Web/Mobile App",
      features: ["Workout tracking", "Nutrition management", "Social features", "Cross-platform"],
      githubUrl: "https://github.com/SouravRanjanVerma012/fitforge-buddy"
    }
    ,{
      title: "D2D Cart Admin Panel",
      description: "Designed and developed a fully responsive Angular admin panel for D2D Cart enabling seamless product, category, order, and customer management. Optimized for desktops, tablets, and mobiles",
      technologies: ["JavaScript", "Angular", " API"],
      type: "Web Application",
      features: ["Real-time data management", "Role-based access", "Advanced Dashboard Analytics", "Seamless management of products, categories, customers"],
      githubUrl: "https://github.com/SouravRanjanVerma012/codknox_fetchit"
    }
  ];

  return (
    <section id="projects" className="py-secn px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Some of my recent work and project experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-accent-foreground bg-accent/20 px-2 py-1 rounded-md">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;