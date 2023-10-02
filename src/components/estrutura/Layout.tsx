import Header from '@/components/estrutura/Header';

export default function Layout({ children }:any) {
  return (
    <div className='flex flex-col bg-white'>
      <Header />
      {children}
    </div>
  );
}