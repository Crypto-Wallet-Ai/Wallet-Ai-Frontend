export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='container mx-auto px-8 py-10'>{children}</div>;
}
