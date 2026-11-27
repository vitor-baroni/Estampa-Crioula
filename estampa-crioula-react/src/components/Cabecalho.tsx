type CabecalhoProps = {
  escuro: boolean
  aoAlternarTema: () => void
  quantidadeCarrinho: number
  carrinhoAberto: boolean
  aoAbrirCarrinho: () => void
  contaAberta: boolean
  aoAbrirConta: () => void
}

export function Cabecalho({ escuro, aoAlternarTema, quantidadeCarrinho, carrinhoAberto, aoAbrirCarrinho, contaAberta, aoAbrirConta }: CabecalhoProps) {
  return (
    <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

    <header className="site-header">
        <div className="announcement">
            <div className="container announcement__inner">
                <span>Bem-vindo à Estampa Crioula!</span>
                <a href="#rodape">Suporte</a>
            </div>
        </div>

        <div className="container header-main">
            <a className="brand" href="#" aria-label="Estampa Crioula — página inicial">
                <img className="brand__logo" src="logo-otimizada.png" alt="Estampa Crioula" />
                <span className="brand__name">Estampa Crioula</span>
            </a>

            <form className="search" role="search">
                <label className="sr-only" htmlFor="busca">Buscar produtos</label>
                <input id="busca" type="search" placeholder="Estou buscando por..." autoComplete="off" />
                <button type="submit" aria-label="Buscar">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="11" cy="11" r="6.5"></circle>
                        <path d="m16 16 4.3 4.3"></path>
                    </svg>
                </button>
            </form>

            <div className="header-actions">
                <button className="theme-button" type="button" onClick={aoAlternarTema}
                    aria-label={escuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
                    title={escuro ? 'Ativar modo claro' : 'Ativar modo escuro'} aria-pressed={escuro}>
                    {escuro ? (
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
                        </svg>
                    )}
                </button>
                <button className="account-button" type="button" aria-label="Minha conta"
                    onClick={aoAbrirConta} aria-haspopup="dialog" aria-controls="minha-conta" aria-expanded={contaAberta}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="8" r="4"></circle>
                        <path d="M4.8 21c.6-4.2 3-6.3 7.2-6.3s6.6 2.1 7.2 6.3"></path>
                    </svg>
                    <span>Minha conta</span>
                </button>
                <button className="cart-button" type="button"
                    onClick={aoAbrirCarrinho} aria-haspopup="dialog" aria-controls="carrinho" aria-expanded={carrinhoAberto}
                    aria-label={`Carrinho, ${quantidadeCarrinho} ${quantidadeCarrinho === 1 ? 'produto' : 'produtos'}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 4h2l2.2 10.2h10.9l2-7.1H6"></path>
                        <circle cx="9" cy="19" r="1.3"></circle>
                        <circle cx="18" cy="19" r="1.3"></circle>
                    </svg>
                    <span className="cart-count" aria-hidden="true">{quantidadeCarrinho}</span>
                </button>
            </div>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
            <div className="container nav-track">
                <a className="is-active" href="#">Início</a>
                <a href="#mais-vendidos">Bombachas</a>
                <a href="#mais-vendidos">Vestidos</a>
                <a href="#mais-vendidos">Botas</a>
                <a href="#mais-vendidos">Sapatilhas</a>
                <a href="#mais-vendidos">Alpargatas</a>
            </div>
        </nav>
    </header>
    </>
  )
}
