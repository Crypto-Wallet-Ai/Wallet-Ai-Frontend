import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-not-found flex flex-col items-center justify-center gap-3 text-white'>
      <Image className='rounded-full' width={128} height={128} alt='Logo' src='/images/wallet-ai-logo.png' />
      <h2 className='text-3xl font-semibold text-medium'>Oops, something went wrong</h2>
      <p className='text-xl text-medium'>Could not find requested resource</p>
      <Link href='/'>
        <Button className='connect-btn'>Return Home</Button>
      </Link>
    </div>
  );
}
