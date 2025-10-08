import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeaderSection from "@/components/header-section";
import ProfessionalSummary from "@/components/professional-summary";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import EmploymentHistory from "@/components/employment-history";
import EducationSection from "@/components/education-section";
import { useResumeData } from "@/hooks/use-resume-data";

const Resume = () => {
  const { data: resume } = useResumeData();

  useEffect(() => {
    if (resume) {
      document.title = `${resume.personalInfo.name} - ${resume.personalInfo.title} | Resume`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", resume.professionalSummary);
      }
    }
  }, [resume]);

  if (!resume) {
    return (
      <div className="min-h-screen bg-background text-foreground antialiased flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      
      <main className="pt-16">
        <HeaderSection resume={resume} />
        <ProfessionalSummary resume={resume} />
        <SkillsSection resume={resume} />
        <CertificationsSection resume={resume} />
        <EmploymentHistory resume={resume} />
        <EducationSection resume={resume} />
        
        {/* GitHub Pages Deployment Info */}
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5 no-print">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-6 sm:p-8 border border-border shadow-lg">
                <h2 data-testid="heading-github-pages" className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub Pages Deployment Guide
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p data-testid="text-deployment-intro" className="text-foreground font-medium">
                    To deploy this resume to GitHub Pages:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li data-testid="deployment-step-1">
                      Create a new repository named <code className="bg-muted px-2 py-1 rounded text-sm font-mono">username.github.io</code>
                    </li>
                    <li data-testid="deployment-step-2">
                      Upload your built files to the repository
                    </li>
                    <li data-testid="deployment-step-3">
                      Go to <strong>Settings → Pages</strong> in your repository
                    </li>
                    <li data-testid="deployment-step-4">
                      Under <strong>Source</strong>, select <strong>GitHub Actions</strong>
                    </li>
                    <li data-testid="deployment-step-5">
                      The workflow will automatically deploy your site
                    </li>
                    <li data-testid="deployment-step-6">
                      Your site will be live at <code className="bg-muted px-2 py-1 rounded text-sm font-mono">https://username.github.io</code>
                    </li>
                  </ol>
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p data-testid="text-protip" className="text-sm text-accent-foreground">
                      <strong>Pro Tip:</strong> The included GitHub Actions workflow enables automatic deployment whenever you push changes to your repository.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 no-print">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p data-testid="text-copyright" className="text-muted-foreground text-sm">
              © 2024 Ajeesh Nechully Gangadharan. All rights reserved.
            </p>
            <p data-testid="text-built-with" className="text-muted-foreground text-xs mt-2">
              Built with React + Tailwind CSS • Deployed on GitHub Pages
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
