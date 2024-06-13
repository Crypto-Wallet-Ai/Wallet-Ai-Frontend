'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Navigation() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isDesktop ? (
        <nav>
          <ul className='flex items-center gap-6 text-white'>
            <li className='text-very-light hover:text-white hover:underline'>
              <Link href='/'>Daily Roi</Link>
            </li>
            <li className='text-very-light hover:text-white hover:underline'>
              <Link href='/daily-volume'>Daily volume</Link>
            </li>
            <li className='text-very-light hover:text-white hover:underline'>
              <Link href='/performance'>Performance</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}
