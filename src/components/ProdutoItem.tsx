import Produto from "@/models/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps{
    produto: Produto
    comprar?: (produto: Produto)=> void
}

export default function ProdutoItem(props: ProdutoItemProps){
    const {produto} = props
    return(
        <div className={`
            flex flex-col rounded-md
            border border-zinc-200
            p-1 bg-zinc-900

        `}>
            <Image 
                src={produto.imagem} 
                alt="Imagem"
                width={300}
                height={300}
                className="rounded-md"
            />
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                <div className="text-2xl font-black">{produto.nome}</div>
                <div className="text-green-300 font-bold">{Moeda.formatar(produto.preco)}</div>
                </div>
                <div>
                    <div>{produto.descricao}</div>
                </div>
                <div>
                    <button className="botao flex w-full justify-center gap-2" 
                        onClick={()=>props.comprar(produto)}>
                        <IconShoppingCart/> Comprar
                        </button>
                </div>
            </div>
        

        </div>
    )
}