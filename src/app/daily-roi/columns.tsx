'use client';

import HashLink from '@/components/HashLink/HashLink';
import { ColumnDef } from '@tanstack/react-table';

// @ts-ignore
export const columns: ColumnDef<any> = [
  {
    accessorKey: 'walletAddress',
    header: 'Wallet address',
    // @ts-ignore
    cell: ({ row }) => {
      const address = row.getValue('walletAddress');

      return (
        <div className='bg-very-dark hover:bg-dark w-[10rem] cursor-pointer rounded-full py-2 text-center transition-all duration-150'>
          <HashLink hash={address} type='address' className='text-white' />
        </div>
      );
    },
  },
  {
    accessorKey: 'roiInX',
    header: 'ROI',
    // @ts-ignore
    cell: ({ row }) => {
      const roi = row.getValue('roiInX');

      return <span className='text-white'>{roi.toFixed(0)}x</span>;
    },
  },
  {
    accessorKey: 'wallet.badges',
    header: 'Total badges',
    id: 'badges',
    // @ts-ignore
    cell: ({ row }) => {
      const badges = row.getValue('badges');

      return <span>{badges.length}</span>;
    },
  },
  {
    accessorKey: 'transactionHash',
    header: 'Transaction hash',
    // @ts-ignore
    cell: ({ row }) => {
      const hash = row.getValue('transactionHash');

      return (
        <HashLink
          hash={hash}
          className='text-medium hover:text-light underline transition-all duration-150'
        />
      );
    },
  },
];
