import Produto from "@/models/Produto"
import ProdutoItem from "./ProdutoItem"
import Link from "next/link"

interface ListaProdutosProps{
    produtos:Produto[]
    comprar:(produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutosProps){
    return(
        <div className="flex flex-wrap gap-5 items-center justify-center ">
            {props.produtos.map((produto) => (
                <Link href={`/product/${produto.nome}`} key={produto.id}>
                    <ProdutoItem produto={produto} comprar={props.comprar}/>
                </Link>
            ))}
        </div>
    )
}