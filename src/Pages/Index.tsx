import { useState, useEffect } from "react";
import { FeaturedStory } from "@/components/FeaturedStory";
import { GenreSection } from "@/components/GenreSection";
import { InteractiveStory } from "@/components/InteractiveStory";
import { useToast } from "@/components/ui/use-toast";
import { motion, useScroll, useSpring } from "framer-motion";

const FEATURED_STORY = {
  id: 10,
  title: "Silent Witness",
  author: "Rachel Chen",
  genre: "Mystery",
  description: "A cryptic note. A cold case. Your last chance at redemption. Uncover the truth behind a decade-old mystery that forced you into early retirement.",
  coverImage: "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc",
  rating: 4.8,
  readTime: "25 min"
};

const MOCK_STORIES = [
  // Fantasy Stories (3)
  {
    id: 1,
    title: "Dragon's Dawn",
    author: "Richard Storm",
    description: "In a realm where dragons and humans once coexisted in harmony, darkness threatens to destroy everything. As the last dragon rider, you must forge alliances, uncover ancient secrets, and restore balance to a world on the brink of chaos.",
    coverImage: "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
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
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Add a small rotation based on scroll position
      document.documentElement.style.setProperty('--page-rotation', `${Math.sin(window.scrollY * 0.001) * 2}deg`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1128] to-[#2A1F3C] overflow-hidden perspective-1000">
      {/* Progress bar that floats */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#9b87f5] origin-left z-50 floating-text"
        style={{ scaleX }}
      />

      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#9b87f5]/20"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container py-8">
        <motion.header 
          className="mb-12 text-center relative z-10 floating-text-slow"
          initial={{ opacity: 0, y: 100, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#9b87f5] via-[#a587f5] to-[#7E69AB] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(155,135,245,0.5)] transform hover:scale-105 transition-transform duration-300">
            Discover Amazing Stories
          </h1>
          <motion.p 
            className="mt-6 text-xl text-[#9b87f5]/80 font-light floating-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore worlds of imagination and adventure
          </motion.p>
        </motion.header>

        <motion.div
          className="relative page-transition"
          style={{
            rotate: 'var(--page-rotation, 0deg)',
            transition: 'rotate 0.3s ease-out',
          }}
        >
          <FeaturedStory
            {...FEATURED_STORY}
            onClick={() => handleStoryClick(FEATURED_STORY.id)}
          />
        </motion.div>

        <motion.div 
          className="my-12 flex gap-4 overflow-x-auto pb-4 justify-center mask-horizontal-fade floating-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {GENRES.map((genre, index) => (
            <motion.button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`relative rounded-full px-8 py-3 text-sm font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] ${
                selectedGenre === genre
                  ? "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white shadow-lg shadow-[#9b87f5]/30"
                  : "bg-[#2A1F3C]/80 text-[#9b87f5] hover:bg-[#9b87f5]/20 backdrop-blur-sm"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, rotate: [-1, 1] }}
            >
              <span className="relative z-10">{genre}</span>
            </motion.button>
          ))}
        </motion.div>

        {GENRES.map((genre, index) => (
          <motion.div
            key={genre}
            className="page-transition"
            initial={{ opacity: 0, y: 100, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            style={{
              rotate: 'var(--page-rotation, 0deg)',
              transition: 'rotate 0.3s ease-out',
            }}
          >
            <GenreSection
              title={genre}
              stories={MOCK_STORIES.filter((s) => s.genre === genre)}
              onStoryClick={handleStoryClick}
            />
          </motion.div>
        ))}

        {/* Decorative floating elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-[#9b87f5]/10 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: '25%',
              left: '25%',
            }}
          />
          <motion.div
            className="absolute w-48 h-48 bg-gradient-to-l from-[#7E69AB]/10 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: '75%',
              right: '25%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
