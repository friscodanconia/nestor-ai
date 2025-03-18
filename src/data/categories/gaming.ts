export interface GamingTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const gamingData: GamingTopic[] = [
  {
    title: "Gaming Overview",
    description: "AI tools are transforming gaming by enhancing gameplay experiences and enabling more immersive virtual worlds.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
