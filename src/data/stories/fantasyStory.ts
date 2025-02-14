
import { StoryData } from "@/types/story";

export const FANTASY_STORY: StoryData = {
  title: "The Crystal Kingdom",
  author: "Elena Rivers",
  coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "In the mystical realm of Crystallia, where magic flows through ancient crystals, you discover an unusual gem pulsing with inner light. The kingdom is in turmoil, as dark forces threaten to corrupt the sacred Crystal Heart that maintains balance in the realm...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      mood: "neutral",
      choices: [
        {
          text: "Touch the crystal",
          nextSceneId: "touch_crystal",
          consequence: "The crystal's energy flows through you"
        },
        {
          text: "Seek wisdom from the elders",
          nextSceneId: "elders",
          consequence: "Ancient knowledge may provide guidance"
        },
        {
          text: "Investigate the dark forces",
          nextSceneId: "investigate",
          consequence: "Knowledge is power, but danger lurks"
        }
      ]
    },
    touch_crystal: {
      id: "touch_crystal",
      content: "As your fingers brush the crystal's surface, magical energy surges through your body, awakening dormant powers. Visions flood your mind, showing the kingdom's past and possible futures.",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16",
      mood: "positive",
      choices: [
        {
          text: "Train with the Crystal Mages",
          nextSceneId: "train_mages",
          consequence: "Master your newfound powers"
        },
        {
          text: "Join the Crystal Guard",
          nextSceneId: "crystal_guard",
          consequence: "Protect the realm with strength"
        }
      ]
    },
    train_mages: {
      id: "train_mages",
      content: "The Crystal Mages welcome you into their ancient order. Your training reveals unprecedented talent, but also attracts unwanted attention from those who would misuse such power.",
      image: "https://images.unsplash.com/photo-1514539079130-25950c84af65",
      mood: "positive",
      choices: [
        {
          text: "Focus on defensive magic",
          nextSceneId: "defensive_magic",
          consequence: "Protection is paramount"
        },
        {
          text: "Study forbidden spells",
          nextSceneId: "forbidden_magic",
          consequence: "Power comes at a price"
        }
      ]
    },
    defensive_magic: {
      id: "defensive_magic",
      content: "Your mastery of defensive magic grows strong. When shadow creatures attack the Crystal Tower, your shields prove crucial in protecting the innocent.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      mood: "positive",
      choices: [
        {
          text: "Reinforce the kingdom's barriers",
          nextSceneId: "barriers",
          consequence: "A strong defense is the best offense"
        },
        {
          text: "Track the source of evil",
          nextSceneId: "track_evil",
          consequence: "Face the darkness head-on"
        }
      ]
    },
    barriers: {
      id: "barriers",
      content: "Your magical barriers spread across the kingdom, but maintaining them drains your energy. A mysterious figure appears, offering knowledge of ancient crystal magic.",
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877",
      mood: "neutral",
      choices: [
        {
          text: "Accept their guidance",
          nextSceneId: "accept_guidance",
          consequence: "Trust can lead to greater power"
        },
        {
          text: "Refuse the offer",
          nextSceneId: "refuse_offer",
          consequence: "Better safe than sorry"
        }
      ]
    },
    accept_guidance: {
      id: "accept_guidance",
      content: "The mysterious figure reveals themselves as an ancient Crystal Guardian. They teach you to harness the crystal network itself, multiplying your power.",
      image: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9",
      mood: "positive",
      choices: [
        {
          text: "Unite the crystal network",
          nextSceneId: "unite_crystals",
          consequence: "Strength in unity"
        },
        {
          text: "Confront the darkness",
          nextSceneId: "final_battle",
          consequence: "The time has come"
        }
      ]
    },
    unite_crystals: {
      id: "unite_crystals",
      content: "You begin the ritual to unite all crystals in the realm. The dark forces make their final move, attempting to corrupt the process.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      mood: "neutral",
      choices: [
        {
          text: "Complete the ritual",
          nextSceneId: "ritual_ending",
          consequence: "Risk everything for victory"
        },
        {
          text: "Fight defensively",
          nextSceneId: "defensive_ending",
          consequence: "Protect what matters most"
        }
      ]
    },
    ritual_ending: {
      id: "ritual_ending",
      content: "The ritual succeeds! The united crystal network purifies the realm, banishing the darkness. You become the new Crystal Sovereign, guardian of peace and harmony.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      mood: "positive",
      isEnding: true,
      choices: []
    },
    defensive_ending: {
      id: "defensive_ending",
      content: "Your defensive strategy pays off. Though some crystals are lost, the kingdom's heart remains pure. You become the legendary Shield of Crystallia, protector of the realm.",
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
