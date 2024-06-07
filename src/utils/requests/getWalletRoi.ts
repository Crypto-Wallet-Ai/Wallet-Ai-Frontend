import endpoints from '../endpoints';

const fetchWalletRoi = async (page: number, withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletRoi(page, withEthPrice));
    const data = await res.json();

    const walletRoi = data?.walletRoiInX;
    const ethPrice = data?.ethPrice?.usdPrice;

    return { walletRoi, ethPrice };
  } catch (error) {
    // console.log('*** getTopPairs', { error, message: error.message });
    throw error;
  }
};

export default fetchWalletRoi;
