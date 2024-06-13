import { Suspense } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../ui/data-table';
import { LoadingSkeleton } from '../LoadingSkeleton/LoadingSkeleton';

type DataFetcherProps<T> = {
  fetchData: () => Promise<T>;
  children: (data: T) => React.ReactNode;
};

export async function DataFetcher<T>({ fetchData, children }: DataFetcherProps<T>) {
  const data = await fetchData();
  return <>{children(data)}</>;
}

type DataTableWrapperProps<TData, TValue> = {
  fetchData: () => Promise<TData[]>;
  columns: ColumnDef<TData, TValue>[];
  currentPage?: number;
  pageSize?: number;
};

export function DataTableWrapper<TData, TValue>({
  fetchData,
  columns,
  currentPage = 0,
}: DataTableWrapperProps<TData, TValue>) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <DataFetcher fetchData={fetchData}>
        {(data) => <DataTable columns={columns} data={data} currentPage={currentPage} />}
      </DataFetcher>
    </Suspense>
  );
}
