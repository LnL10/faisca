import ItemCarrinho from "@/models/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import {IconCircleX} from "@tabler/icons-react"
import Moeda from "@/utils/Moeda";
import Link from "next/link";
import Produto from "@/models/Produto";

interface CarrinhoProps{
    itens: ItemCarrinho[]
    remover?: (produto: Produto)=> void
}



export default function Carrinho(props: CarrinhoProps){
    const total = props.itens.reduce((soma,item)=> {return soma + item.quantidade * item.produto.preco}, 0)

    return(
        <div className="flex flex-col border-2 mb-5 border-black rounded-md overflow-hidden w-4/5 bg-zinc-300 text-black" >
            <div className="flex justify-between items-centerbg-zinc-800 text-3xl p-3">
                <span>Carrinho</span>
                <span className="font-light">Total : {Moeda.formatar(total)}</span>
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