
import { Scene, Choice } from "@/types/story";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

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
  // Determine background animation based on scene mood and content
  const getBackgroundEffects = () => {
    const baseParticles = 50;
    const particles = Array.from({ length: baseParticles }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));

    switch (scene.mood) {
      case "positive":
        return {
          particles,
          className: "from-[#9b87f5]/10 via-[#7E69AB]/5 to-[#2A1F3C]",
          particleColor: "bg-[#9b87f5]",
          animationType: "float-up",
        };
      case "negative":
        return {
          particles,
          className: "from-red-900/10 via-[#2A1F3C]/5 to-[#1A1F2C]",
          particleColor: "bg-red-400",
          animationType: "swirl",
        };
      default:
        return {
          particles,
          className: "from-[#2A1F3C]/10 via-[#1A1F2C]/5 to-black",
          particleColor: "bg-[#7E69AB]",
          animationType: "float",
        };
    }
  };

  const backgroundEffects = getBackgroundEffects();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${backgroundEffects.className} transition-colors duration-1000`} />
        {backgroundEffects.particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${backgroundEffects.particleColor} opacity-30`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: backgroundEffects.animationType === "float-up" ? [0, -100] : [0, -20, 0],
              x: backgroundEffects.animationType === "swirl" ? [0, 20, -20, 0] : 0,
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Card className="relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(155,135,245,0.3)] transform hover:scale-105 bg-gradient-to-br from-black/80 via-[#2A1F3C]/80 to-[#1A1F2C]/80 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {scene.image && (
              <div className="relative aspect-video">
                <motion.img
                  src={scene.image}
                  alt="Scene illustration"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-[#1A1F2C] backdrop-blur-sm" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <motion.h1 
                    className="text-3xl font-bold text-[#9b87f5] drop-shadow-[0_2px_4px_rgba(155,135,245,0.5)] transform hover:scale-105 transition-transform duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {storyTitle}
                  </motion.h1>
                  <motion.p 
                    className="mt-2 text-lg text-[#7E69AB] drop-shadow-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {storyAuthor}
                  </motion.p>
                </div>
              </div>
            )}

            <div className="p-6 bg-gradient-to-b from-black/80 via-[#2A1F3C]/80 to-[#1A1F2C]/80">
              <motion.div
                className={`mb-8 text-lg ${
                  scene.mood === "positive"
                    ? "text-[#9b87f5]"
                    : scene.mood === "negative"
                    ? "text-red-400"
                    : "text-[#7E69AB]"
                } drop-shadow-lg`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {scene.content}
              </motion.div>

              {!scene.isEnding && (
                <div className="space-y-4">
                  {scene.choices.map((choice: Choice, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <Button
                        onClick={() => onChoice(choice.nextSceneId, choice.consequence)}
                        className="w-full justify-start bg-black/80 text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/50 border border-[#9b87f5]/20"
                        variant="outline"
                      >
                        {choice.text}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}

              {scene.isEnding && (
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="mb-4 text-xl font-semibold text-[#9b87f5] drop-shadow-lg">The End</p>
                  <Button 
                    onClick={onClose} 
                    variant="default"
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/50 border border-[#9b87f5]/20"
                  >
                    Read Another Story
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};
