import fetchWalletVolume from '@/utils/requests/fetchWalletVolume';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import Container from '@/components/Container/Container';
import PageHeader from '@/components/PageHeader/PageHeader';

export default async function Page() {
  const data = await fetchWalletVolume(0);

  const {
    ethPrice: { usdPrice: ethPriceUsd },
    walletVolume,
  } = data || {};

  const rankedWalletVolume = walletVolume.map((wallet: any, index: number) => ({
    ...wallet,
    rank: index + 1,
    ethPriceUsd,
  }));

  return (
    <Container>
      <PageHeader
        title='Wallet Volume'
        text='Showcasing wallets with unmatched trading volumes in the past 24 hours'
      />
      {/* @ts-ignore */}
      <DataTable columns={columns} data={rankedWalletVolume} />
    </Container>
  );
}
