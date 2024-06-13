'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-not-found flex flex-col items-center justify-center gap-3 text-white'>
      <h2 className='text-3xl'>Something went wrong!</h2>
      <span>{error.message}</span>
      <Button className='connect-btn' onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
