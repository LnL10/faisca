import Link from 'next/link'
import Header from '@/components/estrutura/Header'
import ListaProdutos from '@/components/ListaProdutos'
import { useContext } from 'react'
import CarrinhoContext from '@/context/CarrinhoContext'
import produtos2 from "@/data/produtos2"
import produtos from '@/data/produtos'




export default function Home() {
  const {adicionarProduto} = useContext(CarrinhoContext)
  
  return (
      <div  className='flex flex-col'>
          <Header/>
          <span className='flex justify-center w-full'>LA LIGA</span>
          <ListaProdutos produtos={produtos2} comprar={adicionarProduto}/>
          <span className='flex justify-center w-full'>LIGA PORTUGUESA</span>
          <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>

      </div>
    )
}
