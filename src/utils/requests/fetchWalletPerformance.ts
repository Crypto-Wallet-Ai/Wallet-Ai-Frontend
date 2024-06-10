import endpoints from '../endpoints';
import isError from '../helpers/isError';
import { PerformanceResponseSchema } from '../validations/performanceSchema';

const fetchWalletPerformance = async (page = 0, type = '1M', withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletPerformance(page, type, withEthPrice));
    const data = await res.json();

    const validatedData = PerformanceResponseSchema.safeParse(data);

    if (!validatedData.success) {
      console.log('zod error', validatedData.error);
      return [];
    }

    return validatedData.data.walletPerformances;
  } catch (error) {
    if (isError(error)) {
      console.log('Error fetching wallet ROI:', { error, message: error.message });
    } else {
      console.log('Unexpected error:', error);
    }
    return [];
  }
};

export default fetchWalletPerformance;
