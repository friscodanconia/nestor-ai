export interface EcommerceTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const ecommerceData: EcommerceTopic[] = [
  {
    title: "E-commerce Overview",
    description: "AI tools are transforming e-commerce by providing personalized shopping experiences and automating business operations.",
    readMoreUrl: "#"
  },
  // Add more topics as needed
];
