import Confirmacao from "@/components/FinalizarEncomenda/Confirmacao";
import Informacoes from "@/components/FinalizarEncomenda/Informacoes";
import Pagamento from "@/components/FinalizarEncomenda/Pagamento";
import CarrinhoCompra from "@/components/compra/CarrinhoCompra";
import Layout from "@/components/estrutura/Layout";
import CarrinhoContext from "@/context/CarrinhoContext";
import Moeda from "@/utils/Moeda";
import { Icon123, IconArrowBarToRight, IconArrowNarrowRight, IconCheck } from "@tabler/icons-react";
import { useContext,useState } from "react";


export default function PaginaEnvio(){
    const {itens} = useContext(CarrinhoContext)
    const total = itens.reduce((soma,item)=> {return soma + item.quantidade * item.produto.preco}, 0)
    const [currentStep, setCurrentStep] = useState('informacoes');

    const handleInformacoesComplete = () => {
      setCurrentStep('pagamento');
    };
    const handleInformacoes= () => {
        setCurrentStep('informacoes');
      };
  
    const handlePagamentoComplete = () => {
      setCurrentStep('confirmacao');
    };

    return(
        <Layout>
            
        <div className="flex w-screen h-screen">
            
            
            <div className="flex flex-col w-2/3 bg-white-200 border border-zinc-700 justify-center items-center bg-white text-black">
                
            <div className="flex  text-black pb-16 gap-7 ">

                <div className={`flex items-center gap-2 ${currentStep === 'informacoes' ? 'border-2 rounded-md border-black p-1 bg-zinc-200' : ''}`}>
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    {currentStep === 'pagamento' || currentStep === 'confirmacao' ? <IconCheck /> : <span>1</span>}
                    </div>

                    <span>INFORMAÇÕES</span>  

                </div>

                <div className="flex justify-center items-center">
                    <IconArrowNarrowRight/>
                </div>

                <div className={`flex items-center gap-2 ${currentStep === 'pagamento' ? 'border-2 rounded-md border-black p-1 bg-zinc-200' : ''}`}>
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    {currentStep === 'confirmacao'  ? <IconCheck/> : <span>2</span>}
                    </div>
                    <span> PAGAMENTO</span> 
                </div>

                <div className="flex justify-center items-center">
                    <IconArrowNarrowRight/>
                </div>

                <div className={`flex items-center gap-2 ${currentStep === 'confirmacao' ? 'border-2 rounded-md border-black p-1 bg-zinc-200' : ''}`}>
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                        3
                    </div>   
                    <span> CONFIRMAÇÃO</span>
                </div>
            </div>

                {currentStep === 'informacoes' && (
                    <Informacoes onComplete={handleInformacoesComplete} />
                )}
                {currentStep === 'pagamento' && (
                    <Pagamento onComplete={handlePagamentoComplete} back={handleInformacoes}/>
                )}

      {currentStep === 'confirmacao' && <Confirmacao back={handleInformacoes}/>}
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