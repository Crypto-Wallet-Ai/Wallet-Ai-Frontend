import fetchWalletRoi from '@/utils/requests/fetchWalletRoi';
import { type WalletRoi } from '@/utils/validations/roiSchema';
import { getCurrentPage } from '@/utils/helpers/searchParams';
import { DataTable } from '@/components/ui/data-table';
import PageHeader from '@/components/PageHeader/PageHeader';
import Container from '@/components/Container/Container';
import { columns } from './columns';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const currentPage = getCurrentPage(searchParams);

  const data: WalletRoi[] = await fetchWalletRoi(currentPage);

  return (
    <Container>
      <PageHeader title='wallet roi' text='Discover wallets with the highest ROI in the last 24 hours' />
      <DataTable columns={columns} data={data} currentPage={currentPage} />
    </Container>
  );
}
