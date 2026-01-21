export interface VideoTool {
  name: string;
  description: string;
  url?: string;
  pricing?: string;
  personalNote?: string;
}

export interface VideoSection {
  title: string;
  description: string;
  tools?: VideoTool[];
}

export const videoData = {
  title: "Video",
  gradientClasses: "bg-gradient-to-br from-orange-200 to-red-200",
  description: "AI video has exploded in 2025. What was impossible a year ago - cinematic quality videos from text - is now accessible to everyone. Here are the best tools.",
  
  lastUpdated: "January 2026",
  
  sections: [
    {
      title: "The AI Video Revolution",
      description: "2025 was the year AI video became usable. We went from blurry, distorted clips to cinematic quality in months. Key developments:\n\n- **Longer outputs**: From 4 seconds to 2+ minutes\n- **Better physics**: Objects actually behave realistically\n- **Text understanding**: Prompts translate accurately to video\n- **Image-to-video**: Animate any still image\n- **Control**: Direct camera movements, character consistency\n\nThe technology is moving so fast that this page needs constant updates."
    },
    {
      title: "Text-to-Video Generation",
      description: "Create videos from text descriptions. The quality varies, but the best tools produce remarkable results.",
      tools: [
        {
          name: "Sora (OpenAI)",
          url: "https://openai.com/sora",
          description: "OpenAI's video model, finally released in late 2024. Produces cinematic quality with excellent physics and consistency. Available through ChatGPT Pro ($200/mo) or directly.",
          pricing: "ChatGPT Pro $200/mo includes Sora"
        },
        {
          name: "Runway Gen-3 Alpha",
          url: "https://runwayml.com",
          description: "The industry standard for creative professionals. Gen-3 Alpha produces Hollywood-quality clips. Motion Brush for precise control. Strong ecosystem of features.",
          pricing: "Free trial / Standard $15/mo / Unlimited $95/mo",
          personalNote: "Most polished experience. If you're serious about AI video, start here."
        },
        {
          name: "Kling AI",
          url: "https://klingai.com",
          description: "Chinese model that rivals Sora. Excellent quality, longer outputs (up to 2 minutes), and a generous free tier. Motion control and character consistency features.",
          pricing: "Free (generous) / Pro plans available",
          personalNote: "Best free option. The quality surprised me - often matches paid tools."
        },
        {
          name: "Luma Dream Machine",
          url: "https://lumalabs.ai/dream-machine",
          description: "Fast generation with good quality. Particularly strong for image-to-video. Clean interface, easy to use.",
          pricing: "Free (limited) / Standard $24/mo"
        },
        {
          name: "Pika",
          url: "https://pika.art",
          description: "Fun and creative. Great for stylized videos, effects, and quick experiments. Less realistic but more artistic.",
          pricing: "Free (limited) / Standard $10/mo"
        },
        {
          name: "Vidu",
          url: "https://vidu.io",
          description: "Another strong Chinese model. Good quality and fast generation. Worth trying alongside Kling.",
          pricing: "Free tier available"
        }
      ]
    },
    {
      title: "Image-to-Video",
      description: "Animate still images into video. Perfect for product shots, portraits, and creative work.",
      tools: [
        {
          name: "Runway Image-to-Video",
          url: "https://runwayml.com",
          description: "Upload any image, describe the motion you want. Maintains the style and subject of the original image.",
          pricing: "Included in Runway plans"
        },
        {
          name: "Kling Image-to-Video",
          url: "https://klingai.com",
          description: "Strong image animation with good motion quality. Free tier is generous.",
          pricing: "Free tier available"
        },
        {
          name: "D-ID",
          url: "https://d-id.com",
          description: "Specializes in animating portrait photos. Creates realistic talking-head videos from a single image.",
          pricing: "Free trial / Lite $6/mo"
        },
        {
          name: "HeyGen",
          url: "https://heygen.com",
          description: "AI avatars and talking heads. Upload a photo or use stock avatars. Excellent lip-sync quality.",
          pricing: "Free (limited) / Creator $29/mo"
        }
      ]
    },
    {
      title: "Video Editing & Enhancement",
      description: "AI-powered tools that make video editing faster and easier.",
      tools: [
        {
          name: "Descript",
          url: "https://descript.com",
          description: "Edit video like a document. Edit the transcript, video follows. Studio Sound for audio enhancement. Overdub for AI voice.",
          pricing: "Free / Creator $15/mo",
          personalNote: "Changed how I edit videos. Transcript-based editing is genius."
        },
        {
          name: "Opus Clip",
          url: "https://opus.pro",
          description: "Automatically extracts viral clips from long videos. AI identifies the most engaging moments. Perfect for repurposing content.",
          pricing: "Free (limited) / Starter $19/mo"
        },
        {
          name: "Pictory",
          url: "https://pictory.ai",
          description: "Turns long-form content into short videos. Blog posts, scripts, or existing videos → social clips.",
          pricing: "Standard $23/mo"
        },
        {
          name: "Topaz Video AI",
          url: "https://topazlabs.com/topaz-video-ai",
          description: "Upscale video resolution, increase frame rates, enhance quality. Works wonders on old footage.",
          pricing: "One-time $299"
        },
        {
          name: "CapCut",
          url: "https://capcut.com",
          description: "Free video editor with AI features. Auto-captions, background removal, effects. Mobile and desktop.",
          pricing: "Free / Pro $10/mo"
        }
      ]
    },
    {
      title: "AI Avatars & Presenters",
      description: "Create videos with AI-generated presenters. No camera, no studio needed.",
      tools: [
        {
          name: "HeyGen",
          url: "https://heygen.com",
          description: "Leading AI avatar platform. 100+ stock avatars or create your own. Excellent lip-sync, multiple languages.",
          pricing: "Free (limited) / Creator $29/mo"
        },
        {
          name: "Synthesia",
          url: "https://synthesia.io",
          description: "Enterprise-focused AI video platform. 140+ avatars, 120+ languages. Used for training and corporate videos.",
          pricing: "Personal $29/mo / Business custom"
        },
        {
          name: "Colossyan",
          url: "https://colossyan.com",
          description: "AI video for learning and development. Good avatar quality with a focus on workplace content.",
          pricing: "Starter $35/mo"
        }
      ]
    },
    {
      title: "Specialized Tools",
      description: "Niche tools for specific video needs.",
      tools: [
        {
          name: "Wonder Dynamics",
          url: "https://wonderdynamics.com",
          description: "Replace actors with CG characters automatically. AI handles animation, lighting, and compositing.",
          pricing: "Contact for pricing"
        },
        {
          name: "Move.ai",
          url: "https://move.ai",
          description: "Motion capture from regular video. No suits or markers needed. Works with smartphone footage.",
          pricing: "Free beta / Pro plans coming"
        },
        {
          name: "Fliki",
          url: "https://fliki.ai",
          description: "Text-to-video with AI voiceover. Good for explainer videos and content marketing.",
          pricing: "Free (limited) / Standard $28/mo"
        }
      ]
    },
    {
      title: "Getting Started Recommendations",
      description: "**If you're new to AI video:**\n1. Start with **Kling** (free) or **Pika** (fun) to experiment\n2. Move to **Runway** when you need professional quality\n3. Use **Descript** for editing - it's a game changer\n\n**For professional use:**\n- **Runway Gen-3** for creative work\n- **HeyGen** for corporate/training videos\n- **Opus Clip** for social media content\n\n**Important notes:**\n- Quality varies by prompt - experiment extensively\n- Generation takes time - batch your requests\n- Always review outputs - AI makes mistakes\n- Rights vary by platform - check terms of service"
    }
  ]
};
