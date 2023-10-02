import Carrinho from "@/components/Carrinho";
import ProdutoDetalhe from "@/components/ProdutoDetalhes";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import Link from "next/link";
import { useRouter } from "next/router";
import {useContext} from "react"


export default function VerProduto(){
    const {itens,itemSelecionado,adicionarProduto} = useContext(CarrinhoContext)
    
    const router = useRouter();
    const {name} = router.query;
    
    return(
        <Layout>
            <div className="flex justify-center ">
            <ProdutoDetalhe produto={itemSelecionado} comprar={adicionarProduto}/>
            </div>
            
            <Link className="botao justify-end" href="/compra/envio">Finalizar Compra</Link>
            
        </Layout>
    )
}