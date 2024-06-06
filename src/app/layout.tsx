import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThirdwebProvider } from '@/utils/constants/thirdwebProvider';
import './globals.css';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wallet Ai',
  description: 'Profitabliliy data from top wallets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-background`}>
        <ThirdwebProvider>
          <Header />
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
