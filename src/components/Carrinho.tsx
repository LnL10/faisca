import ItemCarrinho from "@/models/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import {IconCircleX} from "@tabler/icons-react"
import Moeda from "@/utils/Moeda";
import Link from "next/link";
import Produto from "@/models/Produto";
import Stripe from "stripe";
import React from "react";

interface CarrinhoProps{
    itens: ItemCarrinho[]
    remover?: (produto: any)=> void
}



export default function Carrinho(props: CarrinhoProps){
  const calcularTotal = async () => {
    let total = 0;
  
    // Mapeie os itens e adicione o atributo preco com base no valor recuperado do Stripe
    const itensComPreco = await Promise.all(
      props.itens.map(async (item) => {
        if (item.produto && item.produto.default_price) {
          const preco = await fetchPriceFromStripe(item.produto.default_price);
  
          if (item.produto.nome || item.produto.numero) {
            // Adicione 2 ao preço se houver um nome ou número
            preco.unit_amount += 200; // 2 * 100 (para converter centavos)
          }
  
          item.preco = preco.unit_amount;
        }
        return item;
      })
    );
  
    for (const item of itensComPreco) {
      total += item.preco * item.quantidade;
    }
  
    return total;
  };
    
      const [total, setTotal] = React.useState(0);
    
      React.useEffect(() => {
        calcularTotal().then((result) => {
          setTotal(result);
        });
      }, [props.itens]);

      console.log("ITENS",props.itens)
    return(
        <div className="flex flex-col border-2 mb-5 border-black rounded-md overflow-hidden w-4/5 bg-zinc-300 text-black" >
            <div className="flex justify-between items-centerbg-zinc-800 text-3xl p-3">
                <span>Carrinho</span>
                <span className="font-light">Total : {Moeda.formatar(total/100)}</span>
            </div>
            <div className="flex gap-5 p-5">
                {props.itens.length === 0 ? (
                    <div className="flex justify-center text-black gap-3">
                        <IconCircleX/>
                        <span>Carrinho Vazio</span>
                    </div>
                    
                ):(
                    <div className="flex  w-full justify-between">
                        
                        <Link href="/produtos" className="underline text hover:underline-offset-8">Continuar a Comprar</Link>

                        <Link href="/checkout" className="botao2 font-semibold">Finalizar Compra</Link>
                    </div>
                        
                )}
                
            </div>
        </div>
    )
}


async function fetchPriceFromStripe(priceId) {
    const stripe = new Stripe("sk_test_51NwSejFtnNCewv4VJSyBB3R489rechvsmqrEhVJW5Z5TK8icOSdtB2SUdmbhP9gG5JkJIyjhuX0hDJ6zj5pVDSF9009GkSu6Jw");
    try {
    
      const precoEncontrado = await stripe.prices.retrieve(priceId);
      console.log("preco Encontrado Funcao", precoEncontrado)
      return precoEncontrado;
    } catch (error) {
      console.error("Erro ao buscar o preço no Stripe:", error);
      console.log(error)
      return null;
    }
  }