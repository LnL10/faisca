import ItemCarrinho from "@/models/ItemCarrinho";
import Moeda from "@/utils/Moeda";
import Image from "next/image";

interface CarrinhoCompraProps{
    item: ItemCarrinho
}

export default function CarrinhoCompra(props: CarrinhoCompraProps){
console.log("props",props)
    return(
        
            <div className="flex gap-5 border p-1 rounded-md">
                <Image src={props.item.produto.images[0]} alt="imagem" width={80} height={90}/>
                    <div className="flex flex-col">
                    <span className="font-black">{props.item.produto.name}</span>
                    <span>{props.item.produto.description}</span>
                    </div>
                <span className="flex justify-center items-center">{Moeda.formatar(props.item.preco/100)}</span>
                <span className="flex items-center "> - {props.item.quantidade}</span>
            </div>
    )

}