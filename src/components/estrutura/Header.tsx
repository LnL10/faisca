import {  IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import headerImage from "./headerImage/faisca.png"
import CarrinhoContext from "@/context/CarrinhoContext";
import {useContext, useState} from "react"
import produtos from "@/data/produtos";
import ProdutoItem from "../ProdutoItem";
import  {useRouter}  from "next/router";



export default function Header(){
    
    const {itens,adicionarProduto} = useContext(CarrinhoContext)
    const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0);
    const router = useRouter();

    const handleSubmit = (e :any) => {
        e.preventDefault();
        router.push({
          pathname: "/pesquisa",
          query: { search: search },
        });
      };

    const [search, setSearch] = useState("");


    



    return(
        <div className="flex flex-col bg-white h-48 gap-5 border-b-2 border border-black">
            
            <div className="flex items-center  w-screen gap-8 text-black px-20">
                <div className="flex items-center flex-1">
                        <IconSearch size={30} />
                        <form onSubmit={handleSubmit}>
                            <input
                            type="text"
                            className="ph"
                            placeholder="Pesquisar"
                            onChange={(e) => {
                                setSearch(e.target.value.toLowerCase());
                            }}
                              />
                        </form>
                </div>
                
                <div className="flex items-center justify-center flex-1"> 
                    <Link href="/" className=""><Image src={headerImage} width={130} height={200} alt="bgImage"/></Link>
                </div>
                <div className="flex flex-1 justify-end">

                    <Link className="flex "href="/carrinho"><IconShoppingCart size={30}/><span className="rounded-full bg-zinc-200"></span>{quantidadeTotal}</Link>
                </div>

            </div>
            
            <div className="">
                <ul className="flex font-mono justify-evenly text-black">
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