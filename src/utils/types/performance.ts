export type TimeFilter = '1M' | '3W' | '2W' | '1W';

export type PerformanceResponse = {
  hitRate: number;
  hitRatePercentage: number;
  place: number;
  timestamp: number;
  totalBuys: number;
  totalPairsTraded: number;
  totalProfitEth: number;
  totalProfitStable: number;
  totalProfitUsd: number;
  totalSells: number;
  totalSwapCount: number;
  totalVolumeEth: number;
  totalVolumeStable: number;
  totalVolumeUsd: number;
  type: TimeFilter;
  wallet: string;
};

export type WalletPerformances = {
  walletPerformances: PerformanceResponse[];
};
