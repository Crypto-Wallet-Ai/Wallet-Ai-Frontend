'use client';

import HashLink from '@/components/HashLink/HashLink';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { ColumnDef } from '@tanstack/react-table';

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
          className='text-medium underline transition-all duration-150 hover:text-light'
        />
      );
    },
  },
];
