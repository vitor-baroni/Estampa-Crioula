import type { Aluguel } from '../data/alugueis'
import { CardAluguel } from './CardAluguel'

type ListaAlugueisProps = {
  grupos: Aluguel[][]
  pagina: number
  mostrarTodos: boolean
  aoAlternarTodos: () => void
  aoSelecionarPagina: (pagina: number) => void
  favoritos: number[]
  aoFavoritar: (id: number) => void
}

export function ListaAlugueis({ grupos, pagina, mostrarTodos, aoAlternarTodos, aoSelecionarPagina, favoritos, aoFavoritar }: ListaAlugueisProps) {
  return (
    <section className="product-section product-section--rental" id="aluguel">
      <div className="container product-section--wide">
      <div className="section-heading">
        <div><h2>Aluguel de pilchas</h2></div>
        <button className="view-all-button" type="button" aria-expanded={mostrarTodos}
          aria-controls="vitrine-alugueis" onClick={aoAlternarTodos}>
          {mostrarTodos ? 'Ver menos' : 'Ver todos'} <span aria-hidden="true">{mostrarTodos ? '↑' : '→'}</span>
        </button>
      </div>
      <div className={`vitrine-linha${mostrarTodos ? ' vitrine-linha--all' : ''}`}>
        {grupos.length > 1 && (
          <button className="vitrine-seta" type="button" aria-controls="vitrine-alugueis"
            aria-label="Grupo anterior de pilchas para aluguel" disabled={pagina === 0}
            onClick={() => aoSelecionarPagina(pagina - 1)}>
            &lt;
          </button>
        )}
        <div className="vitrine-janela" id="vitrine-alugueis">
          <div className="vitrine-faixa" style={{ transform: mostrarTodos ? 'none' : `translateX(-${Math.max(0, pagina) * 100}%)` }}>
            {grupos.map((grupo, indice) => (
              <div key={grupo[0].id} className={`product-grid product-grid--rental vitrine-pagina${mostrarTodos ? ' product-grid--all' : ''}`} inert={indice !== pagina}>
                {grupo.map(item => (
                  <CardAluguel key={item.id} item={item}
                    favorito={favoritos.includes(item.id)} aoFavoritar={aoFavoritar} />
                ))}
              </div>
            ))}
          </div>
        </div>
        {grupos.length > 1 && (
          <button className="vitrine-seta" type="button" aria-controls="vitrine-alugueis"
            aria-label="Próximo grupo de pilchas para aluguel" disabled={pagina === grupos.length - 1}
            onClick={() => aoSelecionarPagina(pagina + 1)}>
            &gt;
          </button>
        )}
      </div>
      {grupos.length > 1 && (
        <div className="vitrine-pontos" role="group" aria-label="Páginas do aluguel de pilchas">
          {grupos.map((grupo, indice) => (
            <button
              key={grupo[0].id}
              type="button"
              aria-label={`Mostrar grupo ${indice + 1} de ${grupos.length}`}
              aria-current={indice === pagina ? 'true' : undefined}
              aria-controls="vitrine-alugueis"
              onClick={() => aoSelecionarPagina(indice)}
            />
          ))}
        </div>
      )}
      </div>
    </section>
  )
}
