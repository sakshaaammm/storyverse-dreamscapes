
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
    switch (id) {
      case 1:
      case 2:
      case 3:
        return FANTASY_STORY;
      case 4:
      case 5:
      case 6:
        return SCIFI_STORY;
      case 7:
      case 8:
        return ROMANCE_STORY;
      case 9:
      case 10:
        return MYSTERY_STORY;
      default:
        return SCIFI_STORY;
    }
  };

  const storyData = getStoryData(storyId);
  console.log("Story ID:", storyId);
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
