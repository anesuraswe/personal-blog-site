
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowUpRight, Code2, Lightbulb, Laptop } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: <Code2 size={22} />,
      title: "Development",
      description: "Building modern, responsive and user-friendly web applications.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Problem Solving",
      description: "Turning ideas and challenges into practical digital solutions.",
    },
    {
      icon: <Laptop size={22} />,
      title: "Technology",
      description: "Exploring emerging technologies and continuously learning.",
    },
  ];

  return (
    <Box id="about" bg="white" py={{ base: 16, md: 24 }}>
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={{ base: 12, md: 20 }}
        >
          {/* Left side */}
          <Box flex="1" w="100%">
            <Box
              bg="#FACC15"
              w="65px"
              h="6px"
              mb={6}
              borderRadius="full"
            />

            <Text
              color="#D4A900"
              fontWeight="bold"
              fontSize="sm"
              letterSpacing="widest"
            >
              ABOUT ME
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="#111111"
              lineHeight="1.2"
              mt={3}
              mb={6}
            >
              The Person Behind
              <Box as="span" color="#D4A900">
                {" "}The Posts.
              </Box>
            </Heading>

            <Text color="#666666" fontSize="md" lineHeight="1.9" mb={5}>
              Hello! I'm a technology enthusiast and developer passionate
              about creating meaningful digital experiences. I enjoy exploring
              ideas, learning new technologies and sharing what I discover
              along the way.
            </Text>

            <Text color="#666666" fontSize="md" lineHeight="1.9" mb={8}>
              This blog is where I document my journey, share lessons from
              projects, discuss technology and explore ideas that inspire
              curiosity and creativity.
            </Text>

            <Button
              asChild
              bg="#111111"
              color="white"
              size="lg"
              px={7}
              borderRadius="full"
              _hover={{ bg: "#FACC15", color: "#111111" }}
            >
              <Link href="#contact">
                Let's Connect <ArrowUpRight size={18} />
              </Link>
            </Button>
          </Box>

          {/* Right side */}
          <Box flex="1" w="100%">
            <Box
              bg="#F5F5F5"
              p={{ base: 6, md: 10 }}
              borderRadius="2xl"
              position="relative"
            >
              <Box
                position="absolute"
                top="-12px"
                right="25px"
                bg="#FACC15"
                px={5}
                py={2}
                borderRadius="full"
              >
                <Text color="#111111" fontSize="xs" fontWeight="bold">
                  WHAT I DO
                </Text>
              </Box>

              <VStack align="stretch" gap={7}>
                {interests.map((interest) => (
                  <HStack key={interest.title} align="flex-start" gap={4}>
                    <Flex
                      bg="#FACC15"
                      color="#111111"
                      minW="48px"
                      h="48px"
                      align="center"
                      justify="center"
                      borderRadius="lg"
                    >
                      {interest.icon}
                    </Flex>

                    <Box>
                      <Heading size="md" color="#111111" mb={2}>
                        {interest.title}
                      </Heading>
                      <Text color="#666666" fontSize="sm" lineHeight="1.7">
                        {interest.description}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
