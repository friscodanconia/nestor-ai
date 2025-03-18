export interface PersonalProductivityTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const personalProductivityData: PersonalProductivityTopic[] = [
  {
    title: "Personal Productivity Overview",
    description: "AI tools can significantly enhance personal productivity by automating routine tasks and providing intelligent assistance.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
