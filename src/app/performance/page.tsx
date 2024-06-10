import Container from '@/components/Container/Container';
import { DataTable } from '@/components/ui/data-table';
import fetchWalletPerformance from '@/utils/requests/fetchWalletPerformance';
import { columns } from './columns';
import PageHeader from '@/components/PageHeader/PageHeader';
import { type WalletPerformance } from '@/utils/validations/performanceSchema';

export default async function Page() {
  const data: WalletPerformance[] = await fetchWalletPerformance();

  return (
    <Container>
      <PageHeader
        title='Wallet performance'
        text='Comprehensive analysis of trading profitability and activity'
      />
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
