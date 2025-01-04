import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { StoryHeader } from "./story/StoryHeader";
import { StoryScene } from "./story/StoryScene";
import { StoryData } from "@/types/story";
import { SAMPLE_STORY } from "@/data/sampleStory";

interface InteractiveStoryProps {
  storyId: number;
  onClose: () => void;
}

export const InteractiveStory = ({ storyId, onClose }: InteractiveStoryProps) => {
  console.log("Story ID:", storyId);
  console.log("Initial Scene:", SAMPLE_STORY.initialScene);
  
  const [currentScene, setCurrentScene] = useState(() => {
    const scene = SAMPLE_STORY.scenes[SAMPLE_STORY.initialScene];
    console.log("Initial scene data:", scene);
    return scene;
  });
  
  const [progress, setProgress] = useState(0);
  const [choiceHistory, setChoiceHistory] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const totalScenes = Object.keys(SAMPLE_STORY.scenes).length;
    const progressValue = (choiceHistory.length / (totalScenes - 1)) * 100;
    setProgress(Math.min(progressValue, 100));
  }, [choiceHistory]);

  const handleChoice = (nextSceneId: string, consequence?: string) => {
    console.log("Handling choice:", nextSceneId);
    const nextScene = SAMPLE_STORY.scenes[nextSceneId];
    
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
          storyTitle={SAMPLE_STORY.title}
          storyAuthor={SAMPLE_STORY.author}
          onChoice={handleChoice}
          onClose={onClose}
        />
      </div>
    </div>
  );
};