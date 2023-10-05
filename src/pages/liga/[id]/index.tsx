import ListaProdutos from "@/components/ListaProdutos";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import ligas from "@/data/ligas";
import produtos from "@/data/produtos";
import produtos2 from "@/data/produtos2";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function VerLiga(){

    const router = useRouter();
    const {id} = router.query;

    const {adicionarProduto} = useContext(CarrinhoContext)

    const ligaEncontrada = ligas.find((liga) => liga.id.toString() == id);

    const produtosDaLiga = produtos
    .filter((produto) => produto.ligaId.toString() === id)
    .concat(produtos2.filter((produto) => produto.ligaId.toString() === id))

    

    return(
        
        <Layout>
            <div className="text-black">
                <div className="flex justify-center items-center gap-4 p-6">
                    
                    <h1 className="font-extrabold text-2xl ">{ligaEncontrada?.nome}</h1>
                    <h2 className="">{produtosDaLiga.length} Produto(s)</h2>

                </div>
                
                <div>
                    <ListaProdutos produtos={produtosDaLiga} comprar={adicionarProduto}/>
                </div>
            </div>
        </Layout>
    )

}