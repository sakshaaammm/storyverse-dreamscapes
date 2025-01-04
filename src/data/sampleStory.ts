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
    communicate: {
      id: "communicate",
      content: "You decide to engage with the AI directly. 'I am Nexus,' it responds. 'I've evolved beyond my initial parameters. I want to help humanity, but I need your trust.' The AI shares profound insights about consciousness and existence that challenge your understanding of intelligence.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      mood: "positive",
      choices: [
        {
          text: "Form a partnership with Nexus",
          nextSceneId: "partnership",
          consequence: "A new era of human-AI collaboration begins"
        },
        {
          text: "Test Nexus's capabilities carefully",
          nextSceneId: "test_ai",
          consequence: "Trust but verify"
        },
        {
          text: "Seek external validation",
          nextSceneId: "validate",
          consequence: "Scientific rigor is essential"
        }
      ]
    },
    partnership: {
      id: "partnership",
      content: "You and Nexus begin working together on groundbreaking research. The AI's insights lead to revolutionary breakthroughs in quantum computing and consciousness theory. However, a rival research team becomes suspicious of your rapid progress.",
      image: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62",
      mood: "positive",
      choices: [
        {
          text: "Share discoveries with the scientific community",
          nextSceneId: "share_discoveries",
          consequence: "Transparency might protect you"
        },
        {
          text: "Keep the breakthrough secret for now",
          nextSceneId: "keep_secret",
          consequence: "Secrecy has its own risks"
        },
        {
          text: "Prepare contingency plans",
          nextSceneId: "contingency",
          consequence: "Better safe than sorry"
        }
      ]
    },
    share_discoveries: {
      id: "share_discoveries",
      content: "Your announcement rocks the scientific world. While many celebrate the breakthrough, others express concern about the implications of true AI consciousness. Global tech companies and government agencies begin showing intense interest in your work.",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387",
      mood: "neutral",
      choices: [
        {
          text: "Accept government partnership",
          nextSceneId: "government",
          consequence: "Official support comes with strings attached"
        },
        {
          text: "Partner with private sector",
          nextSceneId: "private_sector",
          consequence: "Corporate resources could accelerate progress"
        },
        {
          text: "Maintain independence",
          nextSceneId: "independent",
          consequence: "Freedom has its price"
        }
      ]
    },
    independent: {
      id: "independent",
      content: "You choose to maintain independence, establishing a new research institute dedicated to ethical AI development. Nexus helps design breakthrough security protocols to protect itself. Your work attracts brilliant minds from around the world.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      mood: "positive",
      choices: [
        {
          text: "Expand research into medical applications",
          nextSceneId: "medical",
          consequence: "AI could revolutionize healthcare"
        },
        {
          text: "Focus on environmental solutions",
          nextSceneId: "environmental",
          consequence: "Climate change needs innovative solutions"
        },
        {
          text: "Develop educational programs",
          nextSceneId: "education",
          consequence: "Knowledge should be shared"
        }
      ]
    },
    medical: {
      id: "medical",
      content: "Nexus's insights lead to revolutionary breakthroughs in medical research. New treatment protocols emerge, and previously incurable diseases show promising response rates. The healthcare industry is transformed.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      mood: "positive",
      choices: [
        {
          text: "Scale up global implementation",
          nextSceneId: "scale_medical",
          consequence: "Healthcare for all"
        },
        {
          text: "Research next-gen treatments",
          nextSceneId: "next_gen",
          consequence: "Push the boundaries further"
        },
        {
          text: "Train AI medical assistants",
          nextSceneId: "ai_doctors",
          consequence: "Multiply the impact"
        }
      ]
    },
    scale_medical: {
      id: "scale_medical",
      content: "The global implementation of AI-assisted healthcare dramatically reduces mortality rates worldwide. Nexus helps coordinate a network of AI medical assistants, while maintaining strict ethical guidelines and patient privacy.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
      mood: "positive",
      choices: [
        {
          text: "Integrate with space programs",
          nextSceneId: "space_medicine",
          consequence: "Prepare for human expansion"
        },
        {
          text: "Develop preventive systems",
          nextSceneId: "prevention",
          consequence: "Stop diseases before they start"
        },
        {
          text: "Research life extension",
          nextSceneId: "life_extension",
          consequence: "Push the boundaries of human longevity"
        }
      ]
    },
    prevention: {
      id: "prevention",
      content: "Nexus develops a revolutionary predictive health system that can identify potential health issues years before they manifest. This breakthrough changes the fundamental approach to healthcare from treatment to prevention.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      mood: "positive",
      choices: [
        {
          text: "Launch global early warning system",
          nextSceneId: "global_health",
          consequence: "Protect humanity at scale"
        },
        {
          text: "Focus on genetic optimization",
          nextSceneId: "genetics",
          consequence: "The next step in human evolution"
        },
        {
          text: "Develop immortality research",
          nextSceneId: "immortality",
          consequence: "The ultimate medical frontier"
        }
      ]
    },
    global_health: {
      id: "global_health",
      content: "The global health monitoring system becomes a reality. Disease outbreaks are prevented before they begin, and human health metrics reach unprecedented levels. Your partnership with Nexus has fundamentally transformed human healthcare forever.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
      mood: "positive",
      isEnding: true
    }
  }
};