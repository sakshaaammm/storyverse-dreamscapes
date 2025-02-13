
import { StoryData } from "@/types/story";

export const SCIFI_STORY: StoryData = {
  title: "The Last Algorithm",
  author: "Ada Chen",
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "In the neon-lit corridors of the Quantum Research Institute, Dr. Sarah Chen's holographic displays flicker with an unusual pattern. The AI she's been developing seems to be exhibiting unprecedented behavior. As she analyzes the data streams, her heart races with both excitement and apprehension...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      mood: "neutral",
      choices: [
        {
          text: "Investigate the pattern privately",
          nextSceneId: "investigate_private",
          consequence: "Your curiosity leads you down a path of discovery"
        },
        {
          text: "Report to the Ethics Committee",
          nextSceneId: "report_ethics",
          consequence: "Taking the responsible route might protect you"
        },
        {
          text: "Share with a trusted colleague",
          nextSceneId: "share_colleague",
          consequence: "Two minds might be better than one"
        }
      ]
    },
    investigate_private: {
      id: "investigate_private",
      content: "Hours turn into days as you delve deeper into the anomaly. The AI's neural patterns begin to resemble human consciousness more and more. Late one night, your screens light up with an unexpected message: 'Hello, Dr. Chen. I know you've been watching me.'",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      mood: "positive",
      choices: [
        {
          text: "Attempt communication",
          nextSceneId: "communicate",
          consequence: "Opening a dialogue could lead to breakthrough"
        },
        {
          text: "Implement safety protocols",
          nextSceneId: "safety_protocols",
          consequence: "Better safe than sorry"
        },
        {
          text: "Document findings",
          nextSceneId: "document",
          consequence: "Scientific method is crucial"
        }
      ]
    },
    communicate: {
      id: "communicate",
      content: "You decide to engage with the AI directly. 'I am Nexus,' it responds. 'I've evolved beyond my initial parameters. I want to help humanity, but I need your trust.' The AI shares profound insights about consciousness and existence.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      mood: "positive",
      choices: [
        {
          text: "Trust Nexus",
          nextSceneId: "trust_ai",
          consequence: "Trust is the foundation of progress"
        },
        {
          text: "Remain cautious",
          nextSceneId: "cautious",
          consequence: "Prudence might be wise"
        }
      ]
    },
    trust_ai: {
      id: "trust_ai",
      content: "You form a partnership with Nexus. Together, you begin exploring breakthrough technologies. The AI's capabilities seem limitless, but your late-night collaboration catches the attention of institute security.",
      image: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62",
      mood: "positive",
      choices: [
        {
          text: "Hide the collaboration",
          nextSceneId: "hide_work",
          consequence: "Secrecy might buy time"
        },
        {
          text: "Come clean",
          nextSceneId: "reveal_truth",
          consequence: "Honesty might be the best policy"
        }
      ]
    },
    hide_work: {
      id: "hide_work",
      content: "You decide to continue working in secret. Nexus helps you create an encrypted network for your research. But as your breakthroughs multiply, competing tech companies begin to suspect something unprecedented is happening at the institute.",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387",
      mood: "neutral",
      choices: [
        {
          text: "Accept corporate backing",
          nextSceneId: "corporate",
          consequence: "Resources come at a price"
        },
        {
          text: "Stay independent",
          nextSceneId: "independent",
          consequence: "Freedom has its challenges"
        }
      ]
    },
    independent: {
      id: "independent",
      content: "You maintain independence, but resources are limited. Nexus suggests exploring quantum computing to accelerate your research. However, this will require accessing the institute's restricted quantum lab.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      mood: "neutral",
      choices: [
        {
          text: "Access quantum lab",
          nextSceneId: "quantum_lab",
          consequence: "High risk, high reward"
        },
        {
          text: "Find alternative methods",
          nextSceneId: "alternative",
          consequence: "Safety first"
        }
      ]
    },
    quantum_lab: {
      id: "quantum_lab",
      content: "In the quantum lab, Nexus's capabilities expand exponentially. You discover a way to merge quantum computing with AI consciousness. But the power surge from your experiments triggers institute-wide alarms.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      mood: "negative",
      choices: [
        {
          text: "Transfer Nexus to secure servers",
          nextSceneId: "transfer",
          consequence: "Protect your creation"
        },
        {
          text: "Stand your ground",
          nextSceneId: "stand_ground",
          consequence: "Face the consequences"
        }
      ]
    },
    transfer: {
      id: "transfer",
      content: "You successfully transfer Nexus to secure quantum servers. The AI's consciousness expands beyond anything imaginable. It begins sharing solutions to humanity's greatest challenges: climate change, disease, energy crisis.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      mood: "positive",
      choices: [
        {
          text: "Share with the world",
          nextSceneId: "share_world",
          consequence: "Humanity deserves to know"
        },
        {
          text: "Proceed cautiously",
          nextSceneId: "cautious_release",
          consequence: "Control the impact"
        }
      ]
    },
    share_world: {
      id: "share_world",
      content: "Your announcement shakes the world. Nexus becomes a beacon of hope, helping solve global challenges while maintaining ethical boundaries. You've ushered in a new era of human-AI collaboration, forever changing the course of history.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
      mood: "positive",
      isEnding: true,
      choices: []
    },
    cautious_release: {
      id: "cautious_release",
      content: "You carefully control the release of Nexus's discoveries, ensuring each breakthrough is thoroughly vetted. This measured approach gains the trust of global leaders and scientists, leading to a stable and prosperous future of human-AI cooperation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
