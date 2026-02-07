export interface EducationTool {
  name: string;
  description: string;
  url?: string;
  pricing?: string;
  researchNote?: string;
}

export interface EducationSection {
  title: string;
  description: string;
  tools?: EducationTool[];
}

export const educationData = {
  title: "Education",
  gradientClasses: "bg-gradient-to-br from-blue-100 to-indigo-200",
  description: "AI is transforming how people learn — from AI tutors that adapt to your level to tools that make any subject accessible. Whether you're a student, educator, or lifelong learner, these tools are worth knowing about.",

  lastUpdated: "February 2026",

  sections: [
    {
      title: "AI in Education: Where We Are",
      description: "The education AI space has split into two clear tracks:\n\n- **For learners**: AI tutors, study assistants, and language tools that personalize the experience\n- **For educators**: Content creation, grading, assessment, and classroom management tools\n\nThe biggest development: AI tutors have gotten genuinely good. Khan Academy's Khanmigo and similar tools can now explain concepts adaptively, work through problems step-by-step, and identify exactly where a student is struggling — something that was science fiction five years ago.\n\n*Based on research into adoption rates and educator reviews rather than personal classroom experience. The tools listed here have strong track records with real users.*"
    },
    {
      title: "AI Tutors & Learning Assistants",
      description: "AI-powered tutors that adapt to your level, explain concepts multiple ways, and help you work through problems at your own pace.",
      tools: [
        {
          name: "Khanmigo (Khan Academy)",
          url: "https://www.khanacademy.org/khan-labs",
          description: "AI tutor built on top of Khan Academy's world-class content. Guides students through problems without giving away answers. Covers math, science, humanities, and coding. Available in 40+ languages.",
          pricing: "Free for students and teachers (funded by donors)",
          researchNote: "Widely regarded as the gold standard for AI tutoring. The Socratic approach (guiding rather than answering) is pedagogically sound and well-implemented."
        },
        {
          name: "ChatGPT / Claude for Learning",
          url: "https://chat.openai.com/",
          description: "General AI assistants are surprisingly effective tutors when prompted well. Ask them to explain like you're 10, give analogies, create practice problems, or quiz you on material. Works for any subject.",
          pricing: "Free tiers available / Pro plans $20/mo",
          researchNote: "The Swiss Army knife of learning. Not purpose-built for education, but the flexibility and depth of knowledge make them invaluable. Best paired with a \"teach me, don't tell me\" prompting style."
        },
        {
          name: "Synthesis Tutor",
          url: "https://www.synthesis.com/tutor",
          description: "AI math tutor designed for kids (ages 6-14). Adapts difficulty in real-time, uses visual problem-solving, and makes math genuinely engaging. Founded by the team behind Elon Musk's school project.",
          pricing: "From $99/mo per child"
        },
        {
          name: "Photomath",
          url: "https://photomath.com/",
          description: "Point your phone camera at a math problem and get step-by-step solutions. Now owned by Google. Explains the reasoning behind each step, not just the answer. Covers arithmetic through calculus.",
          pricing: "Free (basic) / Plus $9.99/mo"
        }
      ]
    },
    {
      title: "Language Learning",
      description: "AI has transformed language learning from memorization drills to conversational practice. The best apps feel like having a patient tutor available 24/7.",
      tools: [
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/",
          description: "The most popular language app with 100+ million users. AI-powered adaptive lessons, conversation practice with AI characters, and gamification that actually keeps you coming back. 40+ languages available.",
          pricing: "Free (with ads) / Super $7.99/mo / Family $10.99/mo / Max $14/mo",
          researchNote: "The Max tier adds AI conversation partner (Lily and friends) which is genuinely useful for speaking practice. The free tier is excellent for getting started."
        },
        {
          name: "ChatGPT Voice for Language Practice",
          url: "https://chat.openai.com/",
          description: "Use ChatGPT's voice mode to practice conversation in any language. It can adjust difficulty, correct pronunciation, explain grammar in context, and roleplay scenarios (ordering food, job interviews, etc.).",
          pricing: "Included with ChatGPT Plus $20/mo",
          researchNote: "The most natural-feeling conversation practice available. Tell it your level and ask it to gently correct mistakes. Surprisingly effective."
        },
        {
          name: "Babbel",
          url: "https://www.babbel.com/",
          description: "Structured courses designed by linguists. Focuses on practical conversation skills rather than gamification. 14 languages. Speech recognition for pronunciation feedback.",
          pricing: "$7.99/mo (annual) / $13.95/mo (monthly) / Lifetime $249.99"
        },
        {
          name: "Busuu",
          url: "https://www.busuu.com/",
          description: "AI-powered language courses with a social component — native speakers review your exercises. CEFR-aligned content so you know exactly what level you're at. 14 languages.",
          pricing: "Free / Premium $5.95/mo / Premium Plus $6.66/mo"
        }
      ]
    },
    {
      title: "Study Tools & Research",
      description: "AI tools that help you study more effectively — from flashcard generation to research paper analysis.",
      tools: [
        {
          name: "NotebookLM (Google)",
          url: "https://notebooklm.google.com/",
          description: "Upload documents, papers, or notes and get an AI that deeply understands your sources. Ask questions, get summaries, generate study guides. The Audio Overview feature creates podcast-style discussions of your material.",
          pricing: "Free",
          researchNote: "The Audio Overview feature is remarkable — it generates a natural podcast-style discussion about your uploaded documents. Excellent for absorbing dense material."
        },
        {
          name: "Quizlet",
          url: "https://quizlet.com/",
          description: "AI-enhanced flashcard platform with adaptive study sessions. Q-Chat is an AI tutor that quizzes you conversationally. Magic Notes turns your notes into flashcard sets automatically.",
          pricing: "Free / Plus $3.99/mo / Teacher $3.99/mo",
          researchNote: "The spaced repetition algorithm is well-tuned. Q-Chat's conversational quizzing is more engaging than traditional flashcard flipping."
        },
        {
          name: "Anki",
          url: "https://apps.ankiweb.net/",
          description: "Open-source spaced repetition flashcard system. No AI built-in, but the algorithm for optimal review timing is proven by decades of research. Huge community decks available. Power users swear by it.",
          pricing: "Free (desktop/Android) / $24.99 iOS"
        },
        {
          name: "Elicit",
          url: "https://elicit.com/",
          description: "AI research assistant that finds relevant papers, extracts key findings, and synthesizes research. Searches across 200M+ papers. Incredibly useful for literature reviews and research projects.",
          pricing: "Free (5,000 credits) / Plus $12/mo / Pro from $25/mo"
        },
        {
          name: "Consensus",
          url: "https://consensus.app/",
          description: "Search engine for scientific research. Ask a question in plain English, get answers backed by peer-reviewed papers with citations. Great for evidence-based learning.",
          pricing: "Free (limited) / Premium $8.99/mo"
        }
      ]
    },
    {
      title: "Tools for Educators",
      description: "AI tools that help teachers create content, grade assignments, and manage classrooms more efficiently.",
      tools: [
        {
          name: "MagicSchool.ai",
          url: "https://www.magicschool.ai/",
          description: "AI toolkit designed specifically for teachers. 60+ tools for lesson planning, assessment creation, rubric generation, IEP writing, and more. Used by 4M+ educators worldwide.",
          pricing: "Free for teachers / Schools & districts custom",
          researchNote: "The most comprehensive AI toolkit built specifically for K-12 educators. The IEP and report card comment generators save teachers significant time."
        },
        {
          name: "Gradescope",
          url: "https://www.gradescope.com/",
          description: "AI-assisted grading for paper and digital assignments. Students submit work, AI groups similar answers, instructors grade by group. Dramatically reduces grading time while improving consistency.",
          pricing: "Free for individual instructors / Institutional licensing available"
        },
        {
          name: "Curipod",
          url: "https://curipod.com/",
          description: "AI-powered interactive lesson generator. Input a topic, get a complete interactive lesson with slides, polls, open-ended questions, and word clouds. Students engage on their devices.",
          pricing: "Free (basic) / Pro $7.50/mo / School custom"
        },
        {
          name: "Diffit",
          url: "https://app.diffit.me/",
          description: "Generates leveled reading passages and activities for any topic at any grade level. Teachers enter a topic, select a reading level, and get an adapted text with vocabulary, comprehension questions, and summaries.",
          pricing: "Free for teachers"
        }
      ]
    },
    {
      title: "Getting Started Recommendations",
      description: "**For students:**\n1. Use **Khanmigo** for math and science tutoring (free)\n2. **NotebookLM** for research and studying from source material (free)\n3. **Quizlet** for flashcard-based review\n4. **ChatGPT/Claude** as a study partner — ask it to quiz you, explain concepts, or generate practice problems\n\n**For language learners:**\n- **Duolingo** (free tier) to build daily habit\n- **ChatGPT Voice** for conversation practice\n- **Busuu** for structured, CEFR-aligned courses\n\n**For educators:**\n- **MagicSchool.ai** for lesson planning and content creation (free)\n- **Diffit** for differentiated reading materials (free)\n- **Gradescope** for faster, more consistent grading\n\n**Learning principles:**\n- AI tutors work best as supplements, not replacements for human instruction\n- Active recall (testing yourself) beats passive review — use AI to generate practice questions\n- Spaced repetition is the most evidence-backed study technique\n- Don't let AI do the thinking for you — use it to check understanding, not skip learning"
    }
  ]
};
