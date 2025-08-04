const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-subtle-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Sourav Verma. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Made with ❤️ using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;