import fetchWalletVolume from '@/utils/requests/fetchWalletVolume';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import Container from '@/components/Container/Container';
import PageHeader from '@/components/PageHeader/PageHeader';
import { WalletVolume } from '@/utils/validations/volumeSchema';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const pageParam = searchParams?.page;
  const currentPage = Array.isArray(pageParam) ? parseInt(pageParam[0], 10) : parseInt(pageParam || '0', 10);
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
