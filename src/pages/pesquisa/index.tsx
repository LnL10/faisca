import ListaProdutos from "@/components/ListaProdutos";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import produtos from "@/data/produtos";
import produtos2 from "@/data/produtos2";
import { useRouter } from "next/router";
import {useContext} from "react"

export default function PaginaPesquisa(){
    const {adicionarProduto} = useContext(CarrinhoContext)
    const router = useRouter();
    const { search } = router.query;

    

    const filteredProducts1 = search
    ? produtos.filter((product) =>
        product.nome.toLowerCase().includes(search.toString())
      )
    : [];

    const filteredProducts2 = search
    ? produtos2.filter((product) =>
        product.nome.toLowerCase().includes(search.toString())
        )
    : [];

    const allFilteredProducts = [...filteredProducts1, ...filteredProducts2];



    return (
        <Layout>
            <div className="flex justify-center items-center p-6 text-black">
                <h2 className=" font-black text-3xl flex justify-center p-10">Resultados da Pesquisa </h2>
                <h2 className="">{allFilteredProducts.length} Produto(s)</h2>
            </div>
            
            <ListaProdutos produtos={allFilteredProducts} comprar={adicionarProduto}/>
            {allFilteredProducts.length == 0 && <div className="flex justify-center font-thin text-xl text-black">Não existem produtos que correspondam à sua pesquisa.</div>}
        
        </Layout>
    )
}