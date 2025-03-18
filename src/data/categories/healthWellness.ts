export interface HealthWellnessTopic {
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  readMoreUrl?: string;
}

export const healthWellnessData: HealthWellnessTopic[] = [
  {
    title: "Health & Wellness Overview",
    description: "AI is transforming health and wellness by providing personalized insights, tracking health metrics, and making healthcare more accessible. These tools can monitor vital signs, analyze sleep patterns, suggest personalized fitness routines, provide mental health support, and even assist in early disease detection.\n\nBy leveraging machine learning algorithms, AI health solutions can process vast amounts of health data to identify patterns and provide recommendations tailored to individual needs. They're particularly valuable for preventive healthcare, chronic disease management, and promoting overall wellbeing in our increasingly digital world."
  },
  {
    title: "Fitness & Exercise",
    description: "AI fitness tools provide personalized workout plans, real-time form correction, and progress tracking. They adapt to your fitness level, goals, and preferences to create optimal exercise routines.\n\nThese tools often use computer vision to analyze movement patterns and provide feedback on exercise technique. Many also incorporate gamification elements to increase motivation and make fitness more engaging. They're particularly useful for home workouts, busy professionals, and those new to exercise.",
    links: [
      {
        name: "Fitbod",
        url: "https://fitbod.me/"
      },
      {
        name: "Future",
        url: "https://www.future.co/"
      },
      {
        name: "Tonal",
        url: "https://www.tonal.com/"
      },
      {
        name: "Aaptiv",
        url: "https://aaptiv.com/"
      }
    ]
  },
  {
    title: "Mental Health & Wellbeing",
    description: "AI mental health tools provide therapy alternatives, mood tracking, meditation guidance, and emotional support. They offer accessible mental health resources that can complement traditional therapy.\n\nThese tools often use natural language processing to create conversational experiences and cognitive behavioral therapy techniques to help users manage stress, anxiety, and depression. Many also provide personalized recommendations based on mood patterns and user feedback.",
    links: [
      {
        name: "Woebot",
        url: "https://woebothealth.com/"
      },
      {
        name: "Headspace",
        url: "https://www.headspace.com/"
      },
      {
        name: "Calm",
        url: "https://www.calm.com/"
      },
      {
        name: "Wysa",
        url: "https://www.wysa.io/"
      }
    ]
  },
  {
    title: "Sleep Optimization",
    description: "AI sleep tools analyze sleep patterns, provide personalized recommendations, and help create optimal sleep environments. They can track sleep stages, identify disruptions, and suggest improvements.\n\nThese tools often use sensors to monitor movement, heart rate, and breathing patterns during sleep. They provide insights into sleep quality and duration, helping users understand and improve their sleep habits. Many also offer features like smart alarms that wake you during lighter sleep phases.",
    links: [
      {
        name: "Eight Sleep",
        url: "https://www.eightsleep.com/"
      },
      {
        name: "Sleep Cycle",
        url: "https://www.sleepcycle.com/"
      },
      {
        name: "Oura Ring",
        url: "https://ouraring.com/"
      },
      {
        name: "Whoop",
        url: "https://www.whoop.com/"
      }
    ]
  },
  {
    title: "Nutrition & Diet",
    description: "AI nutrition tools provide personalized meal plans, food tracking, and dietary recommendations based on your health goals, preferences, and restrictions. They can analyze nutritional content, suggest healthier alternatives, and help maintain balanced diets.\n\nThese tools often use image recognition to identify foods and calculate nutritional values automatically. Many also incorporate personalized recommendations based on dietary goals, food preferences, and health conditions. They're particularly valuable for weight management, athletic performance, and managing health conditions through diet.",
    links: [
      {
        name: "Noom",
        url: "https://www.noom.com/"
      },
      {
        name: "Cronometer",
        url: "https://cronometer.com/"
      },
      {
        name: "MyFitnessPal",
        url: "https://www.myfitnesspal.com/"
      },
      {
        name: "Lifesum",
        url: "https://lifesum.com/"
      }
    ]
  }
];
