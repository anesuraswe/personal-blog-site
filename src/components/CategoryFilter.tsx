
import { Button, HStack } from "@chakra-ui/react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ["All", "Tech", "Travel", "Food"];

const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <HStack gap={3} wrap="wrap">
      {categories.map((category) => (
        <Button
          key={category}
          size="md"
          borderRadius="full"
          bg={
            selectedCategory === category
              ? "#111111"
              : "white"
          }
          color={
            selectedCategory === category
              ? "white"
              : "#111111"
          }
          border="1px solid"
          borderColor="#111111"
          onClick={() => onCategoryChange(category)}
          _hover={{
            bg: "#FACC15",
            color: "#111111",
          }}
        >
          {category}
        </Button>
      ))}
    </HStack>
  );
};

export default CategoryFilter;
