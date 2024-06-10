import Container from '@/components/Container/Container';
import { DataTable } from '@/components/ui/data-table';
import fetchWalletPerformance from '@/utils/requests/fetchWalletPerformance';
import { columns } from './columns';
import PageHeader from '@/components/PageHeader/PageHeader';
import { WalletPerformances } from '@/utils/types/performance';

export default async function Page() {
  const data: WalletPerformances = await fetchWalletPerformance();
  const { walletPerformances } = data || {};

  return (
    <Container>
      <PageHeader
        title='Wallet performance'
        text='Comprehensive analysis of trading profitability and activity'
      />
      <DataTable columns={columns} data={walletPerformances} />
    </Container>
  );
}
