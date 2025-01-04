import { useState } from "react";
import { FeaturedStory } from "@/components/FeaturedStory";
import { GenreSection } from "@/components/GenreSection";
import { InteractiveStory } from "@/components/InteractiveStory";
import { useToast } from "@/components/ui/use-toast";

// Mock data - in a real app this would come from an API
const FEATURED_STORY = {
  id: 1,
  title: "The Last Algorithm",
  author: "Ada Chen",
  description: "In a world where artificial intelligence has evolved beyond human comprehension, Dr. Sarah Chen discovers a hidden pattern that could change everything. As she delves deeper into the mystery, she realizes that the very fabric of reality might be at stake...",
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
};

const MOCK_STORIES = [
  // Fantasy Stories
  {
    id: 1,
    title: "Whispers in the Wind",
    author: "Marcus Blake",
    description: "A tale of mystery and magic in a small coastal town.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "The Crystal Kingdom",
    author: "Elena Rivers",
    description: "A young mage discovers her destiny in a realm of crystal spires.",
    coverImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    genre: "Fantasy",
  },
  {
    id: 3,
    title: "Dragon's Dawn",
    author: "Richard Storm",
    description: "The last dragon rider must save her world from darkness.",
    coverImage: "https://images.unsplash.com/photo-1500252185289-40708b7a6a8b",
    genre: "Fantasy",
  },
  {
    id: 4,
    title: "The Enchanted Forest",
    author: "Luna Silver",
    description: "A magical journey through an ancient forest of wonders.",
    coverImage: "https://images.unsplash.com/photo-1511497584788-876760111969",
    genre: "Fantasy",
  },
  // Science Fiction Stories
  {
    id: 5,
    title: "Neural Network",
    author: "Alex Chen",
    description: "A cybernetic detective uncovers a conspiracy in Neo Tokyo.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    genre: "Science Fiction",
  },
  {
    id: 6,
    title: "Quantum Dreams",
    author: "Maya Patel",
    description: "Reality bends as quantum computing reaches new heights.",
    coverImage: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    genre: "Science Fiction",
  },
  {
    id: 7,
    title: "Mars Colony One",
    author: "James Morrison",
    description: "The first Mars colonists face unexpected challenges.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    genre: "Science Fiction",
  },
  {
    id: 8,
    title: "Digital Horizon",
    author: "Sarah Kim",
    description: "A virtual reality experiment goes terribly wrong.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    genre: "Science Fiction",
  },
  // Romance Stories
  {
    id: 9,
    title: "Midnight in Paris",
    author: "Sophie Martin",
    description: "A romantic journey through time in the city of lights.",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    genre: "Romance",
  },
  {
    id: 10,
    title: "Love in Venice",
    author: "Isabella Romano",
    description: "Two hearts meet in the floating city of dreams.",
    coverImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    genre: "Romance",
  },
  {
    id: 11,
    title: "Summer's Promise",
    author: "Emily Chase",
    description: "A summer romance that changes everything.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    genre: "Romance",
  },
  {
    id: 12,
    title: "Coffee Shop Love",
    author: "David Park",
    description: "Finding love one cup at a time.",
    coverImage: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    genre: "Romance",
  },
  // Mystery Stories
  {
    id: 13,
    title: "The Detective's Last Case",
    author: "James Morrison",
    description: "A gripping mystery that will keep you guessing until the end.",
    coverImage: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
    genre: "Mystery",
  },
  {
    id: 14,
    title: "Silent Witness",
    author: "Rachel Chen",
    description: "A cold case comes back to haunt a small town.",
    coverImage: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
    genre: "Mystery",
  },
  {
    id: 15,
    title: "The Forgotten Room",
    author: "Michael Blake",
    description: "An old mansion holds deadly secrets.",
    coverImage: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2",
    genre: "Mystery",
  },
  {
    id: 16,
    title: "Vanishing Point",
    author: "Laura Stone",
    description: "A detective races against time to find missing persons.",
    coverImage: "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8",
    genre: "Mystery",
  }
];

const GENRES = ["Fantasy", "Science Fiction", "Romance", "Mystery"];

const Index = () => {
  const { toast } = useToast();
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  const handleStoryClick = (id: number) => {
    setSelectedStoryId(id);
  };

  const handleCloseStory = () => {
    setSelectedStoryId(null);
  };

  if (selectedStoryId !== null) {
    return <InteractiveStory storyId={selectedStoryId} onClose={handleCloseStory} />;
  }

  return (
    <div className="min-h-screen animate-fade-in bg-story-background">
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-story-text">
            Discover Amazing Stories
          </h1>
          <p className="mt-2 text-gray-600">
            Explore worlds of imagination and adventure
          </p>
        </header>

        <FeaturedStory
          {...FEATURED_STORY}
          onClick={() => handleStoryClick(FEATURED_STORY.id)}
        />

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