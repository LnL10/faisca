import Moeda from "@/utils/Moeda"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"





export default function ProdutoDetalhe(props: any){

    const {produto} = props
    const [tamanho,setTamanho] = useState('Selecionar Tamanho');
    return(
        

        <div className="flex p-10 justify-evenly w-3/4">
            
            <div>
            <Image 
                src={produto.imagem} 
                alt="Imagem"
                width={300}
                height={300}
                className="rounded-md"
            />
            </div>

            <div className="flex flex-col gap-3 text-black justify-center">
                
                <span className="text-2xl font-black">{produto.nome}</span>
                <div className="flex flex-col">
                    <span className="text-green-500 font-bold">{Moeda.formatar(produto.preco)}</span>
                    <span className="text-zinc-500 font-mono text-sm">Portes incluídos</span>
                </div>  
                <span className="font-serif text-sm">TAMANHO</span>

                <select value={tamanho} onChange={e => setTamanho(e.target.value)} className="p-1 rounded-md">
                        
                
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                    
                
                <button onClick={()=>props.comprar && props.comprar(produto)} className="botao flex gap-2">Adicionar ao Carrinho <IconShoppingCart/></button>
                     
            </div>
           
        </div>
    )
}