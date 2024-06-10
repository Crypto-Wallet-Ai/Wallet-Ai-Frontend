'use client';

import { ColumnDef } from '@tanstack/react-table';
import TableHeaderSortBtn from '@/components/TableHeaderSortBtn/TableHeaderSortBtn';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { WalletVolume } from '@/utils/validations/volumeSchema';
import { Badge, Balance } from '@/utils/validations/roiSchema';

export const columns: ColumnDef<WalletVolume>[] = [
  {
    accessorKey: 'rank',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Rank' />,
  },
  {
    accessorKey: 'walletAddress',
    header: 'Wallet address',
    cell: ({ row }) => <WalletAddressBtn row={row} value='walletAddress' />,
  },
  {
    accessorKey: 'volumeInEth',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Volume (ETH)' />,
    cell: ({ row }) => {
      const volumeInEth = row.getValue('volumeInEth') as number;

      return <span>{new Intl.NumberFormat().format(volumeInEth)}</span>;
    },
  },
  {
    accessorKey: 'volumeInUsd',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Volume ($)' />,
    cell: ({ row }) => {
      const volumeInUsd = row.getValue('volumeInUsd') as number;
      const formattedVolumeInUsd = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

      return <span>{formattedVolumeInUsd.format(volumeInUsd)}</span>;
    },
  },
  {
    accessorKey: 'volumeInStableCoin',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Volume (stable)' />,
    cell: ({ row }) => {
      const volumeStable = row.getValue('volumeInStableCoin') as number;

      return <span>{new Intl.NumberFormat().format(volumeStable)}</span>;
    },
  },
  {
    accessorKey: 'wallet.badges',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total badges' />,
    id: 'badges',
    cell: ({ row }) => {
      const badges = row.getValue('badges') as Badge[];

      return <span>{badges?.length}</span>;
    },
  },
  {
    accessorKey: 'wallet.balances',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Eth balance' />,
    id: 'balances',
    cell: ({ row }) => {
      const balances = row.getValue('balances') as Balance[];
      const ethToken = balances && balances?.find((token: Balance) => token?.tokenAddress === '0x');
      const ethBalance = ethToken?.balance || 0;

      return <span>{new Intl.NumberFormat().format(Number(ethBalance))}</span>;
    },
  },
];
