import ListaProdutos from "@/components/ListaProdutos";
import ProdutoItem from "@/components/ProdutoItem";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import produtos from "@/data/produtos";
import { useRouter } from "next/router";
import {useContext, useState} from "react"

export default function PaginaPesquisa(){
    const {adicionarProduto} = useContext(CarrinhoContext)
    const router = useRouter();
    const { search } = router.query;

    

    const filteredProducts = search
    ? produtos.filter((product) =>
        product.nome.toLowerCase().includes(search.toString())
      )
    : [];
    console.log(filteredProducts)


    return (
        <Layout>
            <span className="text-black font-black text-3xl flex justify-center p-10">Resultados da Pesquisa</span>
                    <ListaProdutos produtos={filteredProducts} comprar={adicionarProduto}/>
        </Layout>
    )
}