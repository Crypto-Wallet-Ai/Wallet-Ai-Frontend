'use client';

import HashLink from '@/components/HashLink/HashLink';
import { Button } from '@/components/ui/button';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

// @ts-ignore
export const columns: ColumnDef<any> = [
  {
    accessorKey: 'walletAddress',
    header: 'Wallet address',
    // @ts-ignore
    cell: ({ row }) => <WalletAddressBtn row={row} value='walletAddress' />,
  },
  {
    accessorKey: 'roiInX',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          ROI
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // @ts-ignore
    cell: ({ row }) => {
      const roi = row.getValue('roiInX');

      return <span className='text-white'>{roi.toFixed(0)}x</span>;
    },
  },
  {
    accessorKey: 'wallet.badges',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Total badges
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    id: 'badges',
    // @ts-ignore
    cell: ({ row }) => {
      const badges = row.getValue('badges');

      return <span>{badges?.length}</span>;
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
          className='text-medium underline transition-all duration-150 hover:text-light'
        />
      );
    },
  },
];
