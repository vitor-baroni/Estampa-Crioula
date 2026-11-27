import type { Aluguel } from '../data/alugueis'

type CardAluguelProps = {
  item: Aluguel
  favorito: boolean
  aoFavoritar: (id: number) => void
}

export function CardAluguel({ item, favorito, aoFavoritar }: CardAluguelProps) {
  if (!item.nome && !item.descricao && !item.imagem && !item.valor) {
    return <article className="product-card product-card--rental product-card--vazio" aria-hidden="true" />
  }

  return (
    <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
      <button className="favorite-button" type="button" aria-pressed={favorito}
        aria-label={`${favorito ? 'Remover dos favoritos' : 'Favoritar'}: ${item.nome.trim()}`}
        onClick={() => aoFavoritar(item.id)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </button>
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
