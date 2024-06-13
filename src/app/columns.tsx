'use client';

import { ColumnDef } from '@tanstack/react-table';
import HashLink from '@/components/HashLink/HashLink';
import TableHeaderSortBtn from '@/components/TableHeaderSortBtn/TableHeaderSortBtn';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { type WalletRoi, type Badge } from '@/utils/validations/roiSchema';

export const columns: ColumnDef<WalletRoi>[] = [
  {
    accessorKey: 'walletAddress',
    header: 'Wallet address',
    cell: ({ row }) => <WalletAddressBtn row={row} value='walletAddress' />,
  },
  {
    accessorKey: 'roiInX',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='ROI' />,
    cell: ({ row }) => {
      const roi = row.getValue('roiInX') as number;

      return <span className='text-white'>{roi.toFixed(0)}x</span>;
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
    accessorKey: 'transactionHash',
    header: 'Transaction hash',
    cell: ({ row }) => {
      const hash = row.getValue('transactionHash') as string;

      return (
        <HashLink
          hash={hash}
          className='text-medium underline transition-all duration-150 hover:text-light'
        />
      );
    },
  },
];
