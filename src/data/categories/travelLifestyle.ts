export interface TravelLifestyleTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const travelLifestyleData: TravelLifestyleTopic[] = [
  {
    title: "Travel & Lifestyle Overview",
    description: "AI tools are transforming travel and lifestyle by providing personalized recommendations and automating trip planning.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
