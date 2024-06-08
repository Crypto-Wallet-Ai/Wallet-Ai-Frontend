import endpoints from '../endpoints';

const fetchWalletVolume = async (page: number, withEthPrice = true) => {
  try {
    const res = await fetch(endpoints.getWalletVolume(page, withEthPrice));
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchWalletVolume;
