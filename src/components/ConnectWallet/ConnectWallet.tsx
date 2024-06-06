import { ConnectButton } from 'thirdweb/react';
import client, { chain } from '@/utils/constants/thirdwebClient';

export default function ConnectWallet() {
  return (
    <div>
      <ConnectButton
        connectButton={{ className: 'bg-violet-900 !important' }}
        client={client}
        chain={chain}
      />
    </div>
  );
}
