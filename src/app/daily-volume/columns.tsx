'use client';

import { Button } from '@/components/ui/button';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

// @ts-ignore
export const columns: ColumnDef<any> = [
  {
    accessorKey: 'rank',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Rank
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'walletAddress',
    header: 'Wallet address',
    // @ts-ignore
    cell: ({ row }) => <WalletAddressBtn row={row} value='walletAddress' />,
  },
  {
    accessorKey: 'volumeInEth',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Volume (ETH)
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // @ts-ignore
    cell: ({ row }) => {
      const volumeInEth = row.getValue('volumeInEth');

      return <span>{new Intl.NumberFormat().format(volumeInEth)}</span>;
    },
  },
  {
    accessorKey: 'volumeInUsd',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Volume ($)
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // @ts-ignore
    cell: ({ row }) => {
      const volumeInUsd = row.getValue('volumeInUsd');
      const formattedVolumeInUsd = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

      return <span>{formattedVolumeInUsd.format(volumeInUsd)}</span>;
    },
  },
  {
    accessorKey: 'volumeInStableCoin',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Volume (Stable)
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // @ts-ignore
    cell: ({ row }) => {
      const volumeStable = row.getValue('volumeInStableCoin');

      return <span>{new Intl.NumberFormat().format(volumeStable)}</span>;
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
    accessorKey: 'wallet.balances',
    // @ts-ignore
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Eth balance
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    id: 'balances',
    // @ts-ignore
    cell: ({ row }) => {
      const balances = row.getValue('balances');
      const ethToken = balances && balances?.find((token: any) => token?.tokenAddress === '0x');
      const ethBalance = ethToken?.balance || 0;

      return <span>{new Intl.NumberFormat().format(ethBalance)}</span>;
    },
  },
];
