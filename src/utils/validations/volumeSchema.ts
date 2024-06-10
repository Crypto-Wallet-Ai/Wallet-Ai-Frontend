import { z } from 'zod';
import { WalletSchema } from './roiSchema';
import { EthPriceSchema } from './ethPrice';

export const WalletVolumeSchema = z.object({
  rank: z.number().optional(),
  timestamp: z.number(),
  volumeInEth: z.number(),
  volumeInStableCoin: z.number(),
  volumeInUsd: z.number(),
  wallet: WalletSchema,
  walletAddress: z.string(),
});

export const VolumeResponseSchema = z.object({
  ethPrice: EthPriceSchema,
  message: z.string(),
  walletVolume: WalletVolumeSchema.array(),
});

export type VolumeResponse = z.infer<typeof VolumeResponseSchema>;
export type WalletVolume = z.infer<typeof WalletVolumeSchema>;
