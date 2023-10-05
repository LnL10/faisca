import ProdutoDetalhe from "@/components/ProdutoDetalhes";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import { useRouter } from "next/router";
import {useContext} from "react";

import produtos from "@/data/produtos";
import produtos2 from "@/data/produtos2";


export default function VerProduto(){


    const {adicionarProduto} = useContext(CarrinhoContext)
    
    const router = useRouter();
    const {name} = router.query;

    const produtoEncontrado = produtos.find((produto) => produto.nome === name) || produtos2.find((produto) => produto.nome === name);
     
    
    return(
        <Layout>
            <div className="flex justify-center h-screen">
            <ProdutoDetalhe produto={produtoEncontrado} comprar={adicionarProduto}/>
            </div>
        </Layout>
    )
}