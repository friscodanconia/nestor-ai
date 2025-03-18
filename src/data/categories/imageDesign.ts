export interface ImageDesignTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const imageDesignData = {
  title: "Image & Design",
  gradientClasses: "bg-gradient-to-br from-indigo-200 to-blue-200",
  description: "AI-powered image generation and design tools are transforming creative workflows, allowing anyone to create stunning visuals without extensive design skills. From generating concept art to designing logos and layouts, these tools are making professional-quality design more accessible than ever.",
  
  topics: [
    {
      title: "AI Image Generation",
      description: "Midjourney has become one of the leading AI image generators, known for its artistic quality and ability to create detailed, imaginative visuals from text prompts. It excels at creating concept art, illustrations, and photorealistic images that can be used for marketing materials, product visualization, or creative projects. The platform continues to improve with each version, offering more control over the generated output. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-image-generation"
    },
    {
      title: "Photo Editing & Enhancement",
      description: "DALL·E not only generates images from scratch but also offers powerful editing capabilities. You can upload existing images and ask the AI to make specific modifications, extend the canvas, or remove unwanted elements. This makes it an invaluable tool for photographers and designers who need to quickly edit or enhance their work without mastering complex editing software. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-photo-editing"
    },
    {
      title: "Automated Design Layouts",
      description: "Canva Magic Design (Beta) is revolutionizing the design process by automatically generating complete layouts based on text descriptions or content requirements. Simply describe what you need—whether it's a presentation, social media post, or marketing brochure—and the AI will create a professionally designed template that you can further customize. This dramatically speeds up the design process while maintaining quality and brand consistency. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-automated-design"
    },
    {
      title: "Logo & Brand Identity",
      description: "AI tools can now generate logo concepts and brand identity elements based on your company's values, industry, and aesthetic preferences. These tools analyze design principles and current trends to create unique, professional logos that can be refined with your input. They can also generate complementary brand elements like color palettes, typography recommendations, and visual motifs. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-logo-design"
    },
    {
      title: "3D Modeling & Visualization",
      description: "AI is making significant advances in 3D content creation, allowing users to generate and manipulate 3D models through text prompts or 2D image inputs. These tools can create product visualizations, architectural renderings, and virtual environments without requiring expertise in complex 3D modeling software. This is particularly valuable for product designers, architects, and game developers who need to quickly prototype their ideas. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-3d-visualization"
    }
  ]
};
