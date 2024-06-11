import Container from '@/components/Container/Container';
import { DataTable } from '@/components/ui/data-table';
import fetchWalletPerformance from '@/utils/requests/fetchWalletPerformance';
import { type WalletPerformance } from '@/utils/validations/performanceSchema';
import { getCurrentPage } from '@/utils/helpers/searchParams';
import PageHeader from '@/components/PageHeader/PageHeader';
import { columns } from './columns';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const currentPage = getCurrentPage(searchParams);

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
