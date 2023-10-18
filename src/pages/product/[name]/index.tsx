import ProdutoDetalhe from "@/components/ProdutoDetalhes";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import { useRouter } from "next/router";
import {useContext} from "react";


import Stripe from "stripe";


export default function VerProduto({produtoEncontrado,precoEncontrado}){


    const {adicionarProduto} = useContext(CarrinhoContext)

    
    return(
        <Layout>
            <div className="flex justify-center h-screen">
            <ProdutoDetalhe produto={produtoEncontrado} comprar={adicionarProduto} precoEncontrado={precoEncontrado}/>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({ params }) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
    
    const produtoId = params.name;
    console.log(produtoId)

    const produtoEncontrado = await stripe.products.retrieve(produtoId);
    const priceId = produtoEncontrado.default_price;
  
    // Busque o preço com base no ID do preço
    const precoEncontrado = await stripe.prices.retrieve(priceId);

    return {
      props: {
        produtoEncontrado,
        precoEncontrado,
      },
    };
  }