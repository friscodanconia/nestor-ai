export interface GenerativeArtTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const generativeArtData: GenerativeArtTopic[] = [
  {
    title: "Generative Art Overview",
    description: "AI tools have revolutionized art creation, enabling the generation of unique and creative artwork through machine learning algorithms.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
