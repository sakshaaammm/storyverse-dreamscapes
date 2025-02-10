
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
    <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 bg-gradient-to-br from-[#1A1F2C] to-[#000000e6]">
      {scene.image && (
        <div className="relative aspect-video">
          <img
            src={scene.image}
            alt="Scene illustration"
            className="h-full w-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F2C]/60 to-[#000000e6]" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold text-[#9b87f5] drop-shadow-lg transform hover:scale-105 transition-transform">{storyTitle}</h1>
            <p className="mt-2 text-lg text-[#7E69AB]">by {storyAuthor}</p>
          </div>
        </div>
      )}

      <div className="p-6 bg-gradient-to-b from-[#1A1F2C] to-[#000000e6]">
        <div
          className={`mb-8 text-lg ${
            scene.mood === "positive"
              ? "text-[#9b87f5]"
              : scene.mood === "negative"
              ? "text-red-400"
              : "text-[#7E69AB]"
          } animate-fade-in`}
        >
          {scene.content}
        </div>

        {!scene.isEnding && (
          <div className="space-y-4">
            {scene.choices.map((choice: Choice, index: number) => (
              <Button
                key={index}
                onClick={() => onChoice(choice.nextSceneId, choice.consequence)}
                className="w-full justify-start bg-[#1A1F2C] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/50"
                variant="outline"
              >
                {choice.text}
              </Button>
            ))}
          </div>
        )}

        {scene.isEnding && (
          <div className="text-center animate-fade-in">
            <p className="mb-4 text-xl font-semibold text-[#9b87f5]">The End</p>
            <Button 
              onClick={onClose} 
              variant="default"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/50"
            >
              Read Another Story
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
