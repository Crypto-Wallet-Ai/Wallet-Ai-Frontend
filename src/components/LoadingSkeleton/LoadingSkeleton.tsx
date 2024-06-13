'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function LoadingSkeleton() {
  return (
    <div className='max-h-[800px] overflow-y-auto rounded-md border border-very-dark'>
      <Table>
        <TableHeader className='bg-darkest'>
          <TableRow className='border-very-dark'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <TableHead key={index} className='text-white'>
                  <div className='h-8 animate-pulse rounded bg-darkest'></div>
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10)
            .fill(0)
            .map((_, rowIndex) => (
              <TableRow key={rowIndex} className='border-very-dark'>
                {Array(5)
                  .fill(0)
                  .map((_, cellIndex) => (
                    <TableCell key={cellIndex} className='text-white'>
                      <div className='h-8 animate-pulse rounded bg-darkest'></div>
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
