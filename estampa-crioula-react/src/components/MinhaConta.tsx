import { useEffect, useRef, useState } from 'react'
import type { Produto } from '../data/produtos'
import type { Aluguel } from '../data/alugueis'

type MinhaContaProps = {
  aberta: boolean
  produtosFavoritos: Produto[]
  alugueisFavoritos: Aluguel[]
  carregando: boolean
  erro: string | null
  aoFechar: () => void
}

export function MinhaConta({ aberta, produtosFavoritos, alugueisFavoritos, carregando, erro, aoFechar }: MinhaContaProps) {
  const dialogo = useRef<HTMLDialogElement>(null)
  const [loginExemplo, setLoginExemplo] = useState(false)
  const usuario = { nome: 'Vitor Baroni', email: 'baronivitor2006@gmail.com' }
  const totalFavoritos = produtosFavoritos.length + alugueisFavoritos.length

  useEffect(() => {
    if (aberta) dialogo.current?.showModal()
    else dialogo.current?.close()
  }, [aberta])

  return (
    <dialog className="account-dialog" id="minha-conta" ref={dialogo} aria-labelledby="titulo-minha-conta"
      onCancel={aoFechar} onClick={event => { if (event.target === event.currentTarget) aoFechar() }}>
      <div className="account-panel">
        <header className="account-heading">
          <h2 id="titulo-minha-conta">Minha conta</h2>
          <button className="account-close" type="button" onClick={aoFechar} aria-label="Fechar minha conta">×</button>
        </header>
        <div className="account-content">
          <section className="account-profile" aria-labelledby="titulo-dados-usuario">
            <h3 id="titulo-dados-usuario">Dados do usuário</h3>
            <dl className="account-data">
              <div><dt>Nome</dt><dd>{usuario.nome}</dd></div>
              <div><dt>E-mail</dt><dd>{usuario.email}</dd></div>
            </dl>
          </section>
          <section className="account-login" aria-label="Acesso com Google">
            {loginExemplo ? (
              <>
                <p role="status">Acesso de demonstração. Nenhuma conta Google foi conectada.</p>
                <button className="account-signout" type="button" onClick={() => setLoginExemplo(false)}>Sair do exemplo</button>
              </>
            ) : (
              <>
                <button className="google-button" type="button" onClick={() => setLoginExemplo(true)}>
                  <span className="google-mark" aria-hidden="true">G</span>Entrar com Google
                </button>
                <p>Apenas uma demonstração, sem autenticação real.</p>
              </>
            )}
          </section>
          <section className="account-favorites" aria-labelledby="titulo-favoritos">
            <h3 id="titulo-favoritos">Produtos favoritados ({totalFavoritos})</h3>
            {carregando && <p className="account-message" role="status">Carregando seus favoritos...</p>}
            {erro && <p className="account-message account-message--error" role="alert">{erro}</p>}
            {!carregando && !erro && totalFavoritos === 0 && (
              <p className="account-message">Você ainda não tem favoritos. Toque no coração de um produto para salvá-lo aqui.</p>
            )}
            {totalFavoritos > 0 && (
              <ul className="account-favorite-list">
                {produtosFavoritos.map(produto => (
                  <li className="account-favorite" key={`venda-${produto.id}`}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
                    <div>
                      <h4>{produto.nome}</h4>
                      {produto.preco !== null && (
                        <p>{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                      )}
                    </div>
                  </li>
                ))}
                {alugueisFavoritos.map(item => (
                  <li className="account-favorite" key={`aluguel-${item.id}`}>
                    <img src={item.imagem} alt={item.alt} />
                    <div>
                      <h4>{item.nome}</h4>
                      <p>Aluguel · {item.valor}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
        <footer className="account-footer">
          <button className="account-back" type="button" onClick={aoFechar}>Voltar à loja</button>
        </footer>
      </div>
    </dialog>
  )
}
