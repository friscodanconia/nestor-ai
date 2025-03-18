export interface ProductivityTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const personalProductivityData = {
  title: "Personal Productivity & Organization",
  gradientClasses: "bg-gradient-to-br from-lime-200 to-green-200",
  description: "AI-powered productivity tools are revolutionizing how we manage our time, organize information, and complete tasks. These intelligent assistants can help you streamline workflows, automate routine activities, and focus on what truly matters in both professional and personal contexts.",
  
  topics: [
    {
      title: "Smart Calendar Management",
      description: "Motion uses AI to transform traditional calendar management by automatically scheduling and prioritizing your tasks based on deadlines, importance, and available time slots. It can intelligently reschedule meetings when conflicts arise and block out focused work time to ensure you maintain productivity. The system learns from your preferences and work patterns to create an optimal schedule that balances productivity with wellbeing. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-calendar-management"
    },
    {
      title: "Intelligent Note-Taking",
      description: "Notion AI enhances your note-taking and knowledge management by automatically organizing information, generating summaries, and extracting action items from your notes. It can transform unstructured thoughts into structured documents, complete with proper formatting and organization. The AI can also suggest connections between different notes and ideas, helping you build a more cohesive knowledge base. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-note-taking"
    },
    {
      title: "Meeting Transcription & Analysis",
      description: "Otter.ai provides real-time transcription of meetings and conversations, capturing every word so you can focus on participation rather than note-taking. Beyond simple transcription, it identifies key topics, action items, and questions that arise during the meeting. The AI can generate meeting summaries, highlight important decisions, and even create task lists based on commitments made during discussions. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-meeting-transcription"
    },
    {
      title: "Email Management",
      description: "AI email assistants can categorize incoming messages, draft responses, and highlight important emails that require your immediate attention. These tools learn your communication style and can respond to routine inquiries on your behalf, freeing up time for more important tasks. Some advanced systems can even extract tasks and deadlines from emails and add them directly to your task management system. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-email-management"
    },
    {
      title: "Task Automation",
      description: "AI-powered automation tools can identify repetitive tasks in your workflow and create automated processes to handle them without your intervention. These systems can connect different applications and services you use, creating seamless workflows that reduce manual data entry and task switching. By automating routine tasks, you can focus your energy on creative and strategic work that requires human judgment. For a detailed strategy, read more here.",
      readMoreUrl: "https://nestor.guide/blog/ai-task-automation"
    }
  ]
};
