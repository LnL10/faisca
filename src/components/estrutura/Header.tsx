import { IconBrandFacebook, IconBrandInstagram, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import headerImage from "./headerImage/faisca.png"

export default function Header(){
    return(
        <div className="flex flex-col bg-white h-48 gap-5 border-b-2 border border-black">
            <div className="flex items-center justify-around w-screen gap-8 text-black">
                <IconSearch size={30}/>
                <Image src={headerImage} width={130} height={200} alt="bgImage"/>
                <IconShoppingCart size={30}/>
            </div>
        
            <div>
                <ul className="flex space-x-4 font-mono justify-around text-black">
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