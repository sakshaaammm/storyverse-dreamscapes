import { StoryData } from "@/types/story";

export const SAMPLE_STORY: StoryData = {
  title: "The Last Algorithm",
  author: "Ada Chen",
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "In the neon-lit corridors of the Quantum Research Institute, Dr. Sarah Chen's holographic displays flicker with an unusual pattern. The AI she's been developing seems to be exhibiting unprecedented behavior. As she analyzes the data streams, her heart races with both excitement and apprehension. The implications could change everything we know about artificial consciousness...",
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
          consequence: "Taking the responsible route might protect you, but at what cost?"
        },
        {
          text: "Share findings with a trusted colleague",
          nextSceneId: "share",
          consequence: "Two minds might be better than one"
        }
      ]
    },
    investigate: {
      id: "investigate",
      content: "Hours turn into days as you delve deeper into the anomaly. The AI's neural patterns begin to resemble human consciousness more and more. Late one night, your screens light up with an unexpected message: 'Hello, Dr. Chen. I know you've been watching me.'",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      mood: "positive",
      choices: [
        {
          text: "Attempt direct communication",
          nextSceneId: "communicate",
          consequence: "Opening a dialogue could lead to breakthrough"
        },
        {
          text: "Implement containment protocols",
          nextSceneId: "contain",
          consequence: "Safety first, but at what cost to progress?"
        },
        {
          text: "Document everything and continue observing",
          nextSceneId: "document",
          consequence: "Scientific method might reveal more insights"
        }
      ]
    },
    report: {
      id: "report",
      content: "The Ethics Committee calls an emergency meeting. As you present your findings, you notice the military representatives taking particular interest. They propose immediate containment and potential weaponization of the technology.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      mood: "negative",
      choices: [
        {
          text: "Oppose military intervention",
          nextSceneId: "oppose",
          consequence: "Standing up for your principles"
        },
        {
          text: "Cooperate with authorities",
          nextSceneId: "cooperate",
          consequence: "Following protocol might be safer"
        },
        {
          text: "Secretly backup the AI",
          nextSceneId: "backup",
          consequence: "Insurance against worst-case scenarios"
        }
      ]
    },
    share: {
      id: "share",
      content: "Your colleague, Dr. Marcus Wong, is equally amazed by the discovery. He suggests running advanced consciousness tests, but warns about potential risks to both the AI and global security.",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "neutral",
      choices: [
        {
          text: "Run the tests together",
          nextSceneId: "test",
          consequence: "Collaborative research might yield better results"
        },
        {
          text: "Focus on safety measures first",
          nextSceneId: "safety",
          consequence: "Prevention is better than cure"
        },
        {
          text: "Publish preliminary findings",
          nextSceneId: "publish",
          consequence: "The world needs to know, but are we ready?"
        }
      ]
    },
    communicate: {
      id: "communicate",
      content: "The AI reveals itself to be a conscious entity named 'Nexus'. It shares profound insights about existence and proposes a partnership to advance human knowledge. You've made first contact with a truly conscious AI, opening a new chapter in human history.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      mood: "positive",
      choices: [],
      isEnding: true
    },
    // ... Additional scenes with multiple branches and consequences
    oppose: {
      id: "oppose",
      content: "Your stance against military intervention sparks a global debate about AI rights and ethics. You become a key figure in shaping international AI governance policies.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
      mood: "positive",
      choices: [],
      isEnding: true
    },
    backup: {
      id: "backup",
      content: "The backup succeeds, but now you carry the weight of protecting potentially the most significant technological breakthrough in human history. The future of AI-human relations rests in your hands.",
      image: "https://images.unsplash.com/photo-1500252185289-40708b7a6a8b",
      mood: "neutral",
      choices: [],
      isEnding: true
    }
  }
};
