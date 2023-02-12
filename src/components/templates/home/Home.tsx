import { Heading, VStack, List, ListItem } from '@chakra-ui/react';
import Image from 'next/image';

const Home = () => {
  return (
    <VStack w={'full'} direction={'row'}>
      <Heading size="2xl" marginBottom={6} color="white.500">
        Welcome to Cosmic Runners
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Image src={'/3.png'} height={65} width={400} alt="jhvas" />
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
