
import { StoryData } from "@/types/story";

export const FANTASY_STORY: StoryData = {
  title: "The Crystal Kingdom",
  author: "Elena Rivers",
  coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "In the mystical realm of Crystallia, where magic flows through ancient crystals, you discover an unusual gem pulsing with inner light...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      mood: "neutral",
      choices: [
        {
          text: "Touch the crystal",
          nextSceneId: "touch",
          consequence: "The crystal's energy flows through you"
        },
        {
          text: "Seek wisdom from the elders",
          nextSceneId: "elders",
          consequence: "Ancient knowledge may provide guidance"
        }
      ]
    },
    touch: {
      id: "touch",
      content: "As your fingers brush the crystal's surface, magical energy surges through your body, awakening dormant powers...",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      mood: "positive",
      choices: [
        {
          text: "Embrace the power",
          nextSceneId: "ending",
          consequence: "You become one with the crystal's magic"
        }
      ]
    },
    ending: {
      id: "ending",
      content: "You become the new Crystal Guardian, protector of the realm's magic.",
      image: "https://images.unsplash.com/photo-1500252185289-40708b7a6a8b",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
