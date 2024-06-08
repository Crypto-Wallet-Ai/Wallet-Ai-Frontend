import endpoints from '../endpoints';

const fetchWalletPerformance = async (page = 0, type = '1M', withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletPerformance(page, type, withEthPrice));
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchWalletPerformance;
