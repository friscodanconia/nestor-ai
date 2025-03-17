export interface AudioSection {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export const audioData = {
  title: "Audio",
  gradientClasses: "bg-gradient-to-br from-teal-200 to-cyan-200",
  description: "Experience the power of audio tools and technologies that transform the way you create, edit, and interact with sound.",
  
  sections: [
    {
      title: "Audio Editing Tools",
      description: "Powerful tools for editing and enhancing audio files, perfect for podcasts, music, and voice recordings.",
      linkText: "Explore audio editing tools",
      linkUrl: "/audio/editing"
    },
    {
      title: "AI Audio Generation",
      description: "Create realistic voices, music, and sound effects using the latest AI technology.",
      linkText: "Discover AI audio generation",
      linkUrl: "/audio/generation"
    },
    {
      title: "Sound Processing",
      description: "Advanced tools for sound processing, noise reduction, and audio enhancement.",
      linkText: "Explore sound processing tools",
      linkUrl: "/audio/processing"
    },
    {
      title: "Audio Transcription",
      description: "Convert speech to text with high accuracy using AI-powered transcription tools.",
      linkText: "Try audio transcription tools",
      linkUrl: "/audio/transcription"
    }
  ]
};
