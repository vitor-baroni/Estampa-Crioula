import type { Aluguel } from '../data/alugueis'
import { CardAluguel } from './CardAluguel'

type ListaAlugueisProps = {
  itens: Aluguel[]
}

export function ListaAlugueis({ itens }: ListaAlugueisProps) {
  return (
    <section className="product-section product-section--rental" id="aluguel">
      <div className="container product-section--wide">
        <div className="section-heading">
          <div><h2>Aluguel de pilchas</h2></div>
          <a href="#aluguel">Como funciona <span aria-hidden="true">→</span></a>
        </div>
        <div className="product-grid product-grid--rental">
          {itens.map(item => <CardAluguel key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
