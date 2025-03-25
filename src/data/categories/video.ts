export interface VideoTool {
  name: string;
  description: string;
  url?: string;
}

export interface VideoSection {
  title: string;
  description: string;
  tools?: VideoTool[];
}

export const videoData = {
  title: "Video",
  gradientClasses: "bg-gradient-to-br from-orange-200 to-red-200",
  description: "Discover powerful AI video tools that help you create, edit, and enhance your video content.",
  
  sections: [
    {
      title: "Video AI Overview",
      description: "Video AI technologies have disrupted traditional video production by automating complex tasks that once required specialized skills, expensive software, and powerful hardware. Today's AI video tools enable users to:\n\n- Generate videos from text: Create video content by simply describing what you want\n- Convert still images to video: Animate static images with realistic motion\n- Enhance existing footage: Upscale resolution, stabilize shaky video, and improve lighting\n- Edit through text: Modify video by editing a transcript rather than using complex timeline tools\n- Create synthetic presenters: Generate realistic human presenters that deliver custom scripts\n- Auto-subtitle and translate: Add captions and translate content for global audiences\n\nThis revolution in video production has democratized content creation, allowing individuals and small businesses to produce professional-quality videos without large production teams."
    },
    {
      title: "Text-to-Video Generation",
      description: "These tools allow you to create videos directly from text descriptions, opening new possibilities for content creation without filming.",
      tools: [
        {
          name: "Runway Gen-2",
          description: "Create videos from text prompts or images. Generates realistic scenes, characters, and animations without filming. Offers customizable styles and motion.",
          url: "https://runwayml.com/"
        },
        {
          name: "Pika Labs",
          description: "Transforms text descriptions into high-quality videos with customizable styles and characters. Features include motion control and scene composition.",
          url: "https://www.pika.art/"
        },
        {
          name: "Synthesys",
          description: "Creates videos with AI-generated presenters speaking your script in multiple languages. Useful for training videos, marketing content, and personalized messages.",
          url: "https://synthesys.io/"
        },
        {
          name: "Fliki",
          description: "Converts text to videos with AI-generated voiceovers and visuals. Automatically matches relevant stock footage to your script.",
          url: "https://fliki.ai/"
        }
      ]
    },
    {
      title: "Image-to-Video Tools",
      description: "Transform static images into dynamic videos with realistic motion and animation.",
      tools: [
        {
          name: "D-ID",
          description: "Animates still photos to create realistic talking-head videos. Used for creating virtual presenters, historical figure animations, and personalized messages.",
          url: "https://www.d-id.com/"
        },
        {
          name: "HeyGen",
          description: "Creates talking avatar videos from static images with natural lip-sync and expressions. Offers multiple languages and voice customization.",
          url: "https://www.heygen.com/"
        },
        {
          name: "Genmo",
          description: "Transforms static images into dynamic videos with customizable motion and effects. Preserves image quality while adding natural movement.",
          url: "https://www.genmo.ai/"
        }
      ]
    },
    {
      title: "Video Enhancement and Editing",
      description: "Improve and edit your videos with AI-powered tools that simplify complex editing tasks.",
      tools: [
        {
          name: "Descript",
          description: "All-in-one video editor that treats video editing like document editing. Features transcription-based editing, AI-powered scene detection, and Studio Sound for audio enhancement.",
          url: "https://www.descript.com/"
        },
        {
          name: "Pictory",
          description: "Automatically creates short-form videos from long-form content. Extracts key points, adds visuals, and generates ready-to-share social media clips.",
          url: "https://pictory.ai/"
        },
        {
          name: "Topaz Video AI",
          description: "Uses machine learning to upscale video resolution, increase frame rates, and enhance video quality. Particularly useful for restoring older footage.",
          url: "https://www.topazlabs.com/topaz-video-ai"
        },
        {
          name: "Opus Clip",
          description: "Automatically extracts the most engaging clips from longer videos for social media sharing. Identifies key moments based on content analysis.",
          url: "https://www.opus.pro/"
        }
      ]
    },
    {
      title: "Virtual Production",
      description: "Create digital humans and automate animation for film, games, and interactive experiences.",
      tools: [
        {
          name: "Unreal Engine with MetaHuman",
          description: "While not purely AI, this combination allows for creating photorealistic digital humans for film, games, and interactive experiences.",
          url: "https://www.unrealengine.com/en-US/metahuman"
        },
        {
          name: "Wonder Dynamics",
          description: "Automates animation and visual effects insertion into live-action footage, reducing post-production time and costs.",
          url: "https://wonderdynamics.com/"
        },
        {
          name: "Move.ai",
          description: "Captures motion without specialized equipment, allowing creators to record high-quality movement data using standard cameras.",
          url: "https://www.move.ai/"
        }
      ]
    },
    {
      title: "Use Cases for AI Video Tools",
      description: "- Content creators: Producing professional videos without extensive technical skills\n- Marketers: Creating multiple video variations for testing and personalization\n- Educators: Developing engaging instructional content\n- E-commerce: Building product demonstrations and promotional material\n- Internal communications: Creating training videos and corporate announcements\n- Social media managers: Generating short-form video content efficiently\n- Localization teams: Adapting video content for international markets"
    },
    {
      title: "Ethical Considerations",
      description: "The power of AI video tools comes with important ethical considerations:\n\n- Deepfake potential: The risk of creating misleading or fake content\n- Consent: Using someone's likeness appropriately\n- Transparency: Clearly labeling AI-generated content\n- Bias: Ensuring diverse representation in AI-generated characters\n- Industry impact: Effects on traditional video production professionals"
    }
  ]
};
// Updated video data file
