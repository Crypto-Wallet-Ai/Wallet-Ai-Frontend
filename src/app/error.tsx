'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-minus-header flex-col items-center justify-center gap-3 text-center text-white'>
      <Image className='rounded-full' width={128} height={128} alt='Logo' src='/images/wallet-ai-logo.png' />
      <h2 className='text-3xl'>Something went wrong!</h2>
      <span className='max-w-[30rem] text-center'>{error.message}</span>
      <Button className='connect-btn' onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
