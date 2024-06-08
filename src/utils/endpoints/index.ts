import baseUrl from '../constants/urls';

const endpoints = {
  getWalletRoi: (page: number, withEthPrice: boolean) =>
    `${baseUrl}/dailyWalletRoiInX?page=${page}&withEthPrice=${withEthPrice}`, // GET
  getWalletVolume: (page: number, withEthPrice: boolean) =>
    `${baseUrl}/dailyWalletVolume?page=${page}&withEthPrice=${withEthPrice}`, // GET
  getWalletPerformance: (page: number, type: string, withEthPrice: boolean) =>
    `${baseUrl}/walletPerformance?page=${page}&type=${type}&withEthPrice=${withEthPrice}`,
};

export default endpoints;
