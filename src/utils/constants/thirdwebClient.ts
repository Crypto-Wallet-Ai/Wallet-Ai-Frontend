import { createThirdwebClient, defineChain } from 'thirdweb';

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT;

const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain = defineChain(1); // ETH Mainnet

export default client;
