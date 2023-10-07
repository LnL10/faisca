import Produto from "@/models/Produto";
import RealMadrid from "./images/RealMadrid.jpg"
import Barcelona from "./images/Barcelona.jpg"

const produtos2: Produto[]=[
    {
        id:8,
        nome:"Real Madrid",
        preco:25,
        ligaId:2,
        descricao:"Camisola Real Madrid",
        imagem: RealMadrid,
    },
    {
        id:9,
        nome:"Barcelona",
        preco:25,
        ligaId:2,
        descricao:"Camisola Barcelona",
        imagem:Barcelona,
    },
    
]

export default produtos2;