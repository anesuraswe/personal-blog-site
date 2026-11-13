
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      px={{ base: 5, md: 12 }}
      py={5}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Heading size="lg" color="#111111">
          DevJournal
          <Box as="span" color="#FACC15">
            .
          </Box>
        </Heading>

        {/* Navigation Links */}
        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          {["Home", "Articles", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              color="#111111"
              fontWeight="medium"
              _hover={{ color: "#D4A900" }}
            >
              {item}
            </Link>
          ))}
        </HStack>

        {/* Contact Button */}
        <Button
          bg="#111111"
          color="white"
          borderRadius="full"
          px={6}
          _hover={{ bg: "#FACC15", color: "#111111" }}
        >
          Contact Me
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
