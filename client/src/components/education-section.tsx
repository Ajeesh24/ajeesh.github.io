import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ResumeData } from "@/hooks/use-resume-data";

interface EducationSectionProps {
  resume: ResumeData;
}

const EducationSection = ({ resume }: EducationSectionProps) => {
  return (
    <section id="education" className="py-12 sm:py-16 print-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="heading-education" className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <GraduationCap className="w-7 h-7" />
            Education
          </h2>
          <Card className="shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 data-testid="education-degree" className="text-xl font-bold text-foreground mb-1">
                    {resume.education.degree}
                  </h3>
                  <p data-testid="education-college" className="text-secondary font-medium mb-1">
                    {resume.education.college}
                  </p>
                  <p data-testid="education-university" className="text-sm text-muted-foreground">
                    {resume.education.university} • {resume.education.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
