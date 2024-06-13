import fetchWalletRoi from '@/utils/requests/fetchWalletRoi';
import { getCurrentPage } from '@/utils/helpers/searchParams';
import PageHeader from '@/components/PageHeader/PageHeader';
import Container from '@/components/Container/Container';
import { columns } from './columns';
import { DataTableWrapper } from '@/components/DataTableWrapper/DataTableWrapper';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const currentPage = getCurrentPage(searchParams);

  return (
    <Container>
      <PageHeader title='wallet roi' text='Discover wallets with the highest ROI in the last 24 hours' />
      <DataTableWrapper
        fetchData={() => fetchWalletRoi(currentPage)}
        columns={columns}
        currentPage={currentPage}
      />
    </Container>
  );
}
