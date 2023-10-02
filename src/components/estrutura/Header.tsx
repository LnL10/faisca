import { IconBrandFacebook, IconBrandInstagram, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import headerImage from "./headerImage/faisca.png"
import CarrinhoContext from "@/context/CarrinhoContext";
import {useContext} from "react"

export default function Header(){
    const {itens} = useContext(CarrinhoContext)
    const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0);
    return(
        <div className="flex flex-col bg-white h-48 gap-5 border-b-2 border border-black">
            <div className="flex items-center justify-around w-screen gap-8 text-black">
                <IconSearch size={30}/>
                <Link href="/"><Image src={headerImage} width={130} height={200} alt="bgImage"/></Link>
                <Link className="flex "href="/carrinho"><IconShoppingCart size={30}/><span className="rounded-full bg-zinc-200"></span>{quantidadeTotal}</Link>
                
            </div>
        
            <div>
                <ul className="flex space-x-4 font-mono justify-evenly text-black">
                    <li><Link  className="botaoHeader" href="/">Inicio</Link></li>
                    |
                    <li><Link  className="botaoHeader" href="/produtos">Produtos</Link></li>
                    |
                    <li><Link  className="botaoHeader" href="/produtos">Contactos</Link></li>
                </ul>
            </div>          
        </div>
           
        
    )
}