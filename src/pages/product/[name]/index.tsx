import Carrinho from "@/components/Carrinho";
import ProdutoDetalhe from "@/components/ProdutoDetalhes";
import CarrinhoContext from "@/context/CarrinhoContext";
import Link from "next/link";
import { useRouter } from "next/router";
import {useContext} from "react"


export default function VerProduto(){
    const {itens,itemSelecionado,adicionarProduto} = useContext(CarrinhoContext)
    
    const router = useRouter();
    const {name} = router.query;
    
    return(
        <div>
            <Carrinho itens ={itens}/>
            <ProdutoDetalhe produto={itemSelecionado} comprar={adicionarProduto}/>
            <Link href="/compra/envio">Finalizar Compra</Link>
            
        </div>
    )
}