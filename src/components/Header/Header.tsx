import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-2 border-b border-violet-950 px-6 py-4 text-slate-50'>
      <div className='flex items-center gap-2'>
        <Image className='rounded-full' width={36} height={36} alt='Logo' src='/images/wallet-ai-logo.png' />
        <span>WalletAi</span>
      </div>
      <button type='button' className='rounded-md bg-violet-900 px-6 py-2 text-center'>
        Connect Wallet
      </button>
    </header>
  );
}
