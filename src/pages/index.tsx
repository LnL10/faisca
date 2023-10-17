import ListaProdutos from '@/components/ListaProdutos'
import { useContext } from 'react'
import CarrinhoContext from '@/context/CarrinhoContext'
import produtos2 from "@/data/produtos2"
import Faq from '@/components/Faq/Faq'
import Layout from '@/components/estrutura/Layout'
import Stripe from 'stripe'





export default function Home({ prices  }) {
  const {adicionarProduto} = useContext(CarrinhoContext)

  console.log(prices);
  
  return (
    <Layout>
        <div className='flex flex-col bg-white'>
            <h1 className="flex justify-center p-3 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-5xl">
              <span className="text-transparent pb-2 bg-clip-text bg-gradient-to-r from-red-600 via-black to-red-600 ">
                PROMOÇÕES
              </span>
            </h1>

            <ListaProdutos produtos={prices} comprar={adicionarProduto}/>
            <span className='flex justify-center text-black font-black pt-10'>PERGUNTAS FREQUENTES</span>
            <div className=' flex justify-center pt-5 pb-10'>
              <Faq/>
            </div>
        </div>

    </Layout>
      
    )
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product'],
  });

  return {
    props: {
      prices,
    },
  };
}
