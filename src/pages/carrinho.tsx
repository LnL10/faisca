import Carrinho from "@/components/Carrinho";
import ListaProdutos from "@/components/ListaProdutos";
import CarrinhoContext from "@/context/CarrinhoContext";
import Link from "next/link";
import { useContext } from "react";

export default function PaginCarrinho(){
    const {itens,adicionarProduto} = useContext(CarrinhoContext)

    return(
        <div>
            
            <Carrinho itens={itens}/>
    
            <Link href="/produtos/produtos" className="botao">Voltar a Comprar</Link>

        </div>
    )
}