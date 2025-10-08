import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ResumeData } from "@/hooks/use-resume-data";

interface ProfessionalSummaryProps {
  resume: ResumeData;
}

const ProfessionalSummary = ({ resume }: ProfessionalSummaryProps) => {
  return (
    <section id="summary" className="py-12 sm:py-16 print-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="heading-professional-summary" className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <User className="w-7 h-7" />
            Professional Summary
          </h2>
          <Card className="shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <p data-testid="text-summary-content" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {resume.professionalSummary}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
