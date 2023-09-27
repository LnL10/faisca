import Carrinho from "@/components/Carrinho";
import ListaProdutos from "@/components/ListaProdutos";
import ListaProdutosCarrinho from "@/components/ListaProdutosCarrinho";
import CarrinhoContext from "@/context/CarrinhoContext";
import Link from "next/link";
import { useContext } from "react";

export default function PaginCarrinho(){
    const {itens,removerProduto} = useContext(CarrinhoContext)

    return(
        <div>
            
            <Carrinho itens={itens}/>
            <ListaProdutosCarrinho produtos={itens} remover={removerProduto}/>
            
            <div className="flex p-10 justify-center w-screen">
                Finalizar Compra
            </div>

            <Link href="/produtos/produtos" className="botao">Voltar a Comprar</Link>
        </div>
    )
}