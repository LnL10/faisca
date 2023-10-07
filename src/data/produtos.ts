import Produto from "@/models/Produto";
import Benfica from "@/data/images/Benfica.jpg"
import Porto from "@/data/images/Porto.jpg"
import Sporting from "@/data/images/Sporting.jpg"

const produtos: Produto[]=[
    {
        id:1,
        nome:"Benfica",
        preco:25,
        ligaId:1,
        descricao:"Camisola Benfica",
        imagem:Benfica,
    },
    {
        id:2,
        nome:"Porto",
        preco:25,
        ligaId:1,
        descricao:"Camisola Porto",
        imagem:Porto,
    },
    {
        id:3,
        nome:"Sporting",
        preco:25,
        descricao:"Camisola Sporting",
        ligaId:1,
        imagem:Sporting,
    },
]

export default produtos;