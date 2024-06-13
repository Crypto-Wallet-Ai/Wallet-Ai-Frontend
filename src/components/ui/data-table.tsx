'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from './button';

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  currentPage?: number;
};

export function DataTable<TData, TValue>({ columns, data, currentPage = 0 }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    router.push(`?page=${currentPage + 1}`);
  };

  return (
    <div>
      <div className='scrollbar-thin max-h-[800px] overflow-y-auto rounded-md border border-very-dark'>
        <Table>
          <TableHeader className='bg-darkest'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className='border-very-dark'>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='text-white'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className='border-very-dark'
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='text-white'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-center space-x-2 py-4 text-white sm:justify-end'>
        <Button variant='outline' size='sm' onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <span>{currentPage + 1}</span>
        <Button variant='outline' size='sm' onClick={handleNextPage} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
}
