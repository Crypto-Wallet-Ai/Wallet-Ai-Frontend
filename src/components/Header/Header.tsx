import Image from 'next/image';
// import ConnectWallet from '../ConnectWallet/ConnectWallet';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-2 border-b border-violet-950 px-6 py-4 text-slate-50'>
      <div className='flex items-center gap-2'>
        <Image className='rounded-full' width={36} height={36} alt='Logo' src='/images/wallet-ai-logo.png' />
        <span className='text-xl'>WalletAi</span>
      </div>
      <div className='flex items-center gap-8'>
        <Navigation />
        {/* <ConnectWallet /> */}
      </div>
    </header>
  );
}
