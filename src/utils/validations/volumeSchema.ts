import { z } from 'zod';
import { WalletSchema } from './roiSchema';

export const VolumeResponseSchema = z.object({
  ethPriceUsd: z.number(),
  rank: z.number().optional(),
  timestamp: z.number(),
  volumeInEth: z.number(),
  volumeInStableCoin: z.number(),
  volumeInUsd: z.number(),
  wallet: WalletSchema.array(),
  walletAddress: z.string(),
});

export type VolumeResponse = z.infer<typeof VolumeResponseSchema>;
export type WalletVolume = {
  walletVolume: VolumeResponse[];
};
