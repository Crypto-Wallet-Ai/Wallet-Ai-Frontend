import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className='flex items-center gap-6 text-white'>
        <li className='text-very-light hover:text-white hover:underline'>
          <Link href='/daily-roi'>Daily Roi</Link>
        </li>
        <li className='text-very-light hover:text-white hover:underline'>
          <Link href='/daily-volume'>Daily volume</Link>
        </li>
        <li className='text-very-light hover:text-white hover:underline'>
          <Link href='/performance'>Performance</Link>
        </li>
      </ul>
    </nav>
  );
}
