import ItemCarrinho from "@/models/ItemCarrinho";
import Moeda from "@/utils/Moeda";

export default function CarrinhoItem(props: ItemCarrinho){
    

    return(
        <div className="flex gap-2 justify-center items-center rounded-full bg-blue-500">
            
            <span className="flex  justify-center items-center w-7 h-7 rounded-full bg-blue-700 p-2">{props.quantidade}</span>
            <span>{props.produto.nome}</span>
            <span className="pr-5">{Moeda.formatar(props.produto.preco * props.quantidade)}</span>
        </div>
    )
}