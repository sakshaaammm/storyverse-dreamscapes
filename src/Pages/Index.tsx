
import { useState } from "react";
import { FeaturedStory } from "@/components/FeaturedStory";
import { GenreSection } from "@/components/GenreSection";
import { InteractiveStory } from "@/components/InteractiveStory";
import { useToast } from "@/components/ui/use-toast";

// Mock data - limited to 10 stories total
const FEATURED_STORY = {
  id: 1,
  title: "The Last Algorithm",
  author: "Ada Chen",
  description: "In a world where artificial intelligence has evolved beyond human comprehension, Dr. Sarah Chen discovers a hidden pattern that could change everything...",
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
};

const MOCK_STORIES = [
  // Fantasy Stories (3)
  {
    id: 1,
    title: "Dragon's Dawn",
    author: "Richard Storm",
    description: "In a realm where dragons and humans once coexisted in harmony, darkness threatens to destroy everything. As the last dragon rider, you must forge alliances, uncover ancient secrets, and restore balance to a world on the brink of chaos.",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
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
    title: "Whispers in the Wind",
    author: "Marcus Blake",
    description: "A tale of mystery and magic in a small coastal town.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    genre: "Fantasy",
  },
  // Science Fiction Stories (3)
  {
    id: 4,
    title: "Neural Network",
    author: "Alex Chen",
    description: "A cybernetic detective uncovers a conspiracy in Neo Tokyo.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    genre: "Science Fiction",
  },
  {
    id: 5,
    title: "Quantum Dreams",
    author: "Maya Patel",
    description: "Reality bends as quantum computing reaches new heights.",
    coverImage: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    genre: "Science Fiction",
  },
  {
    id: 6,
    title: "Digital Horizon",
    author: "Sarah Kim",
    description: "A virtual reality experiment goes terribly wrong.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    genre: "Science Fiction",
  },
  // Romance Stories (2)
  {
    id: 7,
    title: "Midnight in Paris",
    author: "Sophie Martin",
    description: "A romantic journey through time in the city of lights.",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    genre: "Romance",
  },
  {
    id: 8,
    title: "Love in Venice",
    author: "Isabella Romano",
    description: "Two hearts meet in the floating city of dreams.",
    coverImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    genre: "Romance",
  },
  // Mystery Stories (2)
  {
    id: 9,
    title: "The Detective's Last Case",
    author: "James Morrison",
    description: "A gripping mystery that will keep you guessing until the end.",
    coverImage: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
    genre: "Mystery",
  },
  {
    id: 10,
    title: "Silent Witness",
    author: "Rachel Chen",
    description: "A cold case comes back to haunt a small town.",
    coverImage: "https://images.unsplash.com/photo-1494236536165-dab4d859818b",
    genre: "Mystery",
  },
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
    <div className="min-h-screen animate-fade-in bg-black">
      <div className="container py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(155,135,245,0.3)]">
            Discover Amazing Stories
          </h1>
          <p className="mt-4 text-lg text-[#7E69AB]">
            Explore worlds of imagination and adventure
          </p>
        </header>

        <FeaturedStory
          {...FEATURED_STORY}
          onClick={() => handleStoryClick(FEATURED_STORY.id)}
        />

        <div className="my-8 flex gap-4 overflow-x-auto pb-2 justify-center">
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedGenre === genre
                  ? "bg-[#9b87f5] text-white shadow-lg shadow-[#9b87f5]/30"
                  : "bg-[#2A1F3C] text-[#9b87f5] hover:bg-[#9b87f5]/20"
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
