import { z } from 'zod';

export const BadgeSchema = z.object({
  pairAddress: z.string(),
  pairName: z.string(),
  roiInX: z.number(),
});

export const BalanceSchema = z.object({
  balance: z.string().or(z.number()),
  logo: z.string().optional(),
  name: z.string(),
  symbol: z.string(),
  tokenAddress: z.string(),
});

export const WalletSchema = z.object({
  alreadyScraped: z.boolean(),
  lastUpdated: z.number(),
  isContract: z.boolean().optional(),
  badges: BadgeSchema.array().optional(),
  balances: BalanceSchema.array().optional(),
});

export const WalletRoiSchema = z.object({
  walletAddress: z.string(),
  roiInX: z.number(),
  timestamp: z.number(),
  transactionHash: z.string(),
  wallet: WalletSchema,
});

export const EthPriceSchema = z.object({
  tokenSymbol: z.string(),
  usdPrice: z.number(),
});

export const RoiResponseSchema = z.object({
  message: z.string(),
  walletRoiInX: WalletRoiSchema.array(),
  ethPrice: EthPriceSchema,
});

export type RoiResponse = z.infer<typeof RoiResponseSchema>;
export type Wallet = z.infer<typeof WalletSchema>;
export type WalletRoi = z.infer<typeof WalletRoiSchema>[];
export type Badge = z.infer<typeof BadgeSchema>;
export type Balance = z.infer<typeof BalanceSchema>;
