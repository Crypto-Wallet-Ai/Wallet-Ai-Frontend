'use client';

import { ColumnDef } from '@tanstack/react-table';
import HashLink from '@/components/HashLink/HashLink';
import TableHeaderSortBtn from '@/components/TableHeaderSortBtn/TableHeaderSortBtn';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';

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
    header: ({ column }) => <TableHeaderSortBtn column={column} header='ROI' />,
    // @ts-ignore
    cell: ({ row }) => {
      const roi = row.getValue('roiInX');

      return <span className='text-white'>{roi.toFixed(0)}x</span>;
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
