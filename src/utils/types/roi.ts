import { Wallet } from './wallet';

export type RoiResponse = {
  walletAddress: string;
  roiInX: number;
  timestamp: number;
  transactionHash: string;
  wallet: Wallet[];
};
