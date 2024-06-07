import baseUrl from '../constants/urls';

const endpoints = {
  getWalletRoi: (page: number, withEthPrice: boolean) =>
    `${baseUrl}/dailyWalletRoiInX?page=${page}&withEthPrice=${withEthPrice}`, // get
};

export default endpoints;
