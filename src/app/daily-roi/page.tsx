import fetchWalletRoi from '@/utils/requests/fetchWalletRoi';
import { type WalletRoi } from '@/utils/validations/roiSchema';
import { DataTable } from '@/components/ui/data-table';
import PageHeader from '@/components/PageHeader/PageHeader';
import Container from '@/components/Container/Container';
import { columns } from './columns';

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const pageParam = searchParams?.page;
  const currentPage = Array.isArray(pageParam) ? parseInt(pageParam[0], 10) : parseInt(pageParam || '0', 10);

  const data: WalletRoi[] = await fetchWalletRoi(currentPage);

  return (
    <Container>
      <PageHeader title='wallet roi' text='Discover wallets with the highest ROI in the last 24 hours' />
      <DataTable columns={columns} data={data} currentPage={currentPage} />
    </Container>
  );
}
