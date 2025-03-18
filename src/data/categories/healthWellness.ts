export interface HealthWellnessTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const healthWellnessData: HealthWellnessTopic[] = [
  {
    title: "Health & Wellness Overview",
    description: "AI tools are transforming health and wellness by providing personalized health insights and automating wellness tracking.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
