import fetchWalletRoi from '@/utils/requests/fetchWalletRoi';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import PageHeader from '@/components/PageHeader/PageHeader';
import Container from '@/components/Container/Container';

export default async function Page() {
  const data = await fetchWalletRoi(0);
  const walletRoi = data.walletRoi;

  return (
    <Container>
      <PageHeader title='wallet roi' text='Discover wallets with the highest ROI in the last 24 hours' />
      {/* @ts-ignore */}
      <DataTable columns={columns} data={walletRoi} />
    </Container>
  );
}
