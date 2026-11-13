
export interface BlogPost {
  id: number;
  title: string;
  category: "Tech" | "Travel" | "Food";
  description: string;
  image: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    category: "Tech",
    description:
      "Exploring how artificial intelligence is changing the way we work, communicate and solve everyday problems.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    date: "November 10, 2026",
  },
  {
    id: 2,
    title: "Exploring the Beauty of Cape Town",
    category: "Travel",
    description:
      "A journey through beautiful landscapes, breathtaking beaches and the vibrant culture of Cape Town.",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800",
    date: "November 5, 2026",
  },
  {
    id: 3,
    title: "A Beginner's Guide to React",
    category: "Tech",
    description:
      "Learn the fundamentals of React and understand how components make modern frontend development easier.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    date: "October 28, 2026",
  },
  {
    id: 4,
    title: "The Art of Making Good Coffee",
    category: "Food",
    description:
      "Discover the techniques, ingredients and little details that make a perfect cup of coffee.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
    date: "October 20, 2026",
  },
  {
    id: 5,
    title: "Why Every Developer Should Learn Git",
    category: "Tech",
    description:
      "A practical look at version control and why Git is an essential tool for software developers.",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
    date: "October 15, 2026",
  },
  {
    id: 6,
    title: "Discovering the Joy of Local Cuisine",
    category: "Food",
    description:
      "Exploring delicious local dishes and the stories, traditions and cultures behind them.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    date: "October 8, 2026",
  },
];
