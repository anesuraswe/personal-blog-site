import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <Box bg="white" id="home" py={{ base: 20, md: 28 }}>
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={12}
        >
          {/* Hero Content */}
          <VStack align="flex-start" gap={6} flex="1">
            <Box bg="#FACC15" px={4} py={2} borderRadius="full">
              <Text fontSize="sm" fontWeight="bold" color="#111111">
                WELCOME TO MY BLOG
              </Text>
            </Box>

            <Heading
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              lineHeight="1.1"
              fontWeight="extrabold"
              color="#111111"
            >
              Thoughts,
              <br />
              Ideas &
              <Box as="span" color="#e2b709">
                {" "}
                Stories.
              </Box>
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="500px" lineHeight="1.8">
              Exploring technology, sharing experiences, and documenting life's
              interesting moments. Welcome to my corner of the internet.
            </Text>

            <Flex gap={4} wrap="wrap">
              <Button
                as="a"
                bg="#111111"
                
                size="lg"
                px={7}
                borderRadius="full"
                _hover={{
                  bg: "#FACC15",
                  color: "#111111",
                }}
              >
                <Link color='white' _hover={{
                  bg: "#FACC15",
                  color: "#111111",
                }} href="#articles">Explore</Link>
                <ArrowUpRight size={18} />
              </Button>

              <Button
                as="a"
                variant="outline"
                borderColor="#111111"
                color="#111111"
                size="lg"
                px={7}
                borderRadius="full"
                _hover={{
                  bg: "#FACC15",
                }}
              >
                <Link href="#about">About Me</Link>
              </Button>
            </Flex>
          </VStack>

          {/* Decorative Visual */}
          <Flex flex="1" w="100%" justify="center" align="center">
            <Box
              position="relative"
              bg="#FACC15"
              w={{ base: "280px", md: "400px" }}
              h={{ base: "280px", md: "400px" }}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading
                fontSize={{ base: "6xl", md: "8xl" }}
                color="#111111"
                fontWeight="extrabold"
              >
                DJ.
              </Heading>

              <Box
                position="absolute"
                bottom="10%"
                right="-4%"
                bg="#111111"
                color="white"
                p={4}
                borderRadius="xl"
                transform="rotate(-8deg)"
              >
                <Text fontSize="sm" fontWeight="bold">
                  READ. EXPLORE.
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  CREATE.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* Scroll Indicator */}
        <Flex mt={20} align="center" justify="center" gap={2} color="gray.500">
          <ArrowDown size={16} />
          <Text fontSize="xs" letterSpacing="widest">
            SCROLL TO EXPLORE
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
