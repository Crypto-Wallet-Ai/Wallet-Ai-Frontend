import { RoiResponse } from '@/utils/types/roi';
import fetchWalletRoi from '@/utils/requests/fetchWalletRoi';
import { DataTable } from '@/components/ui/data-table';
import PageHeader from '@/components/PageHeader/PageHeader';
import Container from '@/components/Container/Container';
import { columns } from './columns';

export default async function Page() {
  const data = await fetchWalletRoi(0);
  const walletRoi: RoiResponse[] = data.walletRoi;

  return (
    <Container>
      <PageHeader title='wallet roi' text='Discover wallets with the highest ROI in the last 24 hours' />
      <DataTable columns={columns} data={walletRoi} />
    </Container>
  );
}
