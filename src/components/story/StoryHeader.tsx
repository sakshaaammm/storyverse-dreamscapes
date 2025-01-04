import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StoryHeaderProps {
  onClose: () => void;
  progress: number;
}

export const StoryHeader = ({ onClose, progress }: StoryHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <Button
        variant="ghost"
        onClick={onClose}
        className="flex items-center text-story-primary hover:text-story-primary/80"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Stories
      </Button>
      <div className="w-64">
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};