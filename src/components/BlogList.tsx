
import { useState } from "react";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { posts } from "../data/posts";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter(
          (post) => post.category === selectedCategory
        );

  return (
    <Box id="articles" bg="#F5F5F5" py={20}>
      <Container maxW="1200px">
        <VStack align="stretch" gap={10}>
          {/* Section Heading */}
          <Box>
            <Text
              color="#D4A900"
              fontWeight="bold"
              fontSize="sm"
              letterSpacing="widest"
            >
              THE BLOG
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="#111111"
              mt={2}
            >
              Latest Articles
              <Box as="span" color="#FACC15">.</Box>
            </Heading>

            <Text color="gray.600" mt={3} maxW="550px">
              Thoughts, discoveries and stories worth sharing.
              Explore my latest articles below.
            </Text>
          </Box>

          {/* Category Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Blog Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={6}
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </SimpleGrid>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <Text textAlign="center" py={10} color="gray.600">
              No articles found in this category.
            </Text>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default BlogList;
