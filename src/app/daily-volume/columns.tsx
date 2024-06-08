'use client';

import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { ColumnDef } from '@tanstack/react-table';

// @ts-ignore
export const columns: ColumnDef<any> = [
  {
    accessorKey: 'rank',
    header: 'Rank',
  },
  {
    accessorKey: 'walletAddress',
    header: 'Wallet address',
    // @ts-ignore
    cell: ({ row }) => <WalletAddressBtn row={row} value='walletAddress' />,
  },
  {
    accessorKey: 'volumeInEth',
    header: 'Volume (ETH)',
    // @ts-ignore
    cell: ({ row }) => {
      const volumeInEth = row.getValue('volumeInEth');

      return <span>{new Intl.NumberFormat().format(volumeInEth)}</span>;
    },
  },
  {
    accessorKey: 'volumeInUsd',
    header: 'Volume ($)',
    // @ts-ignore
    cell: ({ row }) => {
      const volumeInUsd = row.getValue('volumeInUsd');
      const formattedVolumeInUsd = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

      return <span>{formattedVolumeInUsd.format(volumeInUsd)}</span>;
    },
  },
  {
    accessorKey: 'volumeInStableCoin',
    header: 'Volume (Stable)',
    // @ts-ignore
    cell: ({ row }) => {
      const volumeStable = row.getValue('volumeInStableCoin');

      return <span>{new Intl.NumberFormat().format(volumeStable)}</span>;
    },
  },
  {
    accessorKey: 'wallet.badges',
    header: 'Total badges',
    id: 'badges',
    // @ts-ignore
    cell: ({ row }) => {
      const badges = row.getValue('badges');

      return <span>{badges?.length}</span>;
    },
  },
  {
    accessorKey: 'wallet.balances',
    header: 'Eth balance',
    id: 'balances',
    // @ts-ignore
    cell: ({ row }) => {
      const balances = row.getValue('balances');
      const ethToken = balances && balances?.find((token: any) => token?.tokenAddress === '0x');
      const ethBalance = ethToken?.balance || 0;
      console.log({ ethToken, ethBalance, balances });

      return <span>{new Intl.NumberFormat().format(ethBalance)}</span>;
    },
  },
];
