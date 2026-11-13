
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
import SearchBar from "./SearchBar";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts by category and title
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

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

          {/* Search and Category Filter */}
          <VStack
            align="stretch"
            gap={5}
          >
            <Box maxW={{ base: "100%", md: "400px" }}>
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </Box>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </VStack>

          {/* Blog Cards */}
          {filteredPosts.length > 0 ? (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              gap={6}
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </SimpleGrid>
          ) : (
            <Box textAlign="center" py={16}>
              <Heading size="lg" color="#111111" mb={2}>
                No articles found.
              </Heading>

              <Text color="gray.600">
                Try another keyword or select a different category.
              </Text>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default BlogList;
