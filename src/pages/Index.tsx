import { useState } from "react";
import { FeaturedStory } from "@/components/FeaturedStory";
import { GenreSection } from "@/components/GenreSection";
import { useToast } from "@/components/ui/use-toast";

// Mock data - in a real app this would come from an API
const FEATURED_STORY = {
  id: 1,
  title: "The Lost City of Atlantis",
  author: "Elena Rivers",
  description: "Dive into an epic adventure as archaeologist Dr. Sarah Chen discovers ancient clues leading to the mythical city of Atlantis. But she's not the only one searching for this underwater paradise...",
  coverImage: "/placeholder.svg",
};

const MOCK_STORIES = [
  {
    id: 1,
    title: "Whispers in the Wind",
    author: "Marcus Blake",
    description: "A tale of mystery and magic in a small coastal town.",
    coverImage: "/placeholder.svg",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "The Last Algorithm",
    author: "Ada Chen",
    description: "When AI becomes sentient, one programmer holds the key to humanity's future.",
    coverImage: "/placeholder.svg",
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "Midnight in Paris",
    author: "Sophie Martin",
    description: "A romantic journey through time in the city of lights.",
    coverImage: "/placeholder.svg",
    genre: "Romance",
  },
  {
    id: 4,
    title: "The Detective's Last Case",
    author: "James Morrison",
    description: "A gripping mystery that will keep you guessing until the end.",
    coverImage: "/placeholder.svg",
    genre: "Mystery",
  },
];

const GENRES = ["Fantasy", "Science Fiction", "Romance", "Mystery"];

const Index = () => {
  const { toast } = useToast();
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const handleStoryClick = (id: number) => {
    // In a real app, this would navigate to the story page
    toast({
      title: "Coming Soon!",
      description: "Story reading feature will be available in the next update.",
    });
  };

  return (
    <div className="min-h-screen animate-fade-in bg-story-background">
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-story-text">Discover Amazing Stories</h1>
          <p className="mt-2 text-gray-600">Explore worlds of imagination and adventure</p>
        </header>

        <FeaturedStory {...FEATURED_STORY} onClick={() => handleStoryClick(FEATURED_STORY.id)} />

        <div className="my-8 flex gap-4 overflow-x-auto pb-2">
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                selectedGenre === genre
                  ? "bg-story-primary text-white"
                  : "bg-story-secondary text-story-primary hover:bg-story-primary/10"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {GENRES.map((genre) => (
          <GenreSection
            key={genre}
            title={genre}
            stories={MOCK_STORIES.filter((s) => s.genre === genre)}
            onStoryClick={handleStoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;