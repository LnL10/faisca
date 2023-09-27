import Moeda from "@/utils/Moeda"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"


export default function ProdutoDetalhe(props: any){

    const {produto} = props
    return(
        

        <div className={`
            flex flex-col rounded-md
            border border-zinc-200
            p-1 bg-zinc-900 w-60

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
                    
                    <button onClick={()=>props.comprar && props.comprar(produto)} className="botao">Adicionar ao Carrinho</button>
                    <IconShoppingCart/> Comprar
                    
                </div>
            </div>
            <Link href="/produtos/produtos">Voltar</Link>
        </div>
    )
}