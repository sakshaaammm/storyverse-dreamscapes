import { StoryCard } from "./StoryCard";

interface Story {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genre: string;
}

interface GenreSectionProps {
  title: string;
  stories: Story[];
  onStoryClick: (id: number) => void;
}

export const GenreSection = ({ title, stories, onStoryClick }: GenreSectionProps) => {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-story-text">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            {...story}
            onClick={() => onStoryClick(story.id)}
          />
        ))}
      </div>
    </section>
  );
};