
import { StoryData } from "@/types/story";

export const MYSTERY_STORY: StoryData = {
  title: "The Detective's Last Case",
  author: "James Morrison",
  coverImage: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "A cryptic note arrives at your detective agency late one stormy night. The handwriting seems familiar, but the message is puzzling: 'The past never stays buried. Meet me where it all began.'",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "neutral",
      choices: [
        {
          text: "Analyze the handwriting",
          nextSceneId: "analyze",
          consequence: "The devil is in the details"
        },
        {
          text: "Visit the old precinct",
          nextSceneId: "precinct",
          consequence: "Return to your roots"
        },
        {
          text: "Call your former partner",
          nextSceneId: "partner",
          consequence: "Some bonds never break"
        }
      ]
    },
    analyze: {
      id: "analyze",
      content: "The handwriting analysis reveals a shocking truth - this case is connected to the unsolved murder that forced you into early retirement. Your hands begin to shake.",
      image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
      mood: "negative",
      choices: [
        {
          text: "Review the old case files",
          nextSceneId: "old_files",
          consequence: "Face your past"
        },
        {
          text: "Investigate new leads",
          nextSceneId: "new_leads",
          consequence: "Fresh perspective needed"
        }
      ]
    },
    old_files: {
      id: "old_files",
      content: "Hidden in the dusty files, you discover a crucial piece of evidence that was overlooked - a connection to a powerful political figure.",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "neutral",
      choices: [
        {
          text: "Confront the politician",
          nextSceneId: "confront",
          consequence: "Risk everything for truth"
        },
        {
          text: "Gather more evidence",
          nextSceneId: "evidence",
          consequence: "Build a solid case"
        }
      ]
    },
    evidence: {
      id: "evidence",
      content: "Your investigation leads to a hidden security camera footage from the night of the murder. But someone seems to be following you.",
      image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
      mood: "negative",
      choices: [
        {
          text: "Set up a trap",
          nextSceneId: "trap",
          consequence: "Turn hunter into prey"
        },
        {
          text: "Seek police protection",
          nextSceneId: "protection",
          consequence: "Safety in numbers"
        }
      ]
    },
    trap: {
      id: "trap",
      content: "Your trap works - you catch your follower, a private investigator hired by someone powerful. They offer to help expose the truth.",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "positive",
      choices: [
        {
          text: "Trust the PI",
          nextSceneId: "trust_pi",
          consequence: "Unlikely allies"
        },
        {
          text: "Use them as bait",
          nextSceneId: "use_bait",
          consequence: "All pieces have their purpose"
        }
      ]
    },
    trust_pi: {
      id: "trust_pi",
      content: "The PI reveals a conspiracy involving multiple high-ranking officials. You now hold evidence that could shake the city's foundation.",
      image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
      mood: "neutral",
      choices: [
        {
          text: "Go to the media",
          nextSceneId: "media",
          consequence: "Let the truth be known"
        },
        {
          text: "Build a legal case",
          nextSceneId: "legal",
          consequence: "Justice through proper channels"
        }
      ]
    },
    legal: {
      id: "legal",
      content: "As you prepare the case, you receive an unexpected visit from your old partner, who reveals they've been working undercover on the same case.",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "positive",
      choices: [
        {
          text: "Join forces",
          nextSceneId: "join_forces",
          consequence: "Together again"
        },
        {
          text: "Question their motives",
          nextSceneId: "question",
          consequence: "Trust no one"
        }
      ]
    },
    join_forces: {
      id: "join_forces",
      content: "Your combined evidence is overwhelming. The conspiracy begins to unravel, but the masterminds make one last desperate move.",
      image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
      mood: "negative",
      choices: [
        {
          text: "Face them head-on",
          nextSceneId: "confrontation",
          consequence: "The final showdown"
        },
        {
          text: "Set up a sting operation",
          nextSceneId: "sting",
          consequence: "Catch them all at once"
        }
      ]
    },
    confrontation: {
      id: "confrontation",
      content: "In a dramatic showdown, you finally expose the truth behind the decade-old murder and the corruption that followed. Justice is served.",
      image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
      mood: "positive",
      isEnding: true,
      choices: []
    },
    sting: {
      id: "sting",
      content: "The sting operation is a success. The entire corrupt network is exposed, and you find peace knowing that your last case brought justice to all the victims.",
      image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
      mood: "positive",
      isEnding: true,
      choices: []
    }
  }
};
