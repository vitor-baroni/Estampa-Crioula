import type { Produto } from '../data/produtos'

type CardVendaProps = {
  produto: Produto
  fotoAtiva: number
  aoSelecionarFoto: (id: number, indice: number) => void
  favorito: boolean
  aoFavoritar: (id: number) => void
  noCarrinho: boolean
  aoAdicionarCarrinho: (produto: Produto) => void
}

export function CardVenda({ produto, fotoAtiva, aoSelecionarFoto, favorito, aoFavoritar, noCarrinho, aoAdicionarCarrinho }: CardVendaProps) {
  const foto = produto.fotos[fotoAtiva] ?? produto.fotos[0]
  const total = produto.fotos.length

  if (!produto.nome && !produto.descricao && !foto && produto.preco === null) {
    return <article className="product-card product-card--vazio" aria-hidden="true" />
  }

  function anterior() {
    aoSelecionarFoto(produto.id, fotoAtiva === 0 ? total - 1 : fotoAtiva - 1)
  }

  function proxima() {
    aoSelecionarFoto(produto.id, fotoAtiva === total - 1 ? 0 : fotoAtiva + 1)
  }

  return (
    <article className="product-card product-card--with-gallery">
      <button className="favorite-button" type="button" aria-pressed={favorito}
        aria-label={`${favorito ? 'Remover dos favoritos' : 'Favoritar'}: ${produto.nome.trim()}`}
        onClick={() => aoFavoritar(produto.id)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </button>
      {foto && (
        <div className={produto.ajustarFoto ? 'product-card__gallery product-card__gallery--contain' : 'product-card__gallery'}>
          <img className="is-active" src={foto.src} alt={foto.alt} decoding="async" />
          {total > 1 && (
            <>
              <button className="product-card__previous" type="button" onClick={anterior} aria-label={`Foto anterior de ${produto.nome}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4-8 8 8 8" /></svg>
              </button>
              <button className="product-card__next" type="button" onClick={proxima} aria-label={`Próxima foto de ${produto.nome}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
              </button>
              <div className="product-card__gallery-dots" aria-hidden="true">
                {produto.fotos.map((imagem, indice) => (
                  <span key={imagem.src} className={indice === fotoAtiva ? 'is-active' : ''} />
                ))}
              </div>
              <span className="sr-only" aria-live="polite">Foto {fotoAtiva + 1} de {total}. {foto.alt}</span>
            </>
          )}
        </div>
      )}
      <div className="product-card__body">
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        {produto.preco !== null && (
          <strong className="price">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
        )}
        <button className={`add-cart ${noCarrinho ? 'is-in-cart' : ''}`} type="button"
          title={noCarrinho ? 'Adicionar mais uma unidade' : 'Adicionar ao carrinho'}
          onClick={() => aoAdicionarCarrinho(produto)}>
          {noCarrinho ? 'Produto no carrinho' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </article>
  )
}
