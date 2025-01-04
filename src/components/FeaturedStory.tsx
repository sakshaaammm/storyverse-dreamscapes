import { Card } from "@/components/ui/card";
import { BookOpen, Star } from "lucide-react";

interface FeaturedStoryProps {
  title: string;
  author: string;
  description: string;
  coverImage: string;
  onClick: () => void;
}

export const FeaturedStory = ({
  title,
  author,
  description,
  coverImage,
  onClick,
}: FeaturedStoryProps) => {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-[3/2] md:w-2/3">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="mb-2 flex items-center">
              <Star className="mr-2 h-5 w-5 fill-current" />
              <span className="text-sm font-medium">Featured Story</span>
            </div>
            <h2 className="mb-2 text-3xl font-bold">{title}</h2>
            <p className="mb-4 text-lg">by {author}</p>
            <button
              onClick={onClick}
              className="flex items-center rounded-full bg-story-primary px-6 py-2 text-white transition-colors hover:bg-story-primary/90"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading
            </button>
          </div>
        </div>
        <div className="p-6 md:w-1/3">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
};