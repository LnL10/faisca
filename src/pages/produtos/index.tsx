import Background from "@/components/Background";
import Carrinho from "@/components/Carrinho";
import ListaProdutos from "@/components/ListaProdutos";
import CarrinhoContext from "@/context/CarrinhoContext";
import produtos from "@/data/produtos"
import Link from "next/link";
import {useContext} from "react"

export default function PaginaProdutos(){
   const {adicionarProduto} = useContext(CarrinhoContext)

    
    return(
        <div className={`
            flex flex-col gap-10 justify-center items-center pt-5
        `}> 
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
            <Link href="/">Home</Link>
            <Link href="/produtos/verProduto">Ver Produto</Link>
        </div>
    )
}