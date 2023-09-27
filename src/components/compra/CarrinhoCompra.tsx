import ItemCarrinho from "@/models/ItemCarrinho";
import Moeda from "@/utils/Moeda";
import Image from "next/image";

interface CarrinhoCompraProps{
    item: ItemCarrinho
}

export default function CarrinhoCompra(props: CarrinhoCompraProps){

    return(
            <div className="flex gap-5">
                <Image src={props.item.produto.imagem} alt="imagem" width={80} height={90}/>
                    <div className="flex flex-col">
                    <span className="font-black">{props.item.produto.nome}</span>
                    <span>{props.item.produto.descricao}</span>
                    </div>
                <span className="flex justify-center items-center">{Moeda.formatar(props.item.produto.preco)}</span>
                <span>{props.item.quantidade}</span>
            </div>
    )

}