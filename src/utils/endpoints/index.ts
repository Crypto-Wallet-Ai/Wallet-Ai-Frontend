import baseUrl from '../constants/urls';

const endpoints = {
  getWalletRoi: (page: number, withEthPrice: boolean) =>
    `${baseUrl}/dailyWalletRoiInX?page=${page}&withEthPrice=${withEthPrice}`, // GET
  getWalletVolume: (page: number, withEthPrice: boolean) =>
    `${baseUrl}/dailyWalletVolume?page=${page}&withEthPrice=${withEthPrice}`, // GET
};

export default endpoints;
