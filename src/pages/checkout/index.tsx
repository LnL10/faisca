import Confirmacao from "@/components/FinalizarEncomenda/Confirmacao";
import Informacoes from "@/components/FinalizarEncomenda/Informacoes";
import Pagamento from "@/components/FinalizarEncomenda/Pagamento";
import CarrinhoCompra from "@/components/compra/CarrinhoCompra";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import Moeda from "@/utils/Moeda";


export default function PaginaEnvio(){
    const {itens} = useContext(CarrinhoContext)
    const total = itens.reduce((soma,item)=> {return soma + item.quantidade * item.produto.preco}, 0)

    
    return(
        <Layout>
            
        <div className="flex w-screen h-screen">
            
            
            <div className="flex flex-col w-2/3 bg-white-200 border border-zinc-700 justify-center items-center bg-white text-black">
                
                <span className="text-black pb-16 ">INFORMAÇÕES - PAGAMENTO - CONFIRMAÇÃO</span> 
                <Informacoes/>
                <Pagamento/>
                <Confirmacao/>
            </div>


            <div className="flex flex-col w-1/3 bg-zinc-500 border border-black">
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