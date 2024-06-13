import Container from '@/components/Container/Container';
import fetchWalletPerformance from '@/utils/requests/fetchWalletPerformance';
import { getCurrentPage } from '@/utils/helpers/searchParams';
import PageHeader from '@/components/PageHeader/PageHeader';
import { columns } from './columns';
import { DataTableWrapper } from '@/components/DataTableWrapper/DataTableWrapper';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const currentPage = getCurrentPage(searchParams);

  return (
    <Container>
      <PageHeader
        title='Wallet performance'
        text='Comprehensive analysis of trading profitability and activity'
      />
      <DataTableWrapper
        fetchData={() => fetchWalletPerformance(currentPage)}
        columns={columns}
        currentPage={currentPage}
      />
    </Container>
  );
}
