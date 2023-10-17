import ListaProdutos from "@/components/ListaProdutos";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import ligas from "@/data/ligas";
import produtos from "@/data/produtos";
import produtos2 from "@/data/produtos2";
import { useRouter } from "next/router";
import { useContext } from "react";
import Stripe from "stripe";

export default function VerLiga({produtos1}){

    const router = useRouter();
    const {id} = router.query;

    const {adicionarProduto} = useContext(CarrinhoContext)

    const ligaEncontrada = ligas.find((liga) => liga.id.toString() == id);


    

    return(
        
        <Layout>
            <div className="text-black">
                <div className="flex justify-center items-center gap-4 p-6">
                    
                    <h1 className="font-extrabold text-2xl ">{ligaEncontrada?.nome}</h1>
                    <h2 className="">{produtos1.length} Produto(s)</h2>

                </div>
                
                <div>
                    <ListaProdutos produtos={produtos1} comprar={adicionarProduto}/>
                </div>
            </div>
        </Layout>
    )

}



export async function getServerSideProps({ params }) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
    const { data: produtosDoStripe } = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
    });
  
    const produtosDaLiga = produtosDoStripe.filter((produto) => {
      return produto.product.metadata.liga_id === params.id;
    });
  
    return {
      props: {
        produtos1: produtosDaLiga,
      },
    };
}