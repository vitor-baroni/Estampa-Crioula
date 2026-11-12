import type { Produto } from '../data/produtos'
import { CardVenda } from './CardVenda'

type ListaVendasProps = {
  grupos: Produto[][]
  pagina: number
  aoSelecionarPagina: (pagina: number) => void
  fotosAtivas: { [id: number]: number }
  aoSelecionarFoto: (id: number, indice: number) => void
}

export function ListaVendas({ grupos, pagina, aoSelecionarPagina, fotosAtivas, aoSelecionarFoto }: ListaVendasProps) {
  return (
    <section className="product-section product-section--wide container" id="mais-vendidos">
      <div className="section-heading">
        <div><h1>Itens mais vendidos</h1></div>
        <a href="#mais-vendidos">Ver todos <span aria-hidden="true">→</span></a>
      </div>
      <div className="vitrine-linha">
        {grupos.length > 1 && (
          <button className="vitrine-seta" type="button" aria-controls="vitrine-vendas"
            aria-label="Grupo anterior de produtos" disabled={pagina === 0}
            onClick={() => aoSelecionarPagina(pagina - 1)}>
            &lt;
          </button>
        )}
        <div className="vitrine-janela" id="vitrine-vendas">
          <div className="vitrine-faixa" style={{ transform: `translateX(-${Math.max(0, pagina) * 100}%)` }}>
            {grupos.map((grupo, indice) => (
              <div key={grupo[0].id} className="product-grid product-grid--five vitrine-pagina" inert={indice !== pagina}>
                {grupo.map(produto => (
                  <CardVenda
                    key={produto.id}
                    produto={produto}
                    fotoAtiva={fotosAtivas[produto.id] ?? 0}
                    aoSelecionarFoto={aoSelecionarFoto}
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
