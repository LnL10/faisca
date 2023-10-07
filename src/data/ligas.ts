import Liga from "@/models/Liga";
import LaLiga from "@/data/LigasImagens/LaLiga.png"
import LigaBetclic from "@/data/LigasImagens/Liga_Portugal_Betclic_2023.png"

const ligas : Liga[]= [
    {
        id:1,
        nome:"Liga Betclic Portugal",
        imagem:LigaBetclic,
    },
    {
        id:2,
        nome:"LaLiga",
        imagem:LaLiga,
    },
]

export default ligas;