import ItemCarrinho from "@/models/ItemCarrinho";
import Produto from "@/models/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import Image from "next/image";

interface MostrarNoCarrinhoProps{
    produto: ItemCarrinho
    comprar?: (produto: Produto)=> void
    remover?: (produto: Produto)=> void
}

export default function MostrarNoCarrinho(props: MostrarNoCarrinhoProps){
    const {produto} = props
    return(
        <div className={`
            flex flex-col rounded-md
            border border-zinc-200
            p-1 bg-zinc-900

        `}>
            <Image 
                src={produto.produto.imagem} 
                alt="Imagem"
                width={300}
                height={300}
                className="rounded-md"
            />
            <div>
                Quantidade : {produto.quantidade}
                
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                <div className="text-2xl font-black">{produto.produto.nome}</div>
                <div className="text-green-300 font-bold">{Moeda.formatar(produto.produto.preco)}</div>
                </div>
                <div className="flex justify-between">
                    <div>{produto.produto.descricao}</div>
                    <button onClick={()=>props.remover && props.remover(produto.produto)}><IconX/></button>
                </div>
            </div>
        

        </div>
    )
}