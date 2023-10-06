import ItemCarrinho from "@/models/ItemCarrinho"
import Produto from "@/models/Produto"
import { Console } from "console"
import { createContext, useState } from "react"


interface CarrinhoContextProps{
    itens:ItemCarrinho[]
    adicionarProduto:(produto: Produto) => void
    removerProduto?:(produto: Produto)=>void
    itemSelecionado?:Produto
    setItemSelecionado?:(produto:Produto)=>void
    selecionarProduto?:(produto:Produto)=>void

}

const CarrinhoContext =createContext<CarrinhoContextProps>({} as any)
export default CarrinhoContext;

export function CarrinhoProvider(props: any){

    const [itens, setItens] = useState<ItemCarrinho[]>([])
    const [itemSelecionado,setItemSelecionado]=useState<Produto>()
    const [search, setSearch] = useState("");
    
    function adicionarProduto(produto: Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id && item.produto.tamanho === produto.tamanho);
      
        if (itemAtual) {
          const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
          const outrosItens = itens.filter((item) => item !== itemAtual);
          setItens([...outrosItens, novoItem]);
        } else {
          const novoItem = { quantidade: 1, produto };
          setItens([...itens, novoItem]);
        }
    }

    function removerProduto(produto: Produto) {
        const novoItens = itens.filter((item) => item.produto.id !== produto.id || item.produto.tamanho !== produto.tamanho);
        setItens(novoItens);
    }

    function selecionarProduto(produto: Produto){
        setItemSelecionado(produto);
        console.log(itemSelecionado)
    }
    
    return (
        <CarrinhoContext.Provider value={{itens,adicionarProduto,removerProduto,selecionarProduto,itemSelecionado}}>
            {props.children}
        </CarrinhoContext.Provider>

    )
}