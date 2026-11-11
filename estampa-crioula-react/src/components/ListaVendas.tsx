import type { Produto } from '../data/produtos'
import { CardVenda } from './CardVenda'

type ListaVendasProps = {
  produtos: Produto[]
  fotosAtivas: { [id: number]: number }
  aoSelecionarFoto: (id: number, indice: number) => void
}

export function ListaVendas({ produtos, fotosAtivas, aoSelecionarFoto }: ListaVendasProps) {
  return (
    <section className="product-section product-section--wide container" id="mais-vendidos">
      <div className="section-heading">
        <div><h1>Itens mais vendidos</h1></div>
        <a href="#mais-vendidos">Ver todos <span aria-hidden="true">→</span></a>
      </div>
      <div className="product-grid product-grid--five">
        {produtos.map(produto => (
          <CardVenda
            key={produto.id}
            produto={produto}
            fotoAtiva={fotosAtivas[produto.id] ?? 0}
            aoSelecionarFoto={aoSelecionarFoto}
          />
        ))}
      </div>
    </section>
  )
}
