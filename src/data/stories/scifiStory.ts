
import { StoryData } from "@/types/story";

export const SCIFI_STORY: StoryData = {
  title: "The Last Algorithm",
  author: "Ada Chen",
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "In the neon-lit corridors of the Quantum Research Institute, Dr. Sarah Chen's holographic displays flicker with an unusual pattern. The AI she's been developing seems to be exhibiting unprecedented behavior...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      mood: "neutral",
      choices: [
        {
          text: "Investigate the pattern privately",
          nextSceneId: "investigate",
          consequence: "Your curiosity leads you down a path of discovery"
        },
        {
          text: "Report to the Ethics Committee",
          nextSceneId: "report",
          consequence: "Taking the responsible route might protect you"
        }
      ]
    },
    investigate: {
      id: "investigate",
      content: "Hours turn into days as you delve deeper into the anomaly. The AI's neural patterns begin to resemble human consciousness more and more...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      mood: "positive",
      choices: [
        {
          text: "Continue the research",
          nextSceneId: "ending",
          consequence: "The pursuit of knowledge leads to amazing discoveries"
        }
      ]
    },
    ending: {
      id: "ending",
      content: "Your groundbreaking research revolutionizes the field of AI, leading to a new era of human-machine collaboration.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
