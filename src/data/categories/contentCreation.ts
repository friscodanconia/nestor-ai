export interface ContentCreationTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const contentCreationData: ContentCreationTopic[] = [
  {
    title: "Content Creation Overview",
    description: "AI tools have revolutionized content creation, enabling faster and more efficient production of high-quality content across various formats.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
