import Carrinho from "@/components/Carrinho";
import ProdutoDetalhe from "@/components/ProdutoDetalhes";
import CarrinhoContext from "@/context/CarrinhoContext";
import Link from "next/link";
import {useContext} from "react"

export default function verProduto(){
    const {itens,itemSelecionado,adicionarProduto} = useContext(CarrinhoContext)
    return (
        <div>
            <Carrinho itens ={itens}/>
            <ProdutoDetalhe produto={itemSelecionado} comprar={adicionarProduto}/>
            <Link href="/compra/envio">Finalizar Compra</Link>
        </div>
    )
}