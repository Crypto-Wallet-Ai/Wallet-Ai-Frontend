import { z } from 'zod';

const TimeFilterSchema = z.union([z.literal('1M'), z.literal('3W'), z.literal('2W'), z.literal('1W')]);

export const PerformanceResponseSchema = z.object({
  hitRate: z.number(),
  hitRatePercentage: z.number(),
  place: z.number(),
  timestamp: z.number(),
  totalBuys: z.number(),
  totalPairsTraded: z.number(),
  totalProfitEth: z.number(),
  totalProfitStable: z.number(),
  totalProfitUsd: z.number(),
  totalSells: z.number(),
  totalSwapCount: z.number(),
  totalVolumeEth: z.number(),
  totalVolumeStable: z.number(),
  totalVolumeUsd: z.number(),
  type: TimeFilterSchema,
  wallet: z.string(),
});

export type PerformanceResponse = z.infer<typeof PerformanceResponseSchema>;
