
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
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg bg-[#1A1F2C] border-[#2A1F3C] hover:shadow-[#9b87f5]/20 transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <span className="inline-block rounded-full bg-[#9b87f5] px-3 py-1 text-xs font-semibold text-white shadow-lg">
            {genre}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-[#9b87f5] line-clamp-1">{title}</h3>
        <p className="mb-2 text-sm text-[#7E69AB]">by {author}</p>
        <p className="text-sm text-[#7E69AB]/80 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center text-[#9b87f5] group-hover:text-[#9b87f5]">
          <BookOpen className="mr-2 h-4 w-4" />
          <span className="text-sm font-medium">Read Now</span>
        </div>
      </div>
    </Card>
  );
};
