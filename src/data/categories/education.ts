export interface EducationTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const educationData: EducationTopic[] = [
  {
    title: "Education Overview",
    description: "AI tools are transforming education by providing personalized learning experiences and automating administrative tasks.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
