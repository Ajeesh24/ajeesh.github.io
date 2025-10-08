import { Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ResumeData } from "@/hooks/use-resume-data";

interface SkillsSectionProps {
  resume: ResumeData;
}

const SkillsSection = ({ resume }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-muted/30 print-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="heading-skills" className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <Lightbulb className="w-7 h-7" />
            Technical Skills
          </h2>
          <Card className="shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-6">
                <div>
                  <h3 data-testid="heading-cloud-skills" className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                    Cloud & Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.cloudInfrastructure.map((skill) => (
                      <span
                        key={skill}
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        className="skill-tag px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-mono font-medium hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 data-testid="heading-development-skills" className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                    Development & AI/ML
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.developmentAI.map((skill) => (
                      <span
                        key={skill}
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        className="skill-tag px-3 py-1.5 bg-accent/10 text-accent rounded-md text-sm font-mono font-medium hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 data-testid="heading-devops-skills" className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                    DevOps & Infrastructure as Code
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.devops.map((skill) => (
                      <span
                        key={skill}
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        className="skill-tag px-3 py-1.5 bg-secondary/10 text-secondary rounded-md text-sm font-mono font-medium hover:bg-secondary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
