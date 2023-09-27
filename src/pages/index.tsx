import Link from 'next/link'
import Header from '@/components/estrutura/Header'



export default function Home() {
  return (
      <div  >
          <Header/>
          <Link href="produtos/produtos">Produtos</Link>
      </div>
    )
}
