import fetchWalletRoi from '@/utils/requests/getWalletRoi';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

export default async function Page() {
  const data = await fetchWalletRoi(0);
  const walletRoi = data.walletRoi;

  return (
    <div className='container mx-auto py-10'>
      {/* @ts-ignore */}
      <DataTable columns={columns} data={walletRoi} />
    </div>
  );
}
