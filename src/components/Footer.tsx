
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg="#111111" color="white" pt={16} pb={6} id="contact">
      <Container maxW="1200px">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={12}
          pb={12}
        >
          {/* Brand */}
          <VStack align="flex-start" gap={4}>
            <Heading size="xl">
              DevJournal
              <Box as="span" color="#FACC15">.</Box>
            </Heading>

            <Text color="gray.400" maxW="300px" lineHeight="1.8">
              A personal space for thoughts, ideas and stories.
              Exploring technology, creativity and everything in between.
            </Text>

            <HStack gap={4}>
              <Link
                href="https://github.com/anesuraswe"
                aria-label="GitHub"
                color="white"
                _hover={{ color: "#FACC15" }}
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="www.linkedin.com/in/anesu-nyamajiwa-123a49265"
                aria-label="LinkedIn"
                color="white"
                _hover={{ color: "#FACC15" }}
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="mailto:ane.uraswe@gmail.com"
                aria-label="Email"
                color="white"
                _hover={{ color: "#FACC15" }}
              >
                <Mail size={20} />
              </Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start" gap={4}>
            <Heading size="md" color="#FACC15">
              Quick Links
            </Heading>

            {[
              { label: "Home", href: "#home" },
              { label: "Articles", href: "#articles" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                color="gray.300"
                _hover={{ color: "#FACC15" }}
              >
                {item.label}
              </Link>
            ))}
          </VStack>

          {/* Contact */}
          <VStack align="flex-start" gap={4}>
            <Heading size="md" color="#FACC15">
              Get in Touch
            </Heading>

            <Text color="gray.400">
              Have an idea or want to collaborate?
              Feel free to reach out.
            </Text>

            <Link
              href="mailto:hello@example.com"
              color="white"
              fontWeight="bold"
              display="inline-flex"
              alignItems="center"
              gap={2}
              _hover={{ color: "#FACC15" }}
            >
              hello@example.com
              <ArrowUpRight size={16} />
            </Link>
          </VStack>
        </SimpleGrid>

        {/* Bottom Footer */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6}>
          <Flex
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row" }}
            gap={3}
          >
            <Text color="gray.500" fontSize="sm">
              © {new Date().getFullYear()} DevJournal. All rights reserved.
            </Text>

            <Text color="gray.500" fontSize="sm">
              Designed with passion.
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
