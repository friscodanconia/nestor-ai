export interface ImageDesignTool {
  name: string;
  description: string;
  url?: string;
  pricing?: string;
  researchNote?: string;
}

export interface ImageDesignSection {
  title: string;
  description: string;
  tools?: ImageDesignTool[];
}

export const imageDesignData = {
  title: "Image & Design",
  gradientClasses: "bg-gradient-to-br from-purple-100 to-indigo-200",
  description: "AI image tools have evolved from party tricks to professional essentials. Whether you're generating images from text, editing photos, or building brand assets — the quality ceiling keeps rising. Here's what actually delivers.",

  lastUpdated: "February 2026",

  sections: [
    {
      title: "The State of AI Image Tools",
      description: "The AI image space moves fast. Key developments as of early 2026:\n\n- **Quality**: The best models produce images indistinguishable from professional photography\n- **Control**: You can now direct specific elements — composition, lighting, text placement\n- **Text in images**: Models like Ideogram and Flux finally render readable text reliably\n- **Editing**: AI-powered editing (inpainting, outpainting, object removal) is production-ready\n- **Commercial safety**: Adobe Firefly and similar tools trained on licensed data for safe commercial use\n\nThe biggest shift: AI image generation has moved from \"cool demo\" to \"daily workflow tool\" for designers, marketers, and content creators."
    },
    {
      title: "Text-to-Image Generation",
      description: "Create images from text descriptions. The quality gap between models has narrowed, but each has distinct strengths.",
      tools: [
        {
          name: "Midjourney",
          url: "https://www.midjourney.com/",
          description: "Produces the most aesthetically pleasing images with a distinctive cinematic quality. V6.1 handles complex prompts, multiple subjects, and text rendering. Web editor and mobile app now available alongside Discord.",
          pricing: "Basic $10/mo (200 images) / Standard $30/mo / Pro $60/mo / Mega $120/mo",
          researchNote: "Still the overall quality leader for marketing and creative work. The learning curve for prompt engineering pays off significantly."
        },
        {
          name: "DALL-E 3",
          url: "https://openai.com/dall-e-3",
          description: "Best prompt adherence — what you describe is what you get. Integrated into ChatGPT for conversational iteration. Excellent for conceptual illustrations and diagrams.",
          pricing: "Included with ChatGPT Plus $20/mo / API pricing per image"
        },
        {
          name: "Flux (by Black Forest Labs)",
          url: "https://blackforestlabs.ai/",
          description: "Open-source model with exceptional quality. Flux Pro rivals Midjourney. Flux Dev is free for non-commercial use. Strong text rendering and photorealism. Available through Replicate, fal.ai, and other providers.",
          pricing: "Flux Dev free (open source) / Flux Pro via API ~$0.05/image",
          researchNote: "The open-source option that's actually competitive with commercial tools. Great for developers building image features into products."
        },
        {
          name: "Stable Diffusion 3.5",
          url: "https://stability.ai/",
          description: "The most customizable option. Run locally, fine-tune on your own data, create custom LoRAs. Huge community of models, extensions, and workflows. ComfyUI is the power-user interface.",
          pricing: "Free (open source, run locally) / API from $0.04/image",
          researchNote: "Best for technical users who want maximum control. The ecosystem of community models and workflows is unmatched. Requires a decent GPU to run locally."
        },
        {
          name: "Ideogram",
          url: "https://ideogram.ai/",
          description: "Best text rendering in images, period. Creates logos, posters, signs, and graphics with actually readable text. Also strong for graphic design-style outputs and typography-heavy compositions.",
          pricing: "Free (limited) / Basic $8/mo / Plus $20/mo / Pro $60/mo",
          researchNote: "Go-to tool when you need text in images. The typography quality is significantly ahead of other models."
        },
        {
          name: "Google Imagen 3",
          url: "https://deepmind.google/technologies/imagen-3/",
          description: "Google's latest image model available through Gemini and ImageFX. Excellent photorealism, good text understanding, and strong detail handling.",
          pricing: "Free in Gemini / ImageFX"
        }
      ]
    },
    {
      title: "AI Photo Editing",
      description: "AI-powered editing that goes far beyond traditional filters. Remove objects, extend backgrounds, change styles, and enhance quality.",
      tools: [
        {
          name: "Adobe Photoshop (Generative Fill/Expand)",
          url: "https://www.adobe.com/products/photoshop.html",
          description: "Generative Fill and Generative Expand are game-changers. Select any area, describe what you want, and Photoshop generates it seamlessly. Commercially safe (Firefly-powered). Industry standard for a reason.",
          pricing: "Photoshop $22.99/mo / Photography Plan $9.99/mo / All Apps $59.99/mo",
          researchNote: "Generative Fill alone justified the subscription for many photographers and designers. The integration into existing workflows is seamless."
        },
        {
          name: "Luminar Neo",
          url: "https://skylum.com/luminar",
          description: "AI photo editor focused on one-click enhancements. Sky replacement, portrait retouching, object removal, and lighting adjustments. Great for photographers who want fast, natural-looking edits.",
          pricing: "Subscription $9.95/mo / Lifetime from $149"
        },
        {
          name: "Remove.bg",
          url: "https://www.remove.bg/",
          description: "Instant, accurate background removal. API available for batch processing. The quality is consistently excellent — handles hair, transparent objects, and complex edges.",
          pricing: "Free (preview) / Credits from $0.20/image / Subscription from $9/mo"
        },
        {
          name: "Cleanup.pictures",
          url: "https://cleanup.pictures/",
          description: "Remove unwanted objects, people, or blemishes from photos by painting over them. Simple, fast, and surprisingly effective. No signup required for basic use.",
          pricing: "Free (limited) / Pro $5/mo"
        },
        {
          name: "Topaz Photo AI",
          url: "https://www.topazlabs.com/topaz-photo-ai",
          description: "AI-powered photo enhancement: denoise, sharpen, upscale resolution. Works wonders on old photos, low-light shots, and phone photos. Processes locally on your machine.",
          pricing: "One-time $199 / Annual updates $99/yr"
        }
      ]
    },
    {
      title: "Design & Brand Tools",
      description: "AI tools for creating logos, brand assets, presentations, and design systems.",
      tools: [
        {
          name: "Canva",
          url: "https://www.canva.com/",
          description: "The all-in-one design platform with AI features baked in. Magic Media generates images, Magic Write handles text, Magic Eraser removes objects. Templates for everything. The default choice for non-designers.",
          pricing: "Free / Pro $15/mo / Teams $10/mo per user",
          researchNote: "Not the most powerful tool in any single category, but the integration of AI across the entire design workflow makes it incredibly productive."
        },
        {
          name: "Figma AI",
          url: "https://www.figma.com/",
          description: "The professional design tool now with AI features. Auto-generate layouts, rename layers intelligently, search by visual similarity. For product designers and teams.",
          pricing: "Free (3 projects) / Professional $15/mo per editor / Organization $45/mo"
        },
        {
          name: "Looka",
          url: "https://looka.com/",
          description: "AI logo generator that creates professional brand packages. Input your business details and preferences, get logo options with full brand kits including colors, fonts, and social assets.",
          pricing: "Free to design / Premium Package $96 one-time / Brand Kit subscription $96/yr"
        },
        {
          name: "Recraft",
          url: "https://www.recraft.ai/",
          description: "AI-native design tool. Generate and edit vector graphics, illustrations, and icons with AI. Maintains style consistency across a set. Great for creating cohesive design systems.",
          pricing: "Free (limited) / Pro $20/mo / Team $30/mo per user",
          researchNote: "The vector generation capability is unique and genuinely useful for creating icon sets and illustrations with a consistent style."
        }
      ]
    },
    {
      title: "Product & E-commerce Visuals",
      description: "Generate professional product photos and lifestyle shots without expensive photo shoots.",
      tools: [
        {
          name: "Pebblely",
          url: "https://pebblely.com/",
          description: "Drop in a product photo, generate professional lifestyle backgrounds instantly. Perfect for e-commerce listings, social ads, and marketing materials.",
          pricing: "Free (40 images) / Pro $19/mo / Premium $39/mo"
        },
        {
          name: "Photoroom",
          url: "https://www.photoroom.com/",
          description: "AI-powered product photography. Background removal, background generation, image resizing for different platforms. Used by millions of sellers on marketplaces.",
          pricing: "Free / Pro $12.99/mo / Teams $29.99/mo per user",
          researchNote: "The go-to for small e-commerce sellers. The batch processing and marketplace-specific templates save huge amounts of time."
        },
        {
          name: "Flair AI",
          url: "https://flair.ai/",
          description: "Drag-and-drop product photography. Place your product in AI-generated scenes. Control composition by positioning products and props on a canvas.",
          pricing: "Free (limited) / Pro $10/mo / Enterprise custom"
        }
      ]
    },
    {
      title: "Getting Started Recommendations",
      description: "**For casual/personal use:**\n1. Start with **Canva** — it does everything reasonably well in one place\n2. Try **Ideogram** for anything with text in images\n3. Use **DALL-E 3** via ChatGPT for quick illustrations\n\n**For professional design:**\n- **Midjourney** for hero images and marketing visuals\n- **Photoshop Generative Fill** for photo editing and compositing\n- **Figma** for UI/product design with AI assist\n\n**For e-commerce:**\n- **Photoroom** or **Pebblely** for product shots\n- **Remove.bg** for bulk background removal\n\n**For developers:**\n- **Flux** (open source) or **Stable Diffusion** for custom implementations\n- **Replicate** or **fal.ai** for API access to latest models\n\n**Tips:**\n- Learn basic prompt engineering — specificity dramatically improves results\n- Always generate multiple options and iterate\n- Check commercial usage rights for your specific use case\n- AI-generated images still need human curation and sometimes touch-up"
    }
  ]
};
