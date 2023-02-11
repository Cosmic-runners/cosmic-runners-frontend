import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="2xl" marginBottom={6} color="red.500">
        Welcome to Cosmic Runners
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          Multichain Support
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
