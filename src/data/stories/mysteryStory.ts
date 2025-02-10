
import { StoryData } from "@/types/story";

export const MYSTERY_STORY: StoryData = {
  title: "The Detective's Last Case",
  author: "James Morrison",
  coverImage: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "A cryptic note arrives at your detective agency late one stormy night. The handwriting seems familiar, but the message is puzzling...",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "neutral",
      choices: [
        {
          text: "Analyze the handwriting",
          nextSceneId: "analyze",
          consequence: "The devil is in the details"
        },
        {
          text: "Follow the clues",
          nextSceneId: "clues",
          consequence: "Time to put your detective skills to work"
        }
      ]
    },
    analyze: {
      id: "analyze",
      content: "The handwriting analysis reveals a shocking truth - this case is connected to one from your past...",
      image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
      mood: "negative",
      choices: [
        {
          text: "Confront the truth",
          nextSceneId: "ending",
          consequence: "The past always catches up"
        }
      ]
    },
    ending: {
      id: "ending",
      content: "You finally solve the mystery that has haunted you for years, bringing closure to your most personal case.",
      image: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
