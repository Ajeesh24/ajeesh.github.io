import { Mail, Phone, Linkedin } from "lucide-react";

const HeaderSection = () => {
  return (
    <section id="header" className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 data-testid="text-main-name" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Ajeesh Nechully Gangadharan
          </h1>
          <p data-testid="text-job-title" className="text-lg sm:text-xl text-primary-foreground/90 mb-6">
            Staff-Level Platform Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <a
              data-testid="link-email"
              href="mailto:ajeesh_dp@icloud.com"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              ajeesh_dp@icloud.com
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a
              data-testid="link-phone"
              href="tel:0435964451"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0435 964 451
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a
              data-testid="link-linkedin"
              href="https://linkedin.com/in/ajeesh-ng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
