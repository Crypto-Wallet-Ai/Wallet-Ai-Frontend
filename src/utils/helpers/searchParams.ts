export const getCurrentPage = (searchParams?: Record<string, string | string[]>): number => {
  const pageParam = searchParams?.page;
  return Array.isArray(pageParam) ? parseInt(pageParam[0], 10) : parseInt(pageParam || '0', 10);
};
