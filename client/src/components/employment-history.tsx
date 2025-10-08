import { Briefcase, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ResumeData } from "@/hooks/use-resume-data";

interface EmploymentHistoryProps {
  resume: ResumeData;
}

const EmploymentHistory = ({ resume }: EmploymentHistoryProps) => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-muted/30 print-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="heading-employment-history" className="text-2xl sm:text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            <Briefcase className="w-7 h-7" />
            Employment History
          </h2>
          
          <div className="space-y-8">
            {resume.employmentHistory.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 data-testid={`job-title-${index}`} className="text-xl font-bold text-foreground">
                          {job.title}
                        </h3>
                        <p data-testid={`job-company-${index}`} className="text-secondary font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                        <p data-testid={`job-period-${index}`} className="font-medium">
                          {job.period}
                        </p>
                        <p data-testid={`job-location-${index}`}>
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span data-testid={`job-responsibility-${index}-${respIndex}`}>
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
