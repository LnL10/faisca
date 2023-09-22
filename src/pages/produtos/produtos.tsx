import Background from "@/components/Background";
import Carrinho from "@/components/Carrinho";
import ListaProdutos from "@/components/ListaProdutos";
import produtos from "@/data/produtos"
import ItemCarrinho from "@/models/ItemCarrinho";
import Produto from "@/models/Produto";
import {useState} from "react"

export default function PaginaProdutos(){
    
    const [itens, setItens] = useState<ItemCarrinho[]>([])
    
    function adicionarProduto(produto:Produto){
        const itemAtual =itens.find((item) => item.produto.id === produto.id) ?? {quantidade: 0, produto}
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade + 1}
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }
    
    return(
        
        <div className={`
            flex flex-col gap-10 justify-center items-center pt-5
        `}>
            <Carrinho itens ={itens}/>
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
        </div>
    )
}