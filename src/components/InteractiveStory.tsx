import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { StoryHeader } from "./story/StoryHeader";
import { StoryScene } from "./story/StoryScene";
import { StoryData } from "@/types/story";
import { motion, AnimatePresence } from "framer-motion";
import { FANTASY_STORY, SCIFI_STORY, ROMANCE_STORY, MYSTERY_STORY } from "@/data/stories";

interface InteractiveStoryProps {
  storyId: number;
  onClose: () => void;
}

export const InteractiveStory = ({ storyId, onClose }: InteractiveStoryProps) => {
  const getStoryData = (id: number): StoryData => {
    // Each ID should map to its own unique story
    switch (id) {
      case 11: // The Last Algorithm (Featured Story)
        return {
          ...SCIFI_STORY,
          title: "The Last Algorithm",
          author: "Ada Chen",
          scenes: {
            ...SCIFI_STORY.scenes,
            start: {
              ...SCIFI_STORY.scenes.start,
              image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
            }
          }
        };
      case 10: // Silent Witness
        return {
          ...MYSTERY_STORY,
          title: "Silent Witness",
          author: "Rachel Chen",
          scenes: {
            start: {
              id: "start",
              content: "A cryptic note arrives at your detective agency late one stormy night. The handwriting seems familiar, but the message is puzzling: 'The past never stays buried. Meet me where it all began.'",
              image: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
              mood: "neutral",
              choices: [
                { text: "Analyze the handwriting", nextSceneId: "analyze", consequence: "The devil is in the details" },
                { text: "Visit the old precinct", nextSceneId: "old_files", consequence: "Return to your roots" }
              ]
            },
            analyze: {
              id: "analyze",
              content: "The handwriting analysis reveals a shocking truth - this case is connected to the unsolved murder that forced you into early retirement. Your hands begin to shake.",
              image: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
              mood: "negative",
              choices: [
                { text: "Review the old case files", nextSceneId: "old_files", consequence: "Face your past" },
                { text: "Investigate new leads", nextSceneId: "evidence", consequence: "Fresh perspective needed" }
              ]
            },
            old_files: {
              id: "old_files",
              content: "Hidden in the dusty files, you discover a crucial piece of evidence that was overlooked - a connection to a powerful political figure.",
              image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
              mood: "neutral",
              choices: [
                { text: "Gather more evidence", nextSceneId: "evidence", consequence: "Build a solid case" },
                { text: "Set up a trap", nextSceneId: "trap", consequence: "Turn hunter into prey" }
              ]
            },
            evidence: {
              id: "evidence",
              content: "Your investigation leads to a hidden security camera footage from the night of the murder. But someone seems to be following you.",
              image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
              mood: "negative",
              choices: [
                { text: "Set up a trap", nextSceneId: "trap", consequence: "Turn hunter into prey" },
                { text: "Seek protection", nextSceneId: "ending", consequence: "Safety first" }
              ]
            },
            trap: {
              id: "trap",
              content: "Your trap works perfectly - catching not just a follower, but uncovering a whole conspiracy. The truth about the cold case is finally revealed.",
              image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
              mood: "positive",
              choices: [
                { text: "Conclude the case", nextSceneId: "ending", consequence: "Justice is served" }
              ]
            },
            ending: {
              id: "ending",
              content: "With the evidence secured and the conspiracy exposed, you've not only solved the cold case but also cleared your name. Your reputation is restored, and justice is finally served.",
              image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
              mood: "positive",
              isEnding: true,
              choices: []
            }
          }
        };
      case 1:
        return {
          ...FANTASY_STORY,
          title: "Dragon's Dawn",
          author: "Richard Storm"
        };
      case 2:
        return {
          ...FANTASY_STORY,
          title: "The Crystal Kingdom",
          author: "Elena Rivers"
        };
      case 3:
        return {
          ...FANTASY_STORY,
          title: "Whispers in the Wind",
          author: "Marcus Blake"
        };
      case 4:
        return {
          ...SCIFI_STORY,
          title: "Neural Network",
          author: "Alex Chen"
        };
      case 5:
        return {
          ...SCIFI_STORY,
          title: "Quantum Dreams",
          author: "Maya Patel"
        };
      case 6:
        return {
          ...SCIFI_STORY,
          title: "Digital Horizon",
          author: "Sarah Kim"
        };
      case 7:
        return {
          ...ROMANCE_STORY,
          title: "Midnight in Paris",
          author: "Sophie Martin"
        };
      case 8:
        return {
          ...ROMANCE_STORY,
          title: "Love in Venice",
          author: "Isabella Romano"
        };
      case 9:
        return {
          ...MYSTERY_STORY,
          title: "The Detective's Last Case",
          author: "James Morrison"
        };
      default:
        console.error("Unknown story ID:", id);
        return FANTASY_STORY;
    }
  };

  const storyData = getStoryData(storyId);
  console.log("Story ID:", storyId);
  console.log("Story Title:", storyData.title);
  console.log("Initial Scene:", storyData.initialScene);
  
  const [currentScene, setCurrentScene] = useState(() => {
    const scene = storyData.scenes[storyData.initialScene];
    console.log("Initial scene data:", scene);
    return scene;
  });
  
  const [progress, setProgress] = useState(0);
  const [choiceHistory, setChoiceHistory] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const totalScenes = Object.keys(storyData.scenes).length;
    const progressValue = (choiceHistory.length / (totalScenes - 1)) * 100;
    setProgress(Math.min(progressValue, 100));
  }, [choiceHistory, storyData.scenes]);

  const handleChoice = (nextSceneId: string, consequence?: string) => {
    console.log("Handling choice:", nextSceneId);
    const nextScene = storyData.scenes[nextSceneId];
    
    if (!nextScene) {
      console.error("Scene not found:", nextSceneId);
      return;
    }
    
    setCurrentScene(nextScene);
    setChoiceHistory((prev) => [...prev, nextSceneId]);

    if (consequence) {
      toast({
        title: "Choice Made",
        description: consequence,
        duration: 3000,
      });
    }
  };

  if (!currentScene) {
    console.error("No current scene available");
    return (
      <div className="p-4 text-center">
        <p>Error loading story. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-story-background to-story-secondary/20 p-4">
      <motion.div 
        className="mx-auto max-w-3xl"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <StoryHeader onClose={onClose} progress={progress} />
        <StoryScene
          scene={currentScene}
          storyTitle={storyData.title}
          storyAuthor={storyData.author}
          onChoice={handleChoice}
          onClose={onClose}
        />
      </motion.div>
    </div>
  );
};
