import Header from '@/components/estrutura/Header'
import ListaProdutos from '@/components/ListaProdutos'
import { useContext } from 'react'
import CarrinhoContext from '@/context/CarrinhoContext'
import produtos2 from "@/data/produtos2"
import Faq from '@/components/Faq/Faq'
import Layout from '@/components/estrutura/Layout'





export default function Home() {
  const {adicionarProduto} = useContext(CarrinhoContext)
  
  return (
    <Layout>
      <div className='flex flex-col bg-white'>
          <div className="">
            <video className="object-fill" src='https://cdn.shopify.com/videos/c/o/v/2b78f487c1914186990036afb97eb1d5.mp4' loop autoPlay muted ></video>
          </div>
          
          <h1 className="flex justify-center p-5 text-xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-black to-red-600 ">
              PROMOÇÕES
            </span>
          </h1>


          <ListaProdutos produtos={produtos2} comprar={adicionarProduto}/>
          <span className='flex justify-center text-black font-black pt-10'>PERGUNTAS FREQUENTES</span>
          <div className=' flex justify-center pt-5 pb-10'>
            <Faq/>
          </div>
      </div>
    </Layout>
      
    )
}
