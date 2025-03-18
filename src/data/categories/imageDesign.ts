export interface ImageDesignTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const imageDesignData: ImageDesignTopic[] = [
  {
    title: "Image Design Overview",
    description: "AI tools have transformed image design, enabling faster and more efficient creation of high-quality visuals.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
