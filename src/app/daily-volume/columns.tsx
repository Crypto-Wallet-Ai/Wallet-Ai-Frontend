'use client';

import { ColumnDef } from '@tanstack/react-table';
import TableHeaderSortBtn from '@/components/TableHeaderSortBtn/TableHeaderSortBtn';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';

// @ts-ignore
export const columns: ColumnDef<any> = [
  {
    accessorKey: 'rank',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Rank' />,
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
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Volume (ETH)' />,
    // @ts-ignore
    cell: ({ row }) => {
      const volumeInEth = row.getValue('volumeInEth');

      return <span>{new Intl.NumberFormat().format(volumeInEth)}</span>;
    },
  },
  {
    accessorKey: 'volumeInUsd',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Volume ($)' />,
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
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Volume (stable)' />,
    // @ts-ignore
    cell: ({ row }) => {
      const volumeStable = row.getValue('volumeInStableCoin');

      return <span>{new Intl.NumberFormat().format(volumeStable)}</span>;
    },
  },
  {
    accessorKey: 'wallet.badges',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total badges' />,
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
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Eth balance' />,
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
