import endpoints from '../endpoints';
import isError from '../helpers/isError';
import { RoiResponseSchema } from '../validations/roiSchema';

const fetchWalletRoi = async (page: number, withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletRoi(page, withEthPrice));
    const data = await res.json();
    console.log({ res, data });

    if (data?.message === 'failure') {
      throw new Error('Something went wrong fetching the data');
    }

    const validatedData = RoiResponseSchema.safeParse(data);

    if (!validatedData.success) {
      console.log('zod error', validatedData.error);
      return [];
    }

    return validatedData.data.walletRoiInX;
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

export default fetchWalletRoi;
