
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { StoryHeader } from "./story/StoryHeader";
import { StoryScene } from "./story/StoryScene";
import { StoryData } from "@/types/story";
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
          author: "Ada Chen"
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
      case 10:
        return {
          ...MYSTERY_STORY,
          title: "Silent Witness",
          author: "Rachel Chen"
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
      <div className="mx-auto max-w-3xl">
        <StoryHeader onClose={onClose} progress={progress} />
        <StoryScene
          scene={currentScene}
          storyTitle={storyData.title}
          storyAuthor={storyData.author}
          onChoice={handleChoice}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
