
export interface Choice {
  text: string;
  nextSceneId: string;
  consequence?: string;
}

export interface Scene {
  id: string;
  content: string;
  choices: Choice[];
  isEnding?: boolean;
  mood?: "neutral" | "positive" | "negative";
  image?: string;
}

export interface StoryData {
  title: string;
  author: string;
  coverImage: string;
  initialScene: string;
  scenes: Record<string, Scene>;
}
