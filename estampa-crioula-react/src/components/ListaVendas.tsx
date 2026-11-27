import type { Produto } from '../data/produtos'
import type { ItemCarrinho } from '../data/carrinho'
import { CardVenda } from './CardVenda'

type ListaVendasProps = {
  carregando: boolean
  erro: string | null
  grupos: Produto[][]
  pagina: number
  mostrarTodos: boolean
  aoAlternarTodos: () => void
  aoSelecionarPagina: (pagina: number) => void
  fotosAtivas: { [id: number]: number }
  aoSelecionarFoto: (id: number, indice: number) => void
  favoritos: number[]
  aoFavoritar: (id: number) => void
  carrinho: ItemCarrinho[]
  aoAdicionarCarrinho: (produto: Produto) => void
}

export function ListaVendas({ carregando, erro, grupos, pagina, mostrarTodos, aoAlternarTodos, aoSelecionarPagina, fotosAtivas, aoSelecionarFoto, favoritos, aoFavoritar, carrinho, aoAdicionarCarrinho }: ListaVendasProps) {
  return (
    <section className="product-section product-section--wide container" id="mais-vendidos">
      <div className="section-heading">
        <div><h1>Itens mais vendidos</h1></div>
        <button className="view-all-button" type="button" aria-expanded={mostrarTodos}
          aria-controls="vitrine-vendas" onClick={aoAlternarTodos}>
          {mostrarTodos ? 'Ver menos' : 'Ver todos'} <span aria-hidden="true">{mostrarTodos ? '↑' : '→'}</span>
        </button>
      </div>
      {carregando && <p className="product-message" role="status">Carregando produtos...</p>}
      {erro && <p className="product-message product-message--error" role="alert">{erro}</p>}
      {!carregando && !erro && grupos.length === 0 && (
        <p className="product-message" role="status">Nenhum produto disponível no momento.</p>
      )}
      {!carregando && !erro && grupos.length > 0 && (
      <div className={`vitrine-linha${mostrarTodos ? ' vitrine-linha--all' : ''}`}>
        {grupos.length > 1 && (
          <button className="vitrine-seta" type="button" aria-controls="vitrine-vendas"
            aria-label="Grupo anterior de produtos" disabled={pagina === 0}
            onClick={() => aoSelecionarPagina(pagina - 1)}>
            &lt;
          </button>
        )}
        <div className="vitrine-janela" id="vitrine-vendas">
          <div className="vitrine-faixa" style={{ transform: mostrarTodos ? 'none' : `translateX(-${Math.max(0, pagina) * 100}%)` }}>
            {grupos.map((grupo, indice) => (
              <div key={grupo[0].id} className={`product-grid product-grid--five vitrine-pagina${mostrarTodos ? ' product-grid--all' : ''}`} inert={indice !== pagina}>
                {grupo.map(produto => (
                  <CardVenda
                    key={produto.id}
                    produto={produto}
                    fotoAtiva={fotosAtivas[produto.id] ?? 0}
                    aoSelecionarFoto={aoSelecionarFoto}
                    favorito={favoritos.includes(produto.id)}
                    aoFavoritar={aoFavoritar}
                    noCarrinho={carrinho.some(item => item.produto.id === produto.id)}
                    aoAdicionarCarrinho={aoAdicionarCarrinho}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {grupos.length > 1 && (
          <button className="vitrine-seta" type="button" aria-controls="vitrine-vendas"
            aria-label="Próximo grupo de produtos" disabled={pagina === grupos.length - 1}
            onClick={() => aoSelecionarPagina(pagina + 1)}>
            &gt;
          </button>
        )}
      </div>
      )}
      {grupos.length > 1 && (
        <div className="vitrine-pontos" role="group" aria-label="Páginas dos itens mais vendidos">
          {grupos.map((grupo, indice) => (
            <button
              key={grupo[0].id}
              type="button"
              aria-label={`Mostrar grupo ${indice + 1} de ${grupos.length}`}
              aria-current={indice === pagina ? 'true' : undefined}
              aria-controls="vitrine-vendas"
              onClick={() => aoSelecionarPagina(indice)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
