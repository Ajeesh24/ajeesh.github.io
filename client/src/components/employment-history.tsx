import { Briefcase, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EmploymentHistory = () => {
  const jobs = [
    {
      title: "Senior Platform Engineer, MLOps - CDAO",
      company: "Commonwealth Bank of Australia",
      period: "Dec 2023 - Present",
      location: "Sydney",
      responsibilities: [
        "Designed, architected, and led the delivery of the Technical Model Registry platform — a centralized, enterprise-grade governance platform for all ML models at the bank backed by AWS Sagemaker, enabling secure lifecycle management, automated compliance, and full auditability.",
        "Built and integrated MCP servers to support agentic integration of Model Monitoring and Model Registry, ensuring seamless connectivity and automation across MLOps workflows.",
        "Engineered seamless integration of the registry with MLOps pipelines, enabling automated model registration, versioning, deployment tracking across development and production environments.",
        "Provided technical leadership and mentorship to engineers, driving adoption of best practices in model governance and responsible AI.",
        "Delivered advanced AI/ML monitoring capabilities using AWS Sagemaker, Step Functions, and Lambda, strengthening model oversight and operational resilience.",
        "Built and managed AWS EKS clusters, architecting scalable, highly available infrastructure for ML workloads and ensuring platform reliability.",
        "Led the design and deployment of cloud infrastructure for the Digital Human Hackathon, leveraging AWS and NVIDIA (CUDA, TOKIO) to support real-time AI workloads.",
        "Implemented robust CI/CD pipelines with GitHub Actions, automating deployments and reducing manual intervention."
      ]
    },
    {
      title: "Technical Team Lead (DevOps/SRE) - Westpac Live - Digital",
      company: "Tata Consultancy Services - Westpac Banking Corp.",
      period: "Apr 2019 - Dec 2023",
      location: "Sydney",
      responsibilities: [
        "Led Westpac Online Banking operations team, ensuring exceptional application reliability, stability, and availability through strategic SRE implementation.",
        "Delivered 50% year-over-year reduction in incident volume by systematically resolving recurring high-impact issues.",
        "Eliminated 200+ hours of monthly manual tasks through comprehensive process automation initiatives.",
        "Achieved 35% reduction in incident and problem backlog within 12 months by implementing Site Reliability Engineering (SRE) best practices.",
        "Enhanced system observability by deploying and configuring enterprise monitoring solutions (AppDynamics, Splunk), significantly improving incident detection and response capabilities.",
        "Prevented critical AUSTRAC compliance breach by orchestrating emergency remediation within 24 hours of identification, ensuring regulatory adherence.",
        "Maintained exceptional 99.88% end-to-end application availability through proactive SRE methodology adoption.",
        "Recognition: Westpac Super Tech Individual Award recipient (Q1 2020, Q1 2021); CEO Recognition for AUSTRAC compliance emergency response leadership."
      ]
    },
    {
      title: "System Engineer - Westpac Live - Digital",
      company: "Tata Consultancy Services - Westpac Banking Corp.",
      period: "Nov 2015 - Apr 2019",
      location: "Chennai",
      responsibilities: [
        "Maintained Westpac's online banking platform stability through comprehensive IT service management, including incident resolution, problem analysis, and change implementation.",
        "Streamlined operations by automating manual processes, reducing human intervention and eliminating error-prone tasks.",
        "Developed custom bash scripts to automate report generation and batch job failure recovery processes.",
        "Orchestrated seamless code deployments to production servers, including deployment coordination and pipeline automation implementation.",
        "Successfully executed critical production changes within designated maintenance windows, maintaining zero-downtime deployments.",
        "Delivered timely incident resolution by performing root cause analysis and implementing solutions within established SLA parameters."
      ]
    },
    {
      title: "Software Developer Trainee",
      company: "Tata Consultancy Services - Rolls Royce",
      period: "Jun 2015 - Nov 2015",
      location: "Trivandrum",
      responsibilities: [
        "Developed interactive web apps with ASP.NET, enhancing user engagement and functionality.",
        "Created efficient database solutions with stored procedures, improving data retrieval speed.",
        "Implemented Selenium for testing, boosting application reliability and reducing bugs.",
        "Conducted code reviews, identifying and resolving issues, enhancing performance and stability.",
        "Participated in Agile processes, contributing to effective sprint planning and team collaboration."
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 bg-muted/30 print-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="heading-employment-history" className="text-2xl sm:text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            <Briefcase className="w-7 h-7" />
            Employment History
          </h2>
          
          <div className="space-y-8">
            {jobs.map((job, index) => (
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
