import { etherscanBaseUrl } from '@/utils/constants/urls';
import { append0xToHash, formatAddress } from '@/utils/helpers/format';

type HashType = 'tx' | 'address';

type HashLinkProps = {
  hash: string;
  className?: string;
  type?: HashType;
};

export default function HashLink({ hash, className, type = 'tx' }: HashLinkProps) {
  const appendedHash = append0xToHash(hash);

  return (
    <a
      className={className}
      href={`${etherscanBaseUrl}/${type}/${appendedHash}`}
      target='_blank'
      rel='noreferrer'
    >
      {formatAddress(appendedHash)}
    </a>
  );
}
