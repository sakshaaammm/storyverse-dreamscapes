
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
      image: "public/lovable-uploads/62fd4253-a317-4e64-adb4-710e37ce721b.png",
      mood: "positive",
      choices: [
        {
          text: "Embrace the power",
          nextSceneId: "ending",
          consequence: "You become one with the crystal's magic"
        }
      ]
    },
    elders: {
      id: "elders",
      content: "The wise elders gather around you, their eyes glowing with ancient wisdom. They speak of a prophecy about a chosen one who would awaken the crystal's true power...",
      image: "public/lovable-uploads/9ac2a892-f829-4cfc-85c3-72da99d0ae8c.png",
      mood: "neutral",
      choices: [
        {
          text: "Accept your destiny",
          nextSceneId: "ending",
          consequence: "The prophecy unfolds"
        }
      ]
    },
    ending: {
      id: "ending",
      content: "You become the new Crystal Guardian, protector of the realm's magic.",
      image: "public/lovable-uploads/9ac2a892-f829-4cfc-85c3-72da99d0ae8c.png",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
