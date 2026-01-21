export interface AudioSection {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  tools?: {
    name: string;
    description: string;
    url?: string;
  }[];
}

export const audioData = {
  title: "Audio",
  gradientClasses: "bg-gradient-to-br from-teal-200 to-cyan-200",
  description: "Audio AI has revolutionized sound creation and interaction, making professional-quality audio production accessible to everyone. These technologies generate realistic voices, compose music, convert documents to audio, and transform the way we create and consume audio content.",
  
  sections: [
    {
      title: "Audio AI Overview",
      description: "AI audio tools have democratized content creation by removing technical barriers that once required specialized training and expensive equipment. With these tools, anyone can create professional-quality voiceovers, generate original music, transcribe spoken content, and even clone voices (with appropriate permissions).\n\nThe technology behind these tools combines several AI approaches including speech synthesis, voice cloning, music generation, audio enhancement, speech recognition, and text-to-audio conversion.",
    },
    {
      title: "Text-to-Speech and Voice Synthesis",
      description: "Create natural-sounding voices and realistic speech from text using AI technology.",
      tools: [
        {
          name: "Murf AI",
          description: "Create professional voiceovers with 120+ natural-sounding AI voices across 20+ languages. Features voice customization, style control, and multi-track editing.",
          url: "https://murf.ai/"
        },
        {
          name: "ElevenLabs",
          description: "Can clone voices and generate hyper-realistic speech in multiple languages. Their Prime Voice AI technology produces the most natural-sounding AI speech available with fine-grained emotional control.",
          url: "https://elevenlabs.io/"
        },
        {
          name: "Play.ht",
          description: "Generate realistic text-to-speech audio using over 900+ lifelike voices across 142 languages. Offers voice cloning capabilities and an extensive voice library.",
          url: "https://play.ht/"
        },
        {
          name: "Resemble.ai",
          description: "Creates custom AI voices that can express emotion. Used for commercials, audiobooks, and localization projects that require voice consistency.",
          url: "https://www.resemble.ai/"
        }
      ]
    },
    {
      title: "Music Generation",
      description: "Create original music compositions and songs using AI technology.",
      tools: [
        {
          name: "Suno",
          description: "Composes songs from text prompts, generating full tracks with vocals, instruments, and lyrics. Can create music in various genres and styles.",
          url: "https://suno.com/"
        },
        {
          name: "Udio",
          description: "AI music generator with high-quality audio output. Create songs with specific styles, genres, and moods. Strong competitor to Suno.",
          url: "https://udio.com/"
        },
        {
          name: "Soundraw",
          description: "AI music generator that creates royalty-free tracks for content creators. Offers style, mood, and instrument customization.",
          url: "https://soundraw.io/"
        },
        {
          name: "AIVA",
          description: "Composes emotional soundtrack music for films, video games, and commercials. Trained on classical and contemporary music to create original compositions.",
          url: "https://www.aiva.ai/"
        }
      ]
    },
    {
      title: "Developer Tools & Frameworks",
      description: "Build your own audio AI applications with these frameworks.",
      tools: [
        {
          name: "NVIDIA NeMo",
          description: "Scalable generative AI framework for speech AI, LLMs, and multimodal. ASR, TTS, and NLP capabilities for researchers and developers. ⭐ 16K+",
          url: "https://github.com/NVIDIA-NeMo/NeMo"
        },
        {
          name: "Whisper",
          description: "OpenAI's open-source speech recognition model. Robust transcription across languages and accents. Self-hostable.",
          url: "https://github.com/openai/whisper"
        },
        {
          name: "Coqui TTS",
          description: "Open-source text-to-speech engine. Train custom voices, multiple languages. Great for self-hosting.",
          url: "https://github.com/coqui-ai/TTS"
        }
      ]
    },
    {
      title: "Audio Content Conversion",
      description: "Transform written content into audio format for easier consumption.",
      tools: [
        {
          name: "Notebook LM",
          description: "Turns documents into podcasts with natural-sounding narration. Particularly useful for converting articles, research papers, and long-form content into audio format.",
          url: "https://notebooklm.google/"
        },
        {
          name: "Podcastle",
          description: "Converts text articles to audio with realistic voices. Features studio-quality recording, transcription, and AI-enhanced editing.",
          url: "https://podcastle.ai/"
        },
        {
          name: "Speechify",
          description: "Converts text to natural-sounding speech, supporting PDFs, web articles, emails, and more with customizable voices and reading speeds.",
          url: "https://speechify.com/"
        }
      ]
    },
    {
      title: "Audio Editing and Enhancement",
      description: "Improve and edit audio recordings with AI-powered tools.",
      tools: [
        {
          name: "Descript",
          description: "All-in-one audio editor that treats audio like a document. Features transcription, overdub voice generation, and noise removal.",
          url: "https://www.descript.com/"
        },
        {
          name: "Adobe Podcast",
          description: "Enhances voice recordings with AI noise cancellation, equalization, and clarity enhancements that make amateur recordings sound professional.",
          url: "https://podcast.adobe.com/"
        },
        {
          name: "Auphonic",
          description: "Automatic audio post-production service that optimizes audio levels, reduces noise, and balances multiple speakers.",
          url: "https://auphonic.com/"
        }
      ]
    },
    {
      title: "Use Cases for AI Audio Tools",
      description: "Content creators: Producing voiceovers for videos without hiring voice talent\nAuthors: Converting books to audiobooks with consistent voice quality\nEducators: Creating accessible audio versions of learning materials\nMarketers: Generating localized content in multiple languages\nPodcasters: Enhancing recording quality and creating transcripts\nDevelopers: Integrating voice interaction into applications\nMusicians: Generating backing tracks or inspiration for compositions"
    },
    {
      title: "Ethical Considerations",
      description: "While audio AI tools offer tremendous creative possibilities, they also raise important ethical considerations:\n\n- Consent in voice cloning: Ensuring proper permission for replicating someone's voice\n- Audio deepfakes: Potential misuse for creating fake audio content\n- Attribution: Properly crediting AI-generated content\n- Industry impact: Effects on professional voice actors, musicians, and audio engineers"
    }
  ]
};
