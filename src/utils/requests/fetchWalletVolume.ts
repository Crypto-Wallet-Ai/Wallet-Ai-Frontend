import endpoints from '../endpoints';
import isError from '../helpers/isError';
import { VolumeResponseSchema } from '../validations/volumeSchema';

const fetchWalletVolume = async (page: number, withEthPrice = true) => {
  const PAGE_SIZE = 20;

  try {
    const res = await fetch(endpoints.getWalletVolume(page, withEthPrice));
    const data = await res.json();

    if (data?.message === 'failure') {
      throw new Error('Something went wrong fetching the data');
    }

    const validatedData = VolumeResponseSchema.safeParse(data);

    if (!validatedData.success) {
      console.log('zod error', validatedData.error);
      return [];
    }

    const withRank = validatedData.data.walletVolume.map((wallet, i) => ({
      rank: page * PAGE_SIZE + i + 1,
      ...wallet,
    }));

    return withRank;
  } catch (error) {
    if (isError(error)) {
      console.log('Error fetching wallet ROI:', { error, message: error.message });
      throw error;
    } else {
      console.log('Unexpected error:', error);
    }
    return [];
  }
};

export default fetchWalletVolume;
