type PageHeaderProps = {
  title: string;
  text: string;
};

export default function PageHeader({ title, text }: PageHeaderProps) {
  return (
    <div className='mb-4 flex flex-col gap-2 text-center text-white sm:text-left'>
      <h1 className='text-4xl uppercase'>{title}</h1>
      <span className='text-xl'>{text}</span>
    </div>
  );
}
