import { useState } from "react";

export default function Informacoes(props:any){

    return(
        <div>
            <div className="flex justify-center items-center">
                    
                    <form className="flex flex-col gap-4 ">
                        
    
                        <span className="font-bold text-2xl">Contacto</span>
                        <label >
                            <input className="ph " type="email" name="email" placeholder="Email"/>
                        </label>
                        <span className="font-bold text-2xl">Endereço de Envio</span>
                        <label>
                            Pais:
                            <select className="ph">
                                <option value="pt ">Portugal</option>
                            </select>
                        </label>
                        <div className="flex gap-4" >
                            <label className="flex-1">
                                <input className="ph" type="text"  name="name" placeholder="Nome"/>
                            </label>
                            <label className="flex-1">
                                <input className="ph" type="text" name="name" placeholder="Sobrenome"/>
                            </label>
                        </div>
    
                        <label>
                            <input type="text" className="ph " placeholder="Endereço"/>
                        </label>
    
                        <div className="flex gap-4">
                            <label>
                                <input type="text" className="ph" placeholder="Código-Postal"/>
                            </label>
                            <label>
                                <input type="text" className="ph " placeholder="Cidade"/>
                            </label>
                            <label>
                                <input type="text"className="ph " placeholder="Concelho"/>
                            </label>
                        </div>
                        <label>
                                <input type="text" className="ph" placeholder="Telefone"/>
                        </label>
    
                        <input type="submit" className="botao bg-black" value="Prosseguir para o pagamento" onClick={props.onComplete}/>
                    </form>
                    </div>

        </div>
    )
}