import Moeda from "@/utils/Moeda"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CarrinhoPopUp from "./Carrinho/CarrinhoPopUp"
import Stripe from "stripe"





export default function ProdutoDetalhe(props: any){
    const {produto} = props

    const [tamanho,setTamanho] = useState('S');
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [mostrarPopup, setMostrarPopup] = useState(false);

    const handleAdicionarAoCarrinho = () => {
      if (props.comprar) {
        const produtoComTamanho = {
          ...produto,
          tamanho: tamanho,
        };
    
        if (nome.trim() !== '') {
          produtoComTamanho.nome = nome;
        }
    
        if (numero.trim() !== '') {
          produtoComTamanho.numero = numero;
        }
        console.log(produtoComTamanho)
        props.comprar(produtoComTamanho);
        setMostrarPopup(true);
      }
    };
    
      const fecharPopup = () => {
        setMostrarPopup(false);
      };


      
    return(
        

        <div className="flex p-10 justify-evenly w-3/4">
            
            <div>
            <Image 
                src={produto.images[0]} 
                alt="Imagem"
                width={300}
                height={300}
                className="rounded-md"
            />
            </div>

            <div className="flex flex-col gap-3 text-black">
                
                <span className="text-2xl font-black">{produto?.name}</span>
                <div className="flex flex-col">
                    <span className="text-green-500 font-bold">{Moeda.formatar(props.precoEncontrado.unit_amount/100)}</span>
                    <span className="text-zinc-500 font-mono text-sm">Portes incluídos</span>
                </div>  
                <span className="font-serif text-sm">TAMANHO</span>

                <select value={tamanho} onChange={e => setTamanho(e.target.value)} className="p-1 rounded-md mb-3">
                        
                
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                  
                  <span className="text-gray-600">Personalização +2€</span>
                  <input className="ph" type="text"  name="name" placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}/>
                  <input className="ph" type="text" name="name" placeholder="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}/>
                
                
                    
                
                <button onClick={handleAdicionarAoCarrinho} className="flex justify-center botao gap-2 ">Adicionar ao Carrinho <IconShoppingCart/></button>
                
            </div>
            <div className="fixed top-[35%] text-black right-10">
                {mostrarPopup && (
                    <CarrinhoPopUp onClose={fecharPopup} />
                )}
            </div>
           
        </div>
    )
}


export async function getServerSideProps({ params }) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
    const produtoId = params.produtoId;
  
    try {
      const produtoEncontrado = await stripe.products.retrieve(produtoId);
  
      const priceId = produtoEncontrado.default_price;

      const precoEncontrado = await stripe.prices.retrieve(priceId);
  
      return {
        props: {
          precoEncontrado,
        },
      };
    } catch (error) {
      console.error("Erro ao buscar o preço do Stripe:", error);
    }
  
    return {
      props: {
        precoEncontrado: null,
      },
    };
  }


