import { useQuery } from "@tanstack/react-query";

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    linkedin: string;
  };
  professionalSummary: string;
  skills: {
    cloudInfrastructure: string[];
    developmentAI: string[];
    devops: string[];
  };
  certifications: Array<{
    title: string;
    icon: string;
    color: string;
  }>;
  employmentHistory: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
  }>;
  education: {
    degree: string;
    college: string;
    university: string;
    location: string;
  };
}

export function useResumeData() {
  return useQuery<ResumeData>({
    queryKey: ["/resume.json"],
    queryFn: async () => {
      const response = await fetch("/resume.json");
      if (!response.ok) {
        throw new Error("Failed to load resume data");
      }
      return response.json();
    },
    staleTime: Infinity,
  });
}
