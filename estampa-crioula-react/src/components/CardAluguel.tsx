import type { Aluguel } from '../data/alugueis'

type CardAluguelProps = {
  item: Aluguel
}

export function CardAluguel({ item }: CardAluguelProps) {
  return (
    <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
      <div className="product-card__gallery">
        <img className={`is-active ${item.classeImagem}`} src={item.imagem} alt={item.alt} decoding="async" />
      </div>
      <div className="product-card__body">
        <h3>{item.nome}</h3>
        <p>{item.descricao}</p>
        <strong className="price">{item.valor}</strong>
        <button className="rental-button" type="button">Consultar aluguel</button>
      </div>
    </article>
  )
}
