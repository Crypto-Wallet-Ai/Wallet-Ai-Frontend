import { z } from 'zod';

export const EthPriceSchema = z.object({
  tokenSymbol: z.string(),
  usdPrice: z.number(),
});
