import ListaProdutos from "@/components/ListaProdutos";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import produtos from "@/data/produtos";
import produtos2 from "@/data/produtos2";
import { useRouter } from "next/router";
import {useContext} from "react"
import Stripe from "stripe";

export default function PaginaPesquisa({ preçosEncontrados}){
    const {adicionarProduto} = useContext(CarrinhoContext)
    const router = useRouter();
    const { search } = router.query;





    return (
        <Layout>
            <div className="flex justify-center items-center p-6 text-black">
                <h2 className=" font-black text-3xl flex justify-center p-10">Resultados da Pesquisa </h2>
                <h2 className="">{ preçosEncontrados.length} Produto(s)</h2>
            </div>
            
           <ListaProdutos produtos={ preçosEncontrados} comprar={adicionarProduto}/>
            { preçosEncontrados.length == 0 && <div className="flex justify-center font-thin text-xl text-black">Não existem produtos que correspondam à sua pesquisa.</div>}
        
        </Layout>
    )
}


export async function getServerSideProps({ query }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { search } = query;
  console.log(search);

  try {
    const preçosStripe = await stripe.prices.list({
      active: true,
      expand: ['data.product'], 
    });

    const preçosEncontrados = preçosStripe.data.filter((preço) =>
      preço.product.name.toLowerCase().includes(search.toString().toLowerCase())
    );

    return {
      props: {
        preçosEncontrados,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar preços na Stripe:", error);
    return {
      props: {
        preçosEncontrados: [],
      },
    };
  }
}