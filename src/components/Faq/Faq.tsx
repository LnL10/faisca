import Pergunta from "./Pergunta";

export default function Faq(){
    return(
        <div className="flex flex-col w-[90%] md:w-2/4 justify-center">
            <Pergunta pergunta="Quais são a nossas garantias? " resposta="Temos total confiança nos nossos produtos e na qualidade dos mesmos por isso tudo o que comprares no nosso site têm garantia de 15 dias. Se o produto que receberes não for conforme o encomendado ou estiver danificado devolvemos o dinheiro ou enviámos um novo."/> 
            <Pergunta pergunta="Quanto tempo demoras receber a tua encomenda? " resposta="Preparamos as nossas encomendas para todo o país num período de 7-14 dias úteis após o envio. No entanto após efetuares a compra e o teu pedido for processado irás receber um código para acompanhares o estado do teu pedido."/> 
            <Pergunta pergunta="Fazem envios à cobrança?  " resposta="Não, trabalhamos com produtos importados e personalizados ao teu gosto. Por esse motivo não é possível fazer envios à cobrança."/> 
            <Pergunta pergunta="Como podes poupar? " resposta="Quantas mais camisolas comprares mais descontos tens. Durante o ano temos várias promoções, explora o nosso site para as descobrires, ou segue-nos nas redes sociais para ficares a par das novidades."/> 
        </div>
    )
}