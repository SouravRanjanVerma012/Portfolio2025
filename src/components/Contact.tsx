import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with me",
      href: "https://wa.me/15551234567"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-section px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your next project? Let's work together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card
                key={contact.label}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <a
                    href={contact.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to start your next project?</h3>
          <Button size="lg" className="group">
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Let's Talk
          </Button>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-6">Follow me on social media</h4>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;