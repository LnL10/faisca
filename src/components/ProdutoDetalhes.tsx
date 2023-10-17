import Moeda from "@/utils/Moeda"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CarrinhoPopUp from "./Carrinho/CarrinhoPopUp"





export default function ProdutoDetalhe(props: any){

    const {produto} = props
    const [tamanho,setTamanho] = useState('S');
    const [mostrarPopup, setMostrarPopup] = useState(false);

    const handleAdicionarAoCarrinho = () => {
        if (props.comprar) {
         
          const produtoComTamanho = {
            ...produto,
            tamanho: tamanho, 
          };
      
          console.log(produtoComTamanho);
          props.comprar(produtoComTamanho);
          setMostrarPopup(true);
        }
      };
    
      const fecharPopup = () => {
        setMostrarPopup(false);
      };


      
    return(
        

        <div className="flex p-10 justify-evenly w-3/4">
            
            <div>
            <Image 
                src={produto.images[0]} 
                alt="Imagem"
                width={300}
                height={300}
                className="rounded-md"
            />
            </div>

            <div className="flex flex-col gap-3 text-black">
                
                <span className="text-2xl font-black">{produto?.name}</span>
                <div className="flex flex-col">
                    <span className="text-green-500 font-bold">{Moeda.formatar(produto?.unit_amount)}</span>
                    <span className="text-zinc-500 font-mono text-sm">Portes incluídos</span>
                </div>  
                <span className="font-serif text-sm">TAMANHO</span>

                <select value={tamanho} onChange={e => setTamanho(e.target.value)} className="p-1 rounded-md">
                        
                
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                    
                
                <button onClick={handleAdicionarAoCarrinho} className="botao flex gap-2 ">Adicionar ao Carrinho <IconShoppingCart/></button>
                
            </div>
            <div className="fixed top-[35%] text-black right-10">
                {mostrarPopup && (
                    <CarrinhoPopUp onClose={fecharPopup} />
                )}
            </div>
           
        </div>
    )
}