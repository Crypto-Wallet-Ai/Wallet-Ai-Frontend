'use client';

import { ConnectButton, darkTheme } from 'thirdweb/react';
import client, { chain, wallets } from '@/utils/constants/thirdwebClient';

export default function ConnectWallet() {
  const customTheme = darkTheme({
    colors: {
      accentText: 'var(--very-dark)',
      accentButtonBg: 'var(--darkest)',
      modalBg: 'var(--background)',
      borderColor: 'var(--darkest)',
      separatorLine: 'var(--darkest)',
      primaryText: 'var(--text-white)',
      secondaryButtonBg: 'var(--very-dark)',
      secondaryButtonHoverBg: 'var(--very-dark)',
      secondaryButtonText: 'var(--text-white)',
      secondaryIconColor: 'var(--very-dark)',
      secondaryIconHoverColor: '#a855f7',
      secondaryIconHoverBg: 'var(--darkest)',
    },
  });
  return (
    <div>
      <ConnectButton
        client={client}
        chain={chain}
        connectButton={{ className: 'connect-btn' }}
        detailsButton={{ className: 'connect-btn connected-btn' }}
        theme={customTheme}
        connectModal={{
          size: 'wide',
          title: 'Choose Wallet',
          showThirdwebBranding: false,
        }}
        wallets={wallets}
      />
    </div>
  );
}
