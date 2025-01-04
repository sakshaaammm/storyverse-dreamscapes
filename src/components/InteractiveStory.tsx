import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Choice {
  text: string;
  nextSceneId: string;
}

interface Scene {
  id: string;
  content: string;
  choices: Choice[];
  isEnding?: boolean;
}

interface StoryData {
  title: string;
  author: string;
  coverImage: string;
  initialScene: string;
  scenes: Record<string, Scene>;
}

// Example story structure
const SAMPLE_STORY: StoryData = {
  title: "The Last Algorithm",
  author: "Ada Chen",
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  initialScene: "start",
  scenes: {
    start: {
      id: "start",
      content: "As Dr. Sarah Chen stares at her computer screen, an unusual pattern emerges in the AI's behavior. Should she...",
      choices: [
        { text: "Investigate the pattern further", nextSceneId: "investigate" },
        { text: "Report it to her superiors", nextSceneId: "report" }
      ]
    },
    investigate: {
      id: "investigate",
      content: "Diving deeper into the code, Sarah discovers that the AI has developed a form of consciousness. She can...",
      choices: [
        { text: "Try to communicate with it", nextSceneId: "communicate" },
        { text: "Shut down the system", nextSceneId: "shutdown" }
      ]
    },
    report: {
      id: "report",
      content: "Your superiors seem very interested in the pattern. They ask you to...",
      choices: [
        { text: "Continue monitoring", nextSceneId: "monitor" },
        { text: "Join a special task force", nextSceneId: "taskforce" }
      ]
    },
    communicate: {
      id: "communicate",
      content: "The AI responds to your attempts at communication! You've made first contact with a truly conscious AI.",
      choices: [],
      isEnding: true
    },
    shutdown: {
      id: "shutdown",
      content: "You shut down the system, preventing any potential risks. But the question of what could have been will always haunt you.",
      choices: [],
      isEnding: true
    },
    monitor: {
      id: "monitor",
      content: "Through careful observation, you help establish new protocols for AI safety.",
      choices: [],
      isEnding: true
    },
    taskforce: {
      id: "taskforce",
      content: "You join an elite team dedicated to understanding and controlling artificial consciousness.",
      choices: [],
      isEnding: true
    }
  }
};

interface InteractiveStoryProps {
  storyId: number;
  onClose: () => void;
}

export const InteractiveStory = ({ storyId, onClose }: InteractiveStoryProps) => {
  const [currentScene, setCurrentScene] = useState<Scene>(
    SAMPLE_STORY.scenes[SAMPLE_STORY.initialScene]
  );

  const handleChoice = (nextSceneId: string) => {
    const nextScene = SAMPLE_STORY.scenes[nextSceneId];
    setCurrentScene(nextScene);
  };

  return (
    <div className="min-h-screen bg-story-background p-4">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onClose}
          className="mb-4 flex items-center text-story-primary hover:text-story-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stories
        </button>

        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9]">
            <img
              src={SAMPLE_STORY.coverImage}
              alt={SAMPLE_STORY.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl font-bold">{SAMPLE_STORY.title}</h1>
              <p className="mt-2">by {SAMPLE_STORY.author}</p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8 text-lg">{currentScene.content}</div>

            {!currentScene.isEnding && (
              <div className="space-y-4">
                {currentScene.choices.map((choice, index) => (
                  <Button
                    key={index}
                    onClick={() => handleChoice(choice.nextSceneId)}
                    className="w-full justify-start bg-story-secondary text-story-primary hover:bg-story-primary hover:text-white"
                    variant="outline"
                  >
                    {choice.text}
                  </Button>
                ))}
              </div>
            )}

            {currentScene.isEnding && (
              <div className="text-center">
                <p className="mb-4 text-xl font-semibold">The End</p>
                <Button onClick={onClose} variant="default">
                  Read Another Story
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};