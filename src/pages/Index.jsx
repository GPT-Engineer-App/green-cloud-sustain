import { Container, Heading, Text, VStack, Link, List, ListItem, ListIcon, Image } from "@chakra-ui/react";
import { FaCloud, FaGlobeEurope, FaNetworkWired, FaRegLightbulb, FaTree } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Cloud Sustainability
        </Heading>
        <Image src="https://images.unsplash.com/photo-1499063078284-f78f7d89616a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHN1c3RhaW5hYmlsaXR5fGVufDB8fHx8MTcxNTE1MzQ1OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <Text fontSize="xl" mt={4}>
          Exploring the intersection of technology and sustainability, focusing on the impact and management of cloud computing on our environment.
        </Text>

        <List spacing={3} mt={6}>
          <ListItem>
            <ListIcon as={FaCloud} color="green.500" />
            <Text as="span">
              <strong>Green Cloud Computing:</strong> What does Europe recommend?
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaGlobeEurope} color="green.500" />
            <Text as="span">
              <strong>Technologies Cloud:</strong> Italy's need for a boost from the PNRR (National Recovery and Resilience Plan).
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaNetworkWired} color="green.500" />
            <Text as="span">
              <strong>Advanced Network Management Software:</strong> Tools for efficient energy use and reduced carbon footprint.
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegLightbulb} color="green.500" />
            <Text as="span">
              <strong>How to Reduce Consumption:</strong> Practical steps for individuals and organizations.
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaTree} color="green.500" />
            <Text as="span">
              <strong>Global Responsibility:</strong> The role of big tech in pollution and sustainability.
            </Text>
          </ListItem>
        </List>

        <Text fontSize="lg" mt={10}>
          The role of the web in spreading awareness and information about sustainability is crucial. Learn more about how you can contribute to a greener future.
        </Text>

        <Link href="https://www.example.com" isExternal color="teal.500" fontSize="lg" mt={2}>
          Learn more about sustainability initiatives
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
