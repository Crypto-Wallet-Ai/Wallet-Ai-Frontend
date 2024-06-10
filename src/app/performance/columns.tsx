'use client';

import { ColumnDef } from '@tanstack/react-table';
import TableHeaderSortBtn from '@/components/TableHeaderSortBtn/TableHeaderSortBtn';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';
import { PerformanceResponse } from '@/utils/types/performance';

export const columns: ColumnDef<PerformanceResponse>[] = [
  {
    accessorKey: 'wallet',
    header: 'Wallet address',
    cell: ({ row }) => <WalletAddressBtn row={row} value='wallet' />,
  },
  {
    accessorKey: 'totalBuys',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total buys' />,
    cell: ({ row }) => {
      const buysCount = row.getValue('totalBuys') as number;

      return <span className='text-red-400'>{buysCount}</span>;
    },
  },
  {
    accessorKey: 'totalSells',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total sells' />,
    cell: ({ row }) => {
      const sellsCount = row.getValue('totalSells') as number;

      return <span className='text-green-400'>{sellsCount}</span>;
    },
  },
  {
    accessorKey: 'totalSwapCount',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total swaps' />,
    cell: ({ row }) => {
      const swapsCount = row.getValue('totalSwapCount') as number;

      return <span>{swapsCount}</span>;
    },
  },
  {
    accessorKey: 'totalPairsTraded',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Pairs traded' />,
    cell: ({ row }) => {
      const pairsTraded = row.getValue('totalPairsTraded') as number;

      return <span>{pairsTraded}</span>;
    },
  },
  {
    accessorKey: 'hitRate',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Profitable trades' />,
    cell: ({ row }) => {
      const hitRate = row.getValue('hitRate') as number;
      const hitRatePercent = row.original.hitRatePercentage;

      return (
        <div className='flex items-center gap-2'>
          <span className='font-numbers'>
            <span className='text-text-secondary'>(</span>
            {hitRate}
            <span className='text-text-secondary'>)</span>
          </span>
          <span className='text-green-400'>
            {Number(hitRatePercent / 100).toLocaleString(undefined, {
              style: 'percent',
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'totalVolumeUsd',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total volume ($)' />,
    cell: ({ row }) => {
      const totalVolumeUsd = row.getValue('totalVolumeUsd') as number;
      const formattedVolume = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

      return <span>{formattedVolume.format(totalVolumeUsd)}</span>;
    },
  },
  {
    accessorKey: 'totalProfitUsd',
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total profit ($)' />,
    cell: ({ row }) => {
      const totalProfitUsd = row.getValue('totalProfitUsd') as number;
      const formattedProfit = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });
      const textColor = totalProfitUsd > 0 ? 'text-green-400' : 'text-red-400';

      return <span className={textColor}>{formattedProfit.format(totalProfitUsd)}</span>;
    },
  },
];
