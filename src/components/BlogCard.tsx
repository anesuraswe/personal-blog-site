
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "../data/posts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "lg",
      }}
    >
      {/* Post Image */}
      <Image
        src={post.image}
        alt={post.title}
        w="100%"
        h="220px"
        objectFit="cover"
      />

      <VStack align="stretch" p={5} gap={3}>
        {/* Category and Date */}
        <HStack justify="space-between">
          <Box
            bg="#FACC15"
            color="#111111"
            px={3}
            py={1}
            borderRadius="full"
          >
            <Text fontSize="xs" fontWeight="bold">
              {post.category}
            </Text>
          </Box>

          <Text fontSize="xs" color="gray.500">
            {post.date}
          </Text>
        </HStack>

        {/* Title */}
        <Heading
          size="md"
          color="#111111"
          lineHeight="1.4"
        >
          {post.title}
        </Heading>

        {/* Description */}
        <Text color="gray.600" fontSize="sm" lineHeight="1.7">
          {post.description}
        </Text>

        {/* Read More */}
        <Link
          href="#"
          color="#111111"
          fontWeight="bold"
          fontSize="sm"
          display="inline-flex"
          alignItems="center"
          gap={2}
          _hover={{ color: "#D4A900" }}
        >
          Read Article
          <ArrowUpRight size={16} />
        </Link>
      </VStack>
    </Box>
  );
};

export default BlogCard;
