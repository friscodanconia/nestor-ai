export interface PersonalFinanceTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const personalFinanceData: PersonalFinanceTopic[] = [
  {
    title: "Personal Finance Overview",
    description: "AI tools are transforming personal finance by providing intelligent financial insights and automating money management tasks.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
