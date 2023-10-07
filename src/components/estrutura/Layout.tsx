import Header from '@/components/estrutura/Header';
import Footer from './Footer';

export default function Layout({ children }:any) {
  return (
    <div className='flex flex-col bg-white  w-screen h-full'>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}