import ItemCarrinho from "@/models/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import {IconCircleX} from "@tabler/icons-react"
import Moeda from "@/utils/Moeda";

interface CarrinhoProps{
    itens: ItemCarrinho[]
}



export default function Carrinho(props: CarrinhoProps){
    const total = props.itens.reduce((soma,item)=> {return soma + item.quantidade * item.produto.preco}, 0)

    return(
        <div className="flex flex-col border borde-white rounded-md overflow-hidden w-4/5 bg-zinc-800 " >
            <div className="flex justify-between items-centerbg-zinc-800 text-3xl p-3">
                <span>Carrinho</span>
                <span>{Moeda.formatar(total)}</span>
            </div>
            <div className="flex gap-5 p-5">
                {props.itens.length=== 0 ? (
                    <div className="flex justify-center text-zinc-300 gap-3">
                        <IconCircleX/>
                        <span>Carrinho Vazio</span>
                    </div>
                    
                ):(
                    props.itens.map((item,i) => {
                        return <CarrinhoItem key={i} {...item}/>
                    })
                )}
            
            </div>
        </div>
    )
}