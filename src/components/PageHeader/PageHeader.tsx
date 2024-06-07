type PageHeaderProps = {
  title: string;
  text: string;
};

export default function PageHeader({ title, text }: PageHeaderProps) {
  return (
    <div className='mb-4 flex flex-col gap-2 text-white'>
      <h1 className='text-3xl uppercase'>{title}</h1>
      <span>{text}</span>
    </div>
  );
}
