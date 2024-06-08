import HashLink from '../HashLink/HashLink';

export default function WalletAddressBtn({ row, value }: { row: any; value: string }) {
  const address = row.getValue(value);

  return (
    <div className='w-[10rem] cursor-pointer rounded-full bg-very-dark py-2 text-center transition-all duration-150 hover:bg-dark'>
      <HashLink hash={address} type='address' className='text-white' />
    </div>
  );
}
