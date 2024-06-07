import { Payment, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '8ed52',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: 'ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '722f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed5',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '7252f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '72852f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728d52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '72ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '78ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '28ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed2f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
