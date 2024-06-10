import endpoints from '../endpoints';
import { RoiResponseSchema } from '../validations/roiSchema';
import isError from '../helpers/isError';

const fetchWalletRoi = async (page: number, withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletRoi(page, withEthPrice));
    const data = await res.json();

    const validatedData = RoiResponseSchema.safeParse(data);

    if (!validatedData.success) {
      console.log('zod error', validatedData.error);
      return [];
    }

    return validatedData.data.walletRoiInX;
  } catch (error) {
    if (isError(error)) {
      console.log('Error fetching wallet ROI:', { error, message: error.message });
    } else {
      console.log('Unexpected error:', error);
    }
    return [];
  }
};

export default fetchWalletRoi;
