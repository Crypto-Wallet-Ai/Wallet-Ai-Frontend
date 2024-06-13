import fetchWalletVolume from '@/utils/requests/fetchWalletVolume';
// import { WalletVolume } from '@/utils/validations/volumeSchema';
import { getCurrentPage } from '@/utils/helpers/searchParams';
// import { DataTable } from '@/components/ui/data-table';
import Container from '@/components/Container/Container';
import PageHeader from '@/components/PageHeader/PageHeader';
import { columns } from './columns';
import { DataTableWrapper } from '@/components/DataTableWrapper/DataTableWrapper';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const currentPage = getCurrentPage(searchParams);

  return (
    <Container>
      <PageHeader
        title='Wallet Volume'
        text='Showcasing wallets with unmatched trading volumes in the past 24 hours'
      />
      <DataTableWrapper
        fetchData={() => fetchWalletVolume(currentPage)}
        columns={columns}
        currentPage={currentPage}
      />
    </Container>
  );
}
