export type Balance = {
  balance: string;
  logo: string;
  name: string;
  symbol: string;
  tokenAddress: string;
};

export type Badge = {
  pairAddress: string;
  pairName: string;
  roiInX: number;
};

export type RoiWallet = {
  alreadyScraped: boolean;
  lastUpdated: number;
  badges: Badge[];
  balances: Balance[];
};

export type RoiData = {
  walletAddress: string;
  roiInX: number;
  timestamp: number;
  transactionHash: string;
  wallet: RoiWallet[];
};
