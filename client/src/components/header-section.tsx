import { Mail, Phone, Linkedin } from "lucide-react";
import type { ResumeData } from "@/hooks/use-resume-data";

interface HeaderSectionProps {
  resume: ResumeData;
}

const HeaderSection = ({ resume }: HeaderSectionProps) => {
  return (
    <section id="header" className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 data-testid="text-main-name" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {resume.personalInfo.name}
          </h1>
          <p data-testid="text-job-title" className="text-lg sm:text-xl text-primary-foreground/90 mb-6">
            {resume.personalInfo.title}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <a
              data-testid="link-email"
              href={`mailto:${resume.personalInfo.email}`}
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {resume.personalInfo.email}
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a
              data-testid="link-phone"
              href={`tel:${resume.personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {resume.personalInfo.phoneFormatted}
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a
              data-testid="link-linkedin"
              href={resume.personalInfo.linkedin}
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
