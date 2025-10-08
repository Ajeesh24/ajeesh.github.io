import { Award, Shield, CheckSquare, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ResumeData } from "@/hooks/use-resume-data";

const iconMap = {
  Shield,
  CheckSquare,
  FileText,
};

const colorStyles = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
  },
};

interface CertificationsSectionProps {
  resume: ResumeData;
}

const CertificationsSection = ({ resume }: CertificationsSectionProps) => {
  return (
    <section id="certifications" className="py-12 sm:py-16 print-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="heading-certifications" className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <Award className="w-7 h-7" />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {resume.certifications.slice(0, 4).map((cert, index) => {
              const IconComponent = iconMap[cert.icon as keyof typeof iconMap] || Shield;
              const styles = colorStyles[cert.color as keyof typeof colorStyles] || colorStyles.primary;
              return (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 ${styles.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${styles.text}`} />
                      </div>
                      <div>
                        <h3 data-testid={`cert-title-${index}`} className="font-semibold text-foreground">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            {resume.certifications[4] && (
              <Card className="shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 data-testid="cert-title-4" className="font-semibold text-foreground">
                        {resume.certifications[4].title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
