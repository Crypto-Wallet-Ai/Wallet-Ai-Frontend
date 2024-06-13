'use client';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';

export default function MobileMenu() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger className='text-white'>
        <HiOutlineMenuAlt3 size={30} color='var(--very-light)' />
      </DrawerTrigger>
      <DrawerContent className='text-white'>Some draw content</DrawerContent>
    </Drawer>
  );
}
