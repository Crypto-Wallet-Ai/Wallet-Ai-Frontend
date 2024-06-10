import { Wallet } from './wallet';

export type VolumeResponse = {
  ethPriceUsd: number;
  rank?: number;
  timestamp: number;
  volumeInEth: number;
  volumeInStableCoin: number;
  volumeInUsd: number;
  wallet: Wallet[];
  walletAddress: string;
};

export type WalletVolume = {
  walletVolume: VolumeResponse[];
};
