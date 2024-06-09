import { ArrowUpDown } from 'lucide-react';
import { Button } from '../ui/button';

export default function TableHeaderSortBtn({ header, column }: { header: string; column: any }) {
  return (
    <Button
      className='p-0'
      variant='ghost'
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {header}
      <ArrowUpDown className='ml-2 h-4 w-4' />
    </Button>
  );
}
