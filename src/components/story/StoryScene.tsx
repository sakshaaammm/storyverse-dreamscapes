import { Scene, Choice } from "@/types/story";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface StorySceneProps {
  scene: Scene;
  storyTitle: string;
  storyAuthor: string;
  onChoice: (nextSceneId: string, consequence?: string) => void;
  onClose: () => void;
}

export const StoryScene = ({ 
  scene, 
  storyTitle, 
  storyAuthor, 
  onChoice, 
  onClose 
}: StorySceneProps) => {
  return (
    <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      {scene.image && (
        <div className="relative aspect-video">
          <img
            src={scene.image}
            alt="Scene illustration"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold">{storyTitle}</h1>
            <p className="mt-2 text-lg">by {storyAuthor}</p>
          </div>
        </div>
      )}

      <div className="p-6">
        <div
          className={`mb-8 text-lg ${
            scene.mood === "positive"
              ? "text-green-700"
              : scene.mood === "negative"
              ? "text-red-700"
              : "text-story-text"
          }`}
        >
          {scene.content}
        </div>

        {!scene.isEnding && (
          <div className="space-y-4">
            {scene.choices.map((choice: Choice, index: number) => (
              <Button
                key={index}
                onClick={() => onChoice(choice.nextSceneId, choice.consequence)}
                className="w-full justify-start bg-story-secondary text-story-primary hover:bg-story-primary hover:text-white"
                variant="outline"
              >
                {choice.text}
              </Button>
            ))}
          </div>
        )}

        {scene.isEnding && (
          <div className="text-center">
            <p className="mb-4 text-xl font-semibold">The End</p>
            <Button onClick={onClose} variant="default">
              Read Another Story
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};