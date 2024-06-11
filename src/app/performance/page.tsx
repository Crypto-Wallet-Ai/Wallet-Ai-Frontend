import Container from '@/components/Container/Container';
import { DataTable } from '@/components/ui/data-table';
import fetchWalletPerformance from '@/utils/requests/fetchWalletPerformance';
import { columns } from './columns';
import PageHeader from '@/components/PageHeader/PageHeader';
import { type WalletPerformance } from '@/utils/validations/performanceSchema';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const pageParam = searchParams?.page;
  const currentPage = Array.isArray(pageParam) ? parseInt(pageParam[0], 10) : parseInt(pageParam || '0', 10);

  const data: WalletPerformance[] = await fetchWalletPerformance(currentPage);

  return (
    <Container>
      <PageHeader
        title='Wallet performance'
        text='Comprehensive analysis of trading profitability and activity'
      />
      <DataTable columns={columns} data={data} currentPage={currentPage} />
    </Container>
  );
}
