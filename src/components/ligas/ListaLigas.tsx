import Liga from "@/models/Liga"
import Link from "next/link"
import LigaItem from "./LigaItem"

interface ListaLigasProps{
    ligas:Liga[]
}

export default function ListaLigas(props: ListaLigasProps){
    return(
        <div className="flex flex-wrap gap-5 items-center justify-center ">
            {props.ligas.map((liga) => (
                <Link href={`/liga/${liga.id}`} key={liga.id}>
                    <LigaItem liga={liga} />
                </Link>
            ))}
        </div>
    )
}