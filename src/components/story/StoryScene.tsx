
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
    <Card className="overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(155,135,245,0.3)] transform hover:scale-105 bg-gradient-to-br from-black via-[#2A1F3C] to-[#1A1F2C]">
      {scene.image && (
        <div className="relative aspect-video">
          <img
            src={scene.image}
            alt="Scene illustration"
            className="h-full w-full object-cover animate-fade-in transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-[#1A1F2C] backdrop-blur-sm" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold text-[#9b87f5] drop-shadow-[0_2px_4px_rgba(155,135,245,0.5)] transform hover:scale-105 transition-transform duration-300">{storyTitle}</h1>
            <p className="mt-2 text-lg text-[#7E69AB] drop-shadow-lg">{storyAuthor}</p>
          </div>
        </div>
      )}

      <div className="p-6 bg-gradient-to-b from-black via-[#2A1F3C]/90 to-[#1A1F2C]">
        <div
          className={`mb-8 text-lg ${
            scene.mood === "positive"
              ? "text-[#9b87f5]"
              : scene.mood === "negative"
              ? "text-red-400"
              : "text-[#7E69AB]"
          } animate-fade-in drop-shadow-lg`}
        >
          {scene.content}
        </div>

        {!scene.isEnding && (
          <div className="space-y-4 animate-fade-in">
            {scene.choices.map((choice: Choice, index: number) => (
              <Button
                key={index}
                onClick={() => onChoice(choice.nextSceneId, choice.consequence)}
                className="w-full justify-start bg-black/80 text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/50 border border-[#9b87f5]/20"
                variant="outline"
              >
                {choice.text}
              </Button>
            ))}
          </div>
        )}

        {scene.isEnding && (
          <div className="text-center animate-fade-in">
            <p className="mb-4 text-xl font-semibold text-[#9b87f5] drop-shadow-lg">The End</p>
            <Button 
              onClick={onClose} 
              variant="default"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/50 border border-[#9b87f5]/20"
            >
              Read Another Story
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

