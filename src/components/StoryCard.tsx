import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface StoryCardProps {
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genre: string;
  onClick: () => void;
}

export const StoryCard = ({
  title,
  author,
  description,
  coverImage,
  genre,
  onClick,
}: StoryCardProps) => {
  return (
    <Card
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="inline-block rounded-full bg-story-primary px-3 py-1 text-xs font-semibold text-white">
            {genre}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-story-text line-clamp-1">{title}</h3>
        <p className="mb-2 text-sm text-gray-600">by {author}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center text-story-primary">
          <BookOpen className="mr-2 h-4 w-4" />
          <span className="text-sm">Read Now</span>
        </div>
      </div>
    </Card>
  );
};