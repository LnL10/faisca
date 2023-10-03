import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import Link from "next/link";


export default function CarrinhoPopUp(props:any){
    return(
        
            <div className="flex flex-col justify-center items-center gap-3 p-5 rounded-xl bg-zinc-300">
                
                <div className="flex ">
                    <IconCheck/>
                    <p>Produto adicionado ao carrinho!</p>
                </div>

                <Link href="/carrinho" className="flex bg-black text-white  justify-center p-2 rounded-md hover:bg-red-700 ">Ir para o Carrinho</Link>
                
                <button className="underline font-light hover:underline-offset-4" onClick={props.onClose}>Continuar a comprar</button>
            </div>
    
    )
}