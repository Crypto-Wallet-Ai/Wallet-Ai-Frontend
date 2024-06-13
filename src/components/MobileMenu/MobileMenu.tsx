'use client';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '../ui/drawer';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger className='text-white'>
        <HiOutlineMenuAlt3 size={30} color='var(--very-light)' />
      </DrawerTrigger>
      <DrawerContent className='rounded-bl-lg rounded-tl-lg border-very-dark text-white'>
        <DrawerHeader className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              className='rounded-full'
              width={36}
              height={36}
              alt='Logo'
              src='/images/wallet-ai-logo.png'
            />
            <span>WalletAi</span>
          </div>
          <DrawerClose className='cursor-pointer rounded-full p-1 transition-all duration-150 hover:bg-very-dark'>
            <CgClose size={24} />
          </DrawerClose>
        </DrawerHeader>
        <nav>
          <ul className='flex flex-col items-center py-4 text-white'>
            <li className='flex w-full justify-center text-very-light transition-all duration-150 hover:bg-very-dark hover:text-white'>
              <DrawerClose asChild className='w-full py-4 text-center'>
                <Link href='/'>Daily Roi</Link>
              </DrawerClose>
            </li>
            <li className='flex w-full justify-center text-very-light transition-all duration-150 hover:bg-very-dark hover:text-white'>
              <DrawerClose asChild className='w-full py-4 text-center'>
                <Link href='/daily-volume'>Daily volume</Link>
              </DrawerClose>
            </li>
            <li className='flex w-full justify-center text-very-light transition-all duration-150 hover:bg-very-dark hover:text-white'>
              <DrawerClose asChild className='w-full py-4 text-center'>
                <Link href='/performance'>Performance</Link>
              </DrawerClose>
            </li>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
