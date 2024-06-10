import endpoints from '../endpoints';
import isError from '../helpers/isError';
import { VolumeResponseSchema } from '../validations/volumeSchema';

const fetchWalletVolume = async (page: number, withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletVolume(page, withEthPrice));
    const data = await res.json();

    const validatedData = VolumeResponseSchema.safeParse(data);

    if (!validatedData.success) {
      console.log('zod error', validatedData.error);
      return [];
    }

    return validatedData.data.walletVolume;
  } catch (error) {
    if (isError(error)) {
      console.log('Error fetching wallet ROI:', { error, message: error.message });
    } else {
      console.log('Unexpected error:', error);
    }
    return [];
  }
};

export default fetchWalletVolume;
