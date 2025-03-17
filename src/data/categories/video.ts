export interface VideoSection {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export const videoData = {
  title: "Video",
  gradientClasses: "bg-gradient-to-br from-orange-200 to-red-200",
  description: "Discover powerful video tools and technologies that help you create, edit, and enhance your video content.",
  
  sections: [
    {
      title: "Video Editing Tools",
      description: "Professional-grade tools for editing and enhancing video content, suitable for beginners and experts alike.",
      linkText: "Explore video editing tools",
      linkUrl: "/video/editing"
    },
    {
      title: "AI Video Generation",
      description: "Create stunning videos from text prompts or transform images into dynamic video content using AI.",
      linkText: "Discover AI video generation",
      linkUrl: "/video/generation"
    },
    {
      title: "Video Enhancement",
      description: "Improve video quality, upscale resolution, and apply professional effects with AI-powered tools.",
      linkText: "Explore video enhancement",
      linkUrl: "/video/enhancement"
    },
    {
      title: "Video Transcription",
      description: "Automatically generate accurate captions and transcripts for your video content.",
      linkText: "Try video transcription tools",
      linkUrl: "/video/transcription"
    }
  ]
};
