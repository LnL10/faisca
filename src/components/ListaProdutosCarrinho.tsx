import Produto from "@/models/Produto"
import ProdutoItem from "./ProdutoItem"
import ItemCarrinho from "@/models/ItemCarrinho"
import MostrarNoCarrinho from "./MostrarNoCarrinho"

interface ListaProdutosCarrinhoProps{
    produtos:ItemCarrinho[]
    remover?: (produto: Produto)=> void
}


export default function ListaProdutosCarrinho(props: ListaProdutosCarrinhoProps){
    console.log(props.produtos)
    return(
        <div className="flex flex-wrap gap-5 items-center justify-center">
            
            
            {props.produtos.map((produto) => {
                console.log(`${produto.produto.id}-${produto.produto.tamanho}`)
                return <MostrarNoCarrinho key={`${produto.produto.id}-${produto.produto.tamanho}`} produto={produto} remover={props.remover}/>
            })}
        </div>
    )
}