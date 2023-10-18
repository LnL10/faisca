import ItemCarrinho from "@/models/ItemCarrinho";
import Produto from "@/models/Produto";
import Moeda from "@/utils/Moeda";
import { IconTrash} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Stripe from "stripe";

interface MostrarNoCarrinhoProps{
    produto: ItemCarrinho
    comprar?: (produto: any)=> void
    remover?: (produto: any)=> void
}

export default function MostrarNoCarrinho(props: any){
    const {produto} = props

    const [preco, setPreco] = useState(null);


  useEffect(() => {
      fetchPriceFromStripe(produto.produto.default_price,produto.produto).then((precoEncontrado) => {
        console.log(precoEncontrado)
        if (precoEncontrado) {
          setPreco(precoEncontrado);
        }
      });
  }, [produto]);




    return(
        <div className={`
            flex flex-col rounded-md
            border border-zinc-200
            p-1 bg-zinc-900 text-white

        `}>
            <Image 
                src={produto.produto.images[0]} 
                alt="Imagem"
                width={300}
                height={300}
                className="rounded-md"
            />
            <div className="flex flex-col">
                <span>Tamanho: {produto.produto.tamanho}</span>
                <span>Quantidade : {produto.quantidade}</span>
                
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                  <div className="text-md font-black">{produto.produto.name}</div>
                  <div className="text-green-300 font-bold">{Moeda.formatar(preco?.unit_amount/100)}</div>
                </div>
                <div>
                {(produto.produto.nome || produto.produto.numero) && <span className="underline text-gray-400">Personalização</span>}

                  {produto.produto.nome && <div className="text-gray-400">Nome: {produto.produto.nome }</div>}
                  {produto.produto.numero && <div className="text-gray-400">Número: {produto.produto.numero }</div>}
                </div>
                
                <button className="flex justify-center items-center rounded-md hover:bg-zinc-400"onClick={()=>props.remover && props.remover(produto.produto)}>Remover do Carrinho<IconTrash size={20}/></button>
                
            </div>
        

        </div>
    )
}


async function fetchPriceFromStripe(priceId,produto) {
    const stripe = new Stripe("sk_test_51NwSejFtnNCewv4VJSyBB3R489rechvsmqrEhVJW5Z5TK8icOSdtB2SUdmbhP9gG5JkJIyjhuX0hDJ6zj5pVDSF9009GkSu6Jw");
    try {
    
      const precoEncontrado = await stripe.prices.retrieve(priceId);
      if (produto.nome || produto.numero) {
        precoEncontrado.unit_amount += 200; 
      }
      return precoEncontrado;
    } catch (error) {
      console.error("Erro ao buscar o preço no Stripe:", error);
      console.log(error)
      return null;
    }
  }