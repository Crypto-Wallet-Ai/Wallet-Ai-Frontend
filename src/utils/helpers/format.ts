export const formatAddress = (address: string, length = 4) =>
  `${address.slice(0, length + 2)}...${address.slice(-length)}`;

export const append0xToHash = (hash: string) => {
  if (!hash) return '';
  if (hash.startsWith('0x')) return hash;

  return `0x${hash}`;
};
