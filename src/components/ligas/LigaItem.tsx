import Liga from "@/models/Liga"
import Image from "next/image"

interface LigaItemProps{
    liga: Liga
}


export default function LigaItem(props: LigaItemProps){
    const {liga} = props
    return (
        <div className={`
            flex flex-col rounded-xl 
            border border-black
            p-2
            hover:bg-zinc-300
        `}>
            <Image 
                src={liga.imagem} 
                alt="Imagem"
                width={200}
                height={200}
                className="rounded-md"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="text-lg text-black font-semibold">{liga.nome}</div>
            </div>
        </div>
    )
}