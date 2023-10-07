import ListaProdutos from "@/components/ListaProdutos";
import Layout from "@/components/estrutura/Layout";
import ListaLigas from "@/components/ligas/ListaLigas";
import CarrinhoContext from "@/context/CarrinhoContext";
import ligas from "@/data/ligas";
import produtos from "@/data/produtos"
import Link from "next/link";
import {useContext} from "react"

export default function PaginaProdutos(){
   const {adicionarProduto} = useContext(CarrinhoContext)

    
    return(
        <Layout>
        <div className={`
            flex flex-col gap-10 justify-center items-center pt-5 text-black
        `}> 
            <ListaLigas ligas={ligas}/>

            <h1 className="flex w-1/2 font-light text-xl text-center">Se procuras um produto específico e não encontras na nossa página envia-nos uma mensagem privada com esse mesmo artigo, porque fazemos questão de mandar vir especialmente para ti.</h1> 

        </div>


            
        </Layout>
    )
}