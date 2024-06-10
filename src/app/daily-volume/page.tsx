import fetchWalletVolume from '@/utils/requests/fetchWalletVolume';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import Container from '@/components/Container/Container';
import PageHeader from '@/components/PageHeader/PageHeader';
import { VolumeResponse, WalletVolume } from '@/utils/types/volume';

export default async function Page() {
  const data: WalletVolume = await fetchWalletVolume(0);

  const { walletVolume } = data || {};

  const rankedWalletVolume = walletVolume.map((wallet: VolumeResponse, index: number) => ({
    ...wallet,
    rank: index + 1,
  }));

  return (
    <Container>
      <PageHeader
        title='Wallet Volume'
        text='Showcasing wallets with unmatched trading volumes in the past 24 hours'
      />
      <DataTable columns={columns} data={rankedWalletVolume} />
    </Container>
  );
}
