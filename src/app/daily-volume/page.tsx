import fetchWalletVolume from '@/utils/requests/fetchWalletVolume';
import { WalletVolume } from '@/utils/validations/volumeSchema';
import { getCurrentPage } from '@/utils/helpers/searchParams';
import { DataTable } from '@/components/ui/data-table';
import Container from '@/components/Container/Container';
import PageHeader from '@/components/PageHeader/PageHeader';
import { columns } from './columns';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const currentPage = getCurrentPage(searchParams);
  const PAGE_SIZE = 20;

  const data: WalletVolume[] = await fetchWalletVolume(currentPage);

  const rankedWalletVolume = data.map((wallet: WalletVolume, index: number) => ({
    ...wallet,
    rank: currentPage * PAGE_SIZE + index + 1,
  }));

  return (
    <Container>
      <PageHeader
        title='Wallet Volume'
        text='Showcasing wallets with unmatched trading volumes in the past 24 hours'
      />
      <DataTable columns={columns} data={rankedWalletVolume} currentPage={currentPage} />
    </Container>
  );
}
