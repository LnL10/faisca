import CarrinhoContext from "@/context/CarrinhoContext";
import Produto from "@/models/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import {useContext} from "react"

interface ProdutoItemProps{
    produto: Produto
    comprar?: (produto: Produto)=> void
}


export default function ProdutoItem(props: ProdutoItemProps){
    const {selecionarProduto} = useContext(CarrinhoContext)
    const {produto} = props
    return(
        <div className={`
            flex flex-col rounded-xl 
            border border-black
            p-2
            hover:bg-zinc-300
            

        `}>
            <Image 
                src={produto.imagem} 
                alt="Imagem"
                width={200}
                height={200}
                className="rounded-md"
            />
            <div className="flex flex-col justify-center items-center">
                
                <div className="text-lg text-black font-semibold">{produto.nome}</div>
                <div className="text-green-500 font-bold">{Moeda.formatar(produto.preco)}</div>

                <div>
                    <button className="botao flex w-full justify-center gap-2" 
                        onClick={()=>selecionarProduto && selecionarProduto(produto)}>    
                        <IconShoppingCart/> Ver Produto
                    </button>
                </div>
            </div>
        </div>
    )
}