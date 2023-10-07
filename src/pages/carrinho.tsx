import Carrinho from "@/components/Carrinho";
import ListaProdutos from "@/components/ListaProdutos";
import ListaProdutosCarrinho from "@/components/ListaProdutosCarrinho";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import Link from "next/link";
import { useContext } from "react";

export default function PaginCarrinho(){
    const {itens,removerProduto} = useContext(CarrinhoContext)

    return(
        <Layout >
            <div className="flex flex-col items-center pt-6 pb-10 h-screen">
                
                <Carrinho itens={itens}/>
                

                <ListaProdutosCarrinho produtos={itens} remover={removerProduto}/>
            </div>
        </Layout>
    )
}