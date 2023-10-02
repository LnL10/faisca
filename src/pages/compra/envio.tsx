import CarrinhoCompra from "@/components/compra/CarrinhoCompra";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import Moeda from "@/utils/Moeda";
import { useContext } from "react";

export default function PaginaEnvio(){
    const {itens} = useContext(CarrinhoContext)
    const total = itens.reduce((soma,item)=> {return soma + item.quantidade * item.produto.preco}, 0)
    return(
        <Layout>
        <div className="flex w-screen h-screen">
            <div className="flex w-2/3 bg-white-200 border border-zinc-700 justify-center items-center bg-black">
                <div className="flex w-4/5 justify-center items-center">
                <form className="flex flex-col gap-4 ">
                    <span className="font-black">Contacto</span>
                    <label >
                        <input className="ph w-full" type="email" name="email" placeholder="Email"/>
                    </label>
                    <span className="font-black">Endereço de Envio</span>
                    <label>
                        Pais:
                        <select className="ph ">
                            <option value="pt ">Portugal</option>
                        </select>
                    </label>
                    <div className="flex gap-4" >
                        <label className="flex-1">
                            <input className="ph w-full" type="text"  name="name" placeholder="Nome"/>
                        </label>
                        <label className="flex-1">
                            <input className="ph w-full" type="text" name="name" placeholder="Sobrenome"/>
                        </label>
                    </div>

                    <label>
                        <input type="text" className="ph w-full" placeholder="Endereço"/>
                    </label>

                    <div className="flex gap-4">
                        <label>
                            <input type="text" className="ph w-full" placeholder="Código-Postal"/>
                        </label>
                        <label>
                            <input type="text" className="ph w-full" placeholder="Cidade"/>
                        </label>
                        <label>
                            <input type="text"className="ph w-full" placeholder="Concelho"/>
                        </label>
                    </div>
                    <label>
                            <input type="text" className="ph w-full" placeholder="Telefone"/>
                    </label>

                    <input type="submit" className="botao bg-black" value="Submit" />
                </form>
                </div>

            </div>


            <div className="flex flex-col w-1/3 bg-blue-300 border border-zinc-700">
                <div className="flex flex-col items-center w-full pt-4 gap-2">
                    {itens.map((item,i) => {
                            return <CarrinhoCompra item={item} key={i}/>
                    })}
                </div>
                <div className="flex flex-col items-center gap-1 pt-10">
                    <div className="flex justify-between w-2/4">
                        <span>Envio</span>
                        <span>{Moeda.formatar(0)}</span>
                    </div>
                    <div className="flex justify-between w-2/4">
                        <span>Total</span>
                        <span>{Moeda.formatar(total)}</span>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}