export interface GenArtTool {
  name: string;
  description: string;
  url?: string;
  pricing?: string;
  researchNote?: string;
}

export interface GenArtSection {
  title: string;
  description: string;
  tools?: GenArtTool[];
}

export const generativeArtData = {
  title: "Generative Art",
  gradientClasses: "bg-gradient-to-br from-fuchsia-100 to-pink-200",
  description: "Generative art sits at the intersection of technology and creative expression — using AI not as a productivity tool, but as a creative collaborator. This page focuses on the artistic side of AI image and video creation: experimental workflows, community-driven models, animation art, and the evolving conversation around AI and human creativity. If you are looking for commercial image generation and design tools, see our Image & Design guide.",

  lastUpdated: "February 2026",

  sections: [
    {
      title: "The State of Generative Art",
      description: "Generative art is not new — artists have been using algorithms, procedural systems, and code to create visual work for decades. What has changed is the accessibility and the ceiling. Today's AI models can interpret natural language descriptions and produce images with stunning aesthetic range, from photorealism to styles that reference every art movement in history.\n\nThe important distinction for this guide: we are focusing on AI as an **art medium**, not a business tool. The same models that produce marketing assets can also create genuinely compelling, emotionally resonant, and conceptually rich artwork — but the approach, community, and intent are different.\n\nKey developments in early 2026:\n\n- **Model diversity**: Beyond the big three (Midjourney, DALL-E, Stable Diffusion), dozens of specialized and fine-tuned models serve specific artistic styles\n- **Community-driven innovation**: LoRA training, custom checkpoints, and ComfyUI workflows have created a vibrant ecosystem of shared artistic tools\n- **Animation**: Text-to-video and image-to-animation models are opening new creative frontiers\n- **Physical art**: More artists are producing AI-assisted work for galleries, prints, and installations\n- **The authorship conversation**: The art world continues to wrestle with what AI means for creative practice, originality, and artistic identity"
    },
    {
      title: "Text-to-Image Art",
      description: "The core creative tools for generating images from text descriptions. Each model has a distinct aesthetic personality, and serious generative artists often use multiple models to achieve different effects.",
      tools: [
        {
          name: "Midjourney",
          url: "https://www.midjourney.com/",
          description: "The most aesthetically refined text-to-image model, with a distinctive cinematic quality that has made it the tool of choice for many digital artists. V6.1 produces images with remarkable coherence, lighting, and composition. The community aspect through Discord fosters creative exchange and prompt-sharing. The new web editor and mobile app expand the creative workflow beyond Discord.",
          pricing: "Basic $10/mo (200 images) / Standard $30/mo / Pro $60/mo / Mega $120/mo",
          researchNote: "Midjourney's strength for art is its inherent aesthetic sensibility. Even basic prompts produce visually compelling results. For artists, the challenge is developing a distinctive voice within the model's tendencies rather than defaulting to its house style."
        },
        {
          name: "Stable Diffusion (Community Models)",
          url: "https://stability.ai/",
          description: "The open-source foundation that powers the largest ecosystem of artistic models and tools. Run locally with full control. The real magic is the community: thousands of fine-tuned checkpoints, LoRA models, and custom workflows shared on Civitai and Hugging Face. Supports every artistic style from anime to oil painting to architectural rendering.",
          pricing: "Free (open source, run locally) / Cloud hosting varies by provider",
          researchNote: "The deepest creative tool available, but with a significant learning curve. Artists who invest in understanding the ecosystem gain unmatched creative control. A decent GPU (8GB+ VRAM) is recommended for local use."
        },
        {
          name: "DALL-E 3",
          url: "https://openai.com/dall-e-3",
          description: "Excels at literal prompt interpretation — it generates exactly what you describe with impressive accuracy. The ChatGPT integration allows for conversational refinement of artistic concepts. Particularly strong for conceptual art, surrealism, and compositions that require precise arrangement of multiple elements.",
          pricing: "Included with ChatGPT Plus $20/mo / API pricing per image",
          researchNote: "The prompt fidelity makes it ideal for artists who have a very specific vision. Less of an aesthetic filter than Midjourney — it renders your concept rather than interpreting it through a style."
        },
        {
          name: "Leonardo.ai",
          url: "https://leonardo.ai/",
          description: "AI art platform with a focus on consistency and style control. Offers fine-tuned models for different art styles, a Canvas editor for compositing, and training tools for creating custom models from your own art. The real-time generation feature enables rapid creative exploration.",
          pricing: "Free (150 tokens/day) / Apprentice $12/mo / Artisan $30/mo / Maestro $60/mo",
          researchNote: "The fine-tuning and consistency features make it attractive for artists developing a cohesive body of work. The Canvas feature bridges the gap between generation and traditional digital painting."
        },
        {
          name: "Playground AI",
          url: "https://playground.com/",
          description: "User-friendly platform with a focus on artistic exploration. Offers multiple models, a canvas-based editor, and community features for sharing and discovering art. The mixed-image editing combines AI generation with manual painting and compositing in a single workspace.",
          pricing: "Free (100 images/day) / Pro $15/mo / Turbo $45/mo",
          researchNote: "The most accessible entry point for artists new to AI image generation. The generous free tier and intuitive interface lower the barrier to experimentation."
        }
      ]
    },
    {
      title: "AI Art Communities & Prompting",
      description: "Prompt engineering for art is a creative discipline in itself — part writing, part art direction, part technical specification. These communities share techniques, curate models, and push the boundaries of what is possible.",
      tools: [
        {
          name: "Civitai",
          url: "https://civitai.com/",
          description: "The largest community for sharing Stable Diffusion models, LoRAs, textual inversions, and workflows. Browse thousands of custom-trained models for specific art styles, characters, and aesthetics. Each model includes example outputs, training details, and usage guides. Also functions as a social platform for generative artists.",
          pricing: "Free / Supporter plans available",
          researchNote: "The single most important resource for Stable Diffusion artists. The model variety is extraordinary — from hyperrealistic portraits to specific manga styles to architectural visualization. The community voting system helps surface quality models."
        },
        {
          name: "Lexica",
          url: "https://lexica.art/",
          description: "Search engine for AI-generated art and prompts. Browse millions of images with their corresponding prompts, making it an invaluable resource for learning prompt engineering by example. Also offers its own image generation via the Aperture model.",
          pricing: "Free to browse / Starter $8/mo / Pro $24/mo for generation",
          researchNote: "The fastest way to learn prompt engineering. Find an image similar to what you want to create, study the prompt, and adapt it. Reverse engineering successful prompts teaches you more than any tutorial."
        },
        {
          name: "PromptHero",
          url: "https://prompthero.com/",
          description: "Community-driven prompt sharing platform covering Midjourney, DALL-E, Stable Diffusion, and other models. Browse top-rated prompts by category, style, and model. Each prompt includes the settings and parameters used, making it easy to replicate and build upon others' techniques.",
          pricing: "Free to browse / Pro $9/mo for advanced features",
          researchNote: "Particularly useful for cross-model comparison — see how the same concept is prompted differently for Midjourney versus Stable Diffusion. The categorization system helps when you are looking for a specific aesthetic."
        },
        {
          name: "OpenArt",
          url: "https://openart.ai/",
          description: "AI art platform with a strong community focus. Features a prompt book with curated examples, a creative variations tool that explores different interpretations of your concept, and a workflow builder for chaining multiple AI steps together. Supports multiple models and custom training.",
          pricing: "Free (limited) / Starter $12/mo / Plus $36/mo / Pro $60/mo",
          researchNote: "The creative variations feature is great for artistic exploration — it pushes you beyond your initial concept in unexpected directions. Good for breaking out of prompt ruts."
        }
      ]
    },
    {
      title: "Advanced Techniques",
      description: "For artists who want to move beyond basic text-to-image generation. These tools and techniques provide granular control over the creative process — from composition to style transfer to training custom models on your own work.",
      tools: [
        {
          name: "ComfyUI",
          url: "https://github.com/comfyanonymous/ComfyUI",
          description: "Node-based visual workflow editor for Stable Diffusion. Build complex generation pipelines by connecting processing nodes — combining models, ControlNets, LoRAs, upscalers, and post-processing in custom chains. The visual workflow makes complex processes transparent and reproducible.",
          pricing: "Free (open source)",
          researchNote: "The power-user tool for generative art. The learning curve is real, but the creative control is unmatched. Community-shared workflows can be imported and customized. Essential for artists who want full control over every step of the generation process."
        },
        {
          name: "ControlNet",
          url: "https://github.com/lllyasviel/ControlNet",
          description: "Adds spatial conditioning to image generation — control composition using edge maps, depth maps, pose references, and more. Feed in a sketch, a 3D render, or a photograph and use it as a structural guide while AI fills in the artistic details. Multiple control types can be combined for precise creative direction.",
          pricing: "Free (open source, used within Stable Diffusion workflows)",
          researchNote: "The single most important advancement for artistic control in AI generation. It bridges the gap between \"random generation\" and \"directed creation,\" giving artists the compositional control they need."
        },
        {
          name: "LoRA Training (Kohya / SDXL Training)",
          url: "https://github.com/kohya-ss/sd-scripts",
          description: "Train lightweight model adaptations (LoRAs) on your own artwork, a specific style, or a particular subject. LoRAs can be shared, combined, and adjusted in strength, allowing for nuanced style control. Kohya's sd-scripts is the most popular training framework for SDXL and SD 1.5 models.",
          pricing: "Free (open source, requires GPU for training)",
          researchNote: "This is how generative artists develop a truly personal style within AI tools. Train a LoRA on your traditional artwork, and the AI learns your aesthetic language. Requires technical comfort but the results are deeply personal."
        },
        {
          name: "Img2Img Workflows",
          url: "https://stability.ai/",
          description: "Use existing images as starting points for AI generation — sketches, photographs, paintings, or other AI outputs. Control the degree of transformation from subtle refinement to radical reimagining. Combined with inpainting (selective regeneration) and outpainting (extending beyond borders), these workflows create a fluid dialogue between human and AI creation.",
          pricing: "Available in most Stable Diffusion interfaces (free) and commercial platforms",
          researchNote: "The most natural workflow for traditionally trained artists. Start with your own sketch or composition and let AI develop it. The denoise strength parameter controls how much the AI changes — low values for subtle enhancement, high values for dramatic reinterpretation."
        }
      ]
    },
    {
      title: "AI Animation & Motion Art",
      description: "AI is extending generative art from still images into motion — creating animations, short films, and dynamic visual experiences that were previously impossible without large production teams.",
      tools: [
        {
          name: "Runway Gen-3 Alpha",
          url: "https://runwayml.com/",
          description: "The most advanced AI video generation model. Creates high-quality video clips from text prompts or images with impressive temporal coherence, cinematic quality, and motion dynamics. Supports camera controls, motion brushes, and style references. The creative tool of choice for many AI filmmakers and motion artists.",
          pricing: "Free (limited) / Standard $15/mo / Pro $35/mo / Unlimited $95/mo",
          researchNote: "Gen-3 Alpha represents a significant leap in AI video quality. The motion coherence and visual fidelity are genuinely impressive. For artists exploring motion, this is the current state of the art."
        },
        {
          name: "Deforum (Stable Diffusion Animation)",
          url: "https://deforum.github.io/",
          description: "Open-source animation framework for Stable Diffusion. Creates animations by generating sequences of images with controlled transformations — zoom, pan, rotate, and 3D motion. The results have a distinctive, dreamlike quality that has become an aesthetic category of its own. Works within ComfyUI and Automatic1111.",
          pricing: "Free (open source)",
          researchNote: "Deforum's aesthetic is uniquely AI — the morphing, flowing quality cannot be easily replicated with traditional animation. Artists who embrace this quality rather than fighting it produce the most compelling work."
        },
        {
          name: "Kaiber",
          url: "https://kaiber.ai/",
          description: "AI video generation platform focused on artistic and musical applications. Transform images into animated sequences, generate music visualizers, and create stylized video from text or image prompts. Popular with musicians and visual artists for live performance visuals and music video content.",
          pricing: "Explorer $10/mo / Pro $25/mo / Artist $60/mo",
          researchNote: "The music video use case is where Kaiber genuinely excels. The audio-reactive features create visuals that feel connected to the music in ways that manual animation rarely achieves."
        },
        {
          name: "Pika",
          url: "https://pika.art/",
          description: "AI video generation and editing platform. Generates short video clips from text or images, and offers AI-powered video editing features like object modification, background changes, and scene expansion. The interface is designed for creative accessibility rather than technical complexity.",
          pricing: "Free (limited) / Standard $10/mo / Pro $35/mo / Unlimited $70/mo",
          researchNote: "More accessible than Runway for quick artistic experiments. The editing features for modifying existing video with AI are creative tools in their own right — changing elements within footage opens up collage-like artistic approaches."
        }
      ]
    },
    {
      title: "Ethics & The Art World",
      description: "The rise of generative art raises fundamental questions about creativity, authorship, and the relationship between human and machine. These are not abstract debates — they affect working artists, the art market, and the cultural value we assign to creative work.\n\n**Key conversations:**\n\n- **Training data consent**: Most image models were trained on artwork scraped from the internet without artists' explicit consent. Tools like Have I Been Trained and Spawning.ai let artists check if their work was included and opt out of future training sets.\n- **Copyright and ownership**: Legal frameworks are still catching up. In many jurisdictions, purely AI-generated images cannot be copyrighted, but human-directed AI art — where the artist makes meaningful creative choices — is entering uncharted territory.\n- **Impact on working artists**: Illustration, concept art, and stock photography are seeing real market impact. The conversation has shifted from \"will AI replace artists?\" to \"how will artists adapt their practice and value proposition?\"\n- **Human-AI collaboration as a medium**: Many artists are finding the most compelling work emerges from genuine collaboration — using AI as one tool among many, combining it with traditional techniques, physical media, and human curation.\n- **Disclosure and authenticity**: Should AI-generated art be labeled as such? Galleries, competitions, and social platforms are developing policies, but consensus remains elusive.\n\nThe most thoughtful voices in this space advocate for transparency, consent-based training data, fair compensation models, and treating AI as a medium (like photography or digital art before it) rather than a threat or a shortcut.",
      tools: [
        {
          name: "Spawning.ai (Have I Been Trained)",
          url: "https://spawning.ai/",
          description: "Allows artists to search whether their work was included in popular AI training datasets, and provides tools to opt out of future training. Also offers an API for AI companies to respect artist preferences. Founded by artists to give creators agency over how their work is used.",
          pricing: "Free for artists",
          researchNote: "An essential resource for artists concerned about their work in training data. The opt-out mechanism is gaining adoption among responsible AI companies, though enforcement remains a challenge."
        },
        {
          name: "AI Art Ethics (aiartists.org)",
          url: "https://aiartists.org/ai-ethics",
          description: "Resource hub for the ethical dimensions of AI art. Features essays, research, and community discussions on copyright, attribution, consent, economic impact, and the philosophical questions around machine creativity. Maintained by a community of artists working with and thinking critically about AI.",
          pricing: "Free",
          researchNote: "The most balanced and thoughtful resource on AI art ethics. Avoids both the techno-utopian and doom-and-gloom framings in favor of nuanced, artist-centered discussion."
        },
        {
          name: "Creative Commons & AI",
          url: "https://creativecommons.org/",
          description: "Creative Commons is actively developing frameworks for AI and creative work. Their research and policy recommendations address how existing licensing systems interact with AI training, how attribution should work for AI-assisted creation, and what new models might be needed for the AI era.",
          pricing: "Free (nonprofit)",
          researchNote: "Watch this space. Creative Commons has shaped how the internet handles creative rights for two decades, and their evolving position on AI will likely influence policy and platform decisions."
        }
      ]
    },
    {
      title: "Getting Started Recommendations",
      description: "**For artists new to AI generation:**\n1. Start with **Midjourney** or **Playground AI** — both are accessible and produce beautiful results quickly\n2. Browse **Lexica** to learn prompt engineering by studying what works\n3. Experiment freely — treat your first hundred generations as learning, not portfolio pieces\n\n**For artists wanting deeper control:**\n- Install **Stable Diffusion** locally (via ComfyUI) and explore community models on **Civitai**\n- Learn **ControlNet** to bring your own compositional sensibility into the AI workflow\n- Train a **LoRA** on your own artwork to develop a personal AI style\n\n**For motion and animation:**\n- **Runway Gen-3 Alpha** for the highest quality AI video\n- **Deforum** for experimental, dreamlike animations (free, open source)\n- **Kaiber** if you are working with music or performance\n\n**Creative principles:**\n- AI is a medium, not a shortcut. The best generative art comes from artists who bring intention, curation, and concept\n- Generate many, curate ruthlessly. Your artistic judgment in selection is as important as prompt writing\n- Combine AI with other media — painting over AI outputs, using AI as a starting point for traditional work, mixing physical and digital\n- Engage with the ethical conversation. Understanding the debates makes you a more thoughtful and credible AI artist\n- Document your process. The creative choices you make — what you prompt, what you select, how you refine — are your artistic practice"
    }
  ]
};
