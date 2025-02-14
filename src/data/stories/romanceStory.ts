
import { StoryData } from "@/types/story";

export const ROMANCE_STORY: StoryData = {
  title: "Coffee Shop Love",
  author: "David Park",
  coverImage: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "It's another rainy morning at the Moonlight Café when a mysterious stranger walks in, their presence immediately catching your attention. Something about them feels different, special...",
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
        },
        {
          text: "Strike up a conversation",
          nextSceneId: "conversation",
          consequence: "Sometimes words are all you need"
        }
      ]
    },
    umbrella: {
      id: "umbrella",
      content: "They smile warmly, grateful for your kindness. As you share stories under the shelter of your umbrella, you feel a connection forming. They introduce themselves as Alex, a writer working on their novel.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      mood: "positive",
      choices: [
        {
          text: "Offer to walk them home",
          nextSceneId: "walk_home",
          consequence: "Extend the moment"
        },
        {
          text: "Exchange numbers",
          nextSceneId: "exchange_numbers",
          consequence: "Stay in touch"
        }
      ]
    },
    walk_home: {
      id: "walk_home",
      content: "The walk home reveals shared interests and dreams. Alex mentions a poetry reading happening at the local bookstore this weekend.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      mood: "positive",
      choices: [
        {
          text: "Agree to attend together",
          nextSceneId: "poetry_reading",
          consequence: "A literary date awaits"
        },
        {
          text: "Suggest dinner instead",
          nextSceneId: "dinner_plan",
          consequence: "A more intimate setting"
        }
      ]
    },
    poetry_reading: {
      id: "poetry_reading",
      content: "The poetry reading is magical. Alex reads their own work, and their words seem to speak directly to your heart. After the reading, they suggest taking a walk in the nearby park.",
      image: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a",
      mood: "positive",
      choices: [
        {
          text: "Accept the invitation",
          nextSceneId: "park_walk",
          consequence: "Romance under the stars"
        },
        {
          text: "Suggest getting coffee",
          nextSceneId: "late_coffee",
          consequence: "Return to where it all began"
        }
      ]
    },
    park_walk: {
      id: "park_walk",
      content: "Under the starlit sky, Alex shares their dreams of traveling the world, writing stories from different cultures. They ask what your biggest dream is.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      mood: "positive",
      choices: [
        {
          text: "Share your passion",
          nextSceneId: "share_dreams",
          consequence: "Open your heart"
        },
        {
          text: "Keep it mysterious",
          nextSceneId: "mysterious",
          consequence: "Leave them wanting more"
        }
      ]
    },
    share_dreams: {
      id: "share_dreams",
      content: "Your shared dreams create a deeper connection. Alex reveals they've been offered a writing opportunity abroad and asks if you'd consider a long-distance relationship.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      mood: "neutral",
      choices: [
        {
          text: "Support their journey",
          nextSceneId: "support_journey",
          consequence: "Love knows no distance"
        },
        {
          text: "Suggest going together",
          nextSceneId: "travel_together",
          consequence: "Start a new adventure"
        }
      ]
    },
    support_journey: {
      id: "support_journey",
      content: "Months pass, filled with video calls, letters, and shared stories across continents. Alex's book is almost complete, inspired by your love story.",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
      mood: "positive",
      choices: [
        {
          text: "Plan a surprise visit",
          nextSceneId: "surprise_visit",
          consequence: "Actions speak louder than words"
        },
        {
          text: "Wait for their return",
          nextSceneId: "patient_waiting",
          consequence: "Good things come to those who wait"
        }
      ]
    },
    surprise_visit: {
      id: "surprise_visit",
      content: "You arrive at their international book reading, your presence bringing tears of joy to their eyes. Alex makes a life-changing proposal right there on stage.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      mood: "positive",
      choices: [
        {
          text: "Say yes",
          nextSceneId: "happy_ending",
          consequence: "Love conquers all"
        },
        {
          text: "Suggest writing the next chapter together",
          nextSceneId: "adventure_ending",
          consequence: "The story continues"
        }
      ]
    },
    happy_ending: {
      id: "happy_ending",
      content: "Your love story becomes the subject of Alex's next bestseller, proving that sometimes the most beautiful stories begin with a simple cup of coffee.",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
      mood: "positive",
      isEnding: true,
      choices: []
    },
    adventure_ending: {
      id: "adventure_ending",
      content: "Together, you embark on a world tour, collecting stories and creating your own. The Moonlight Café becomes a chain of literary cafes, where love stories bloom daily.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
