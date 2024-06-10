export type Balance = {
  balance: string | number;
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

export type Wallet = {
  alreadyScraped: boolean;
  lastUpdated: number;
  badges: Badge[];
  balances: Balance[];
};
