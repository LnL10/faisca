import { IconBrandFacebook, IconBrandInstagram, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Header(){
    return(
        <div className="flex flex-col bg-red-500 h-52 gap-5">
            <div className="flex justify-between w-screen ">
                <IconSearch/>
                <span>FAISCA</span>
                <IconShoppingCart/>
            </div>
        
            <div>
                <ul className="flex space-x-4 ">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="produtos/produtos">Produtos</Link></li>
                </ul>
            </div>          
        
        
        </div>
           
        
    )
}