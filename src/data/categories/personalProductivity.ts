export interface PersonalProductivityTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const personalProductivityData: PersonalProductivityTopic[] = [
  {
    title: "Personal Productivity Overview",
    description: "AI tools for personal productivity help individuals manage their time, tasks, and information more effectively. These tools leverage artificial intelligence to automate routine processes, provide personalized recommendations, and surface relevant information when needed.\n\nThe goal of these tools is to reduce cognitive load and administrative overhead, allowing users to focus on high-value creative and strategic work. From smart to-do lists to AI-powered note-taking applications, these technologies are transforming how we organize our professional and personal lives."
  },
  {
    title: "AI Task Management",
    description: "AI task management tools help prioritize, schedule, and track tasks based on importance, deadlines, and personal work patterns. These systems go beyond traditional to-do lists by intelligently organizing tasks and suggesting optimal times for completion.\n\nAdvanced features often include automatic task categorization, smart reminders based on context (like location or time of day), and the ability to break down complex projects into manageable steps. Some tools can even analyze your productivity patterns to suggest the best times for focused work versus meetings or administrative tasks.",
    links: [
      {
        name: "Todoist AI",
        url: "https://todoist.com/ai"
      },
      {
        name: "Motion",
        url: "https://www.usemotion.com/"
      },
      {
        name: "Reclaim.ai",
        url: "https://reclaim.ai/"
      },
      {
        name: "Akiflow",
        url: "https://akiflow.com/"
      }
    ]
  },
  {
    title: "AI Note-Taking and Knowledge Management",
    description: "AI-powered note-taking tools enhance how we capture, organize, and retrieve information. These applications can transcribe meetings, summarize long documents, and connect related ideas across different notes.\n\nKey features typically include automatic categorization of notes, semantic search capabilities that understand concepts rather than just keywords, and the ability to extract action items from meeting notes. Some tools can even generate structured notes from unstructured inputs like voice recordings or handwritten text.",
    links: [
      {
        name: "Notion AI",
        url: "https://www.notion.so/product/ai"
      },
      {
        name: "Mem.ai",
        url: "https://mem.ai/"
      },
      {
        name: "Otter.ai",
        url: "https://otter.ai/"
      },
      {
        name: "Reflect",
        url: "https://reflect.app/"
      }
    ]
  },
  {
    title: "Email and Communication Management",
    description: "AI tools for email and communication help manage the overwhelming volume of digital messages. These tools can prioritize important communications, draft responses, and organize conversations by topic or priority.\n\nAdvanced features include automatic categorization of emails, suggested replies based on content and context, and scheduling assistants that can coordinate meetings without back-and-forth messages. Some tools can also analyze communication patterns to identify important relationships that may need attention.",
    links: [
      {
        name: "Superhuman",
        url: "https://superhuman.com/"
      },
      {
        name: "Front",
        url: "https://front.com/"
      },
      {
        name: "Clara",
        url: "https://clara.com/"
      },
      {
        name: "Spark Mail",
        url: "https://sparkmailapp.com/"
      }
    ]
  },
  {
    title: "Focus and Time Management",
    description: "AI focus tools help maintain concentration and optimize work sessions based on personal energy levels and attention patterns. These applications use various techniques to minimize distractions and maximize productive time.\n\nFeatures often include smart notification management that filters interruptions based on priority and context, focus timers that adapt to your work patterns, and environment controls that can adjust lighting or music based on the type of work you're doing. Some tools also provide insights into your focus patterns to help you understand when you're most productive.",
    links: [
      {
        name: "Forest",
        url: "https://www.forestapp.cc/"
      },
      {
        name: "Focus@Will",
        url: "https://www.focusatwill.com/"
      },
      {
        name: "Freedom",
        url: "https://freedom.to/"
      },
      {
        name: "RescueTime",
        url: "https://www.rescuetime.com/"
      }
    ]
  },
  {
    title: "Personal AI Assistants",
    description: "Personal AI assistants serve as digital companions that help manage various aspects of daily life. These assistants can schedule appointments, answer questions, provide reminders, and even offer suggestions based on your preferences and habits.\n\nUnlike task-specific productivity tools, personal assistants aim to provide comprehensive support across different domains. They typically integrate with various services and applications to offer a unified interface for managing your digital life. Advanced assistants can learn from your interactions to become increasingly personalized over time.",
    links: [
      {
        name: "Rabbit R1",
        url: "https://www.rabbit.tech/"
      },
      {
        name: "Pi",
        url: "https://heypi.com/talk"
      },
      {
        name: "Anthropic Claude",
        url: "https://claude.ai/"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com/"
      }
    ]
  }
];
