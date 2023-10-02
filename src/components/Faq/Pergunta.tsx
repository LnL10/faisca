import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { useState } from "react"


interface PerguntaProps{
    pergunta: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps){

    const [aberta,setAberta] = useState<boolean>(false)



    return (
    <div className="border-r-0 border-t-2 border-b-1 border-zinc-400 overflow-hidden">
        <div className="pergunta"
            onClick={()=> setAberta(!aberta)}>
            <span>{props.pergunta}</span>
            {aberta ? <IconChevronUp/> : <IconChevronDown/>}
            
        </div>

        {aberta && (
            <div className="p-5 text-black">
                {props.resposta}
             </div>
        )}
        
    </div>
    )
}