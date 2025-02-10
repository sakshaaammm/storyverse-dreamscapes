
import { StoryData } from "@/types/story";

export const ROMANCE_STORY: StoryData = {
  title: "Coffee Shop Love",
  author: "David Park",
  coverImage: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "It's another rainy morning at the Moonlight Café when a mysterious stranger walks in, their presence immediately catching your attention...",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
      mood: "neutral",
      choices: [
        {
          text: "Offer them your umbrella",
          nextSceneId: "umbrella",
          consequence: "A simple act of kindness can lead to something special"
        },
        {
          text: "Make their favorite drink",
          nextSceneId: "drink",
          consequence: "The perfect brew might spark a connection"
        }
      ]
    },
    umbrella: {
      id: "umbrella",
      content: "They smile warmly, grateful for your kindness. As you share stories under the shelter of your umbrella, you feel a connection forming...",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      mood: "positive",
      choices: [
        {
          text: "Walk them home",
          nextSceneId: "ending",
          consequence: "Sometimes the best journeys are unexpected"
        }
      ]
    },
    ending: {
      id: "ending",
      content: "What started as a chance encounter in a coffee shop blossoms into a beautiful romance.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
