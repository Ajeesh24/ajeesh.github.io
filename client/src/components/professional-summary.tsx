import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfessionalSummary = () => {
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
                Staff-level Platform Engineer with over a decade of experience in architecting and leading the development of cutting-edge cloud and AI/ML platforms. Brings a visionary approach to designing resilient solutions and driving platform strategy with a strong emphasis on MLOps, AI governance, and automation. Proficient in leveraging AWS, Python, and Kubernetes to deliver scalable and compliant platforms that align seamlessly with business objectives, fostering innovation and excellence in technical leadership.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
