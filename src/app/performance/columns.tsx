'use client';

import { ColumnDef } from '@tanstack/react-table';
import TableHeaderSortBtn from '@/components/TableHeaderSortBtn/TableHeaderSortBtn';
import WalletAddressBtn from '@/components/WalletAddressBtn/WalletAddressBtn';

// @ts-ignore
export const columns: ColumnDef<any> = [
  {
    accessorKey: 'wallet',
    header: 'Wallet address',
    // @ts-ignore
    cell: ({ row }) => <WalletAddressBtn row={row} value='wallet' />,
  },
  {
    accessorKey: 'totalBuys',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total buys' />,
    // @ts-ignore
    cell: ({ row }) => {
      const buysCount = row.getValue('totalBuys');

      return <span className='text-red-400'>{buysCount}</span>;
    },
  },
  {
    accessorKey: 'totalSells',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total sells' />,
    // @ts-ignore
    cell: ({ row }) => {
      const sellsCount = row.getValue('totalSells');

      return <span className='text-green-400'>{sellsCount}</span>;
    },
  },
  {
    accessorKey: 'totalSwapCount',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total swaps' />,
    // @ts-ignore
    cell: ({ row }) => {
      const swapsCount = row.getValue('totalSwapCount');

      return <span>{swapsCount}</span>;
    },
  },
  {
    accessorKey: 'totalPairsTraded',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Pairs traded' />,
    // @ts-ignore
    cell: ({ row }) => {
      const pairsTraded = row.getValue('totalPairsTraded');

      return <span>{pairsTraded}</span>;
    },
  },
  {
    accessorKey: 'hitRate',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Profitable trades' />,
    // @ts-ignore
    cell: ({ row }) => {
      const hitRate = row.getValue('hitRate');
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
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total volume ($)' />,
    // @ts-ignore
    cell: ({ row }) => {
      const totalVolumeUsd = row.getValue('totalVolumeUsd');
      const formattedVolume = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

      return <span>{formattedVolume.format(totalVolumeUsd)}</span>;
    },
  },
  {
    accessorKey: 'totalProfitUsd',
    // @ts-ignore
    header: ({ column }) => <TableHeaderSortBtn column={column} header='Total profit ($)' />,
    // @ts-ignore
    cell: ({ row }) => {
      const totalProfitUsd = row.getValue('totalProfitUsd');
      const formattedProfit = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });
      const textColor = totalProfitUsd > 0 ? 'text-green-400' : 'text-red-400';

      return <span className={textColor}>{formattedProfit.format(totalProfitUsd)}</span>;
    },
  },
];
