import { useState } from "react";
export default function Pagamento(props:any){
      
    return(

        <div>
            <div>PAGAMENTO</div>
            <button  className="botao bg-black" onClick={props.onComplete} > Pagar </button>
            <button className="botao" onClick={props.back}>Voltar</button>
        </div>
            
    )
}