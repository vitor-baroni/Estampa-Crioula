import './App.css'

function App() {
    const currentYear = new Date().getFullYear()

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
                        <button className="account-button" type="button" aria-label="Minha conta">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="8" r="4"></circle>
                                <path d="M4.8 21c.6-4.2 3-6.3 7.2-6.3s6.6 2.1 7.2 6.3"></path>
                            </svg>
                            <span>Minha conta</span>
                        </button>
                        <button className="cart-button" type="button" aria-label="Carrinho, vazio">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3 4h2l2.2 10.2h10.9l2-7.1H6"></path>
                                <circle cx="9" cy="19" r="1.3"></circle>
                                <circle cx="18" cy="19" r="1.3"></circle>
                            </svg>
                            <span className="cart-count" aria-hidden="true">0</span>
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

            <main id="conteudo">
                <section className="hero container" aria-label="Destaques">
      <div className="hero-static">
        <img
          src="banner casal.img.jpeg"
          alt="Casal usando indumentária gaúcha em um galpão"
          decoding="async"
        />
      </div>

                    <aside className="hero-promos" aria-label="Vantagens da loja">
                        <div className="promo-card promo-card--image promo-card--secure">
                            <img src="banner-compra-segura-2.2x1.png" alt="Tua compra é seguro, tchê!" />
                        </div>
                        <div className="promo-card promo-card--image promo-card--materials">
                            <img src="banner-materiais-2.2x1.png"
                                alt="Materiais de qualidade — conforto, durabilidade e acabamento impecável" />
                        </div>
                    </aside>
                </section>

                <section className="product-section product-section--wide container" id="mais-vendidos">
                    <div className="section-heading">
                        <div>
                            <h1>Itens mais vendidos</h1>
                        </div>
                        <a href="#mais-vendidos">Ver todos <span aria-hidden="true">→</span></a>
                    </div>
                    <div className="product-grid product-grid--five">
                        <article className="product-card product-card--with-gallery">
                            <div className="product-card__gallery" aria-label="Fotos da bombacha masculina campeira" aria-live="polite">
                                <img className="is-active" src="assets/produtos/bombacha-campeira-frente.png"
                                    alt="Bombacha masculina campeira vista de frente" aria-hidden="false" decoding="async" />
                                <img src="assets/produtos/bombacha-campeira-costas.png" alt="Bombacha masculina campeira vista de costas"
                                    aria-hidden="true" decoding="async" />
                                <button className="product-card__previous" type="button" aria-label="Mostrar foto anterior">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m15 4-8 8 8 8"></path>
                                    </svg>
                                </button>
                                <button className="product-card__next" type="button" aria-label="Mostrar próxima foto">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m9 4 8 8-8 8"></path>
                                    </svg>
                                </button>
                                <div className="product-card__gallery-dots" aria-hidden="true">
                                    <span className="is-active"></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="product-card__body">
                                <h2>Bombacha masculina com favo cinza</h2>
                                <p>Conforto e tradição para todos os momentos.</p>
                                <strong className="price">R$ 369,90</strong>
                                <button className="add-cart" type="button">Adicionar ao carrinho</button>
                            </div>
                        </article>
                        <article className="product-card product-card--with-gallery">
                            <div className="product-card__gallery" aria-label="Fotos do vestido bordado tradicionalista" aria-live="polite">
                                <img className="is-active" src="assets/produtos/vestido-bordado-lateral.png"
                                    alt="Vestido bordado tradicionalista em pose lateral" aria-hidden="false" decoding="async" />
                                <img src="assets/produtos/vestido-bordado-frente.png" alt="Vestido bordado tradicionalista visto de frente"
                                    aria-hidden="true" decoding="async" />
                                <button className="product-card__previous" type="button" aria-label="Mostrar foto anterior">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m15 4-8 8 8 8"></path>
                                    </svg>
                                </button>
                                <button className="product-card__next" type="button" aria-label="Mostrar próxima foto">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m9 4 8 8-8 8"></path>
                                    </svg>
                                </button>
                                <div className="product-card__gallery-dots" aria-hidden="true">
                                    <span className="is-active"></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="product-card__body">
                                <h2>Vestido bordado com renda Bordô</h2>
                                <p>Acabamento delicado e modelagem elegante.</p>
                                <strong className="price">R$ 899,99</strong>
                                <button className="add-cart" type="button">Adicionar ao carrinho</button>
                            </div>
                        </article>
                        <article className="product-card product-card--with-gallery">
                            <div className="product-card__gallery" aria-label="Fotos do chapéu campeiro" aria-live="polite">
                                <img className="is-active" src="assets/produtos/chapeu-campeiro-detalhe.png"
                                    alt="Detalhe do chapéu campeiro bege e sua faixa preta" aria-hidden="false" decoding="async" />
                                <img src="assets/produtos/chapeu-campeiro-completo.png" alt="Chapéu campeiro bege completo com cordão"
                                    aria-hidden="true" decoding="async" />
                                <button className="product-card__previous" type="button" aria-label="Mostrar foto anterior">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m15 4-8 8 8 8"></path>
                                    </svg>
                                </button>
                                <button className="product-card__next" type="button" aria-label="Mostrar próxima foto">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m9 4 8 8-8 8"></path>
                                    </svg>
                                </button>
                                <div className="product-card__gallery-dots" aria-hidden="true">
                                    <span className="is-active"></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="product-card__body">
                                <h2>Chapéu campeiro gaúcho caramel aba 11cm</h2>
                                <p>Presença marcante com acabamento resistente.</p>
                                <strong className="price">R$ 459,90</strong>
                                <button className="add-cart" type="button">Adicionar ao carrinho</button>
                            </div>
                        </article>
                        <article className="product-card product-card--with-gallery">
                            <div className="product-card__gallery product-card__gallery--contain"
                                aria-label="Fotos da sapatilha tradicional nº 37" aria-live="polite">
                                <img className="is-active" src="assets/produtos/sapatilha-tradicional-frente.png"
                                    alt="Par de sapatilhas tradicionais pretas visto de frente" aria-hidden="false" decoding="async" />
                                <img src="assets/produtos/sapatilha-tradicional-costas.png"
                                    alt="Par de sapatilhas tradicionais pretas visto por trás e pela lateral" aria-hidden="true"
                                    decoding="async" />
                                <button className="product-card__previous" type="button" aria-label="Mostrar foto anterior">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m15 4-8 8 8 8"></path>
                                    </svg>
                                </button>
                                <button className="product-card__next" type="button" aria-label="Mostrar próxima foto">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m9 4 8 8-8 8"></path>
                                    </svg>
                                </button>
                                <div className="product-card__gallery-dots" aria-hidden="true">
                                    <span className="is-active"></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="product-card__body">
                                <h2>Sapatilha tradicional nº 37</h2>
                                <p>Leveza e firmeza para dançar a noite inteira.</p>
                                <strong className="price">R$ 259,00</strong>
                                <button className="add-cart" type="button">Adicionar ao carrinho</button>
                            </div>
                        </article>
                        <article className="product-card product-card--with-gallery">
                            <div className="product-card__gallery product-card__gallery--contain"
                                aria-label="Fotos da alpargata campeira" aria-live="polite">
                                <img className="is-active" src="assets/produtos/alpargata-campeira-par.png"
                                    alt="Par de alpargatas campeiras verdes" aria-hidden="false" decoding="async" />
                                <img src="assets/produtos/alpargata-campeira-lateral.png"
                                    alt="Alpargata campeira verde vista pela lateral" aria-hidden="true" decoding="async" />
                                <button className="product-card__previous" type="button" aria-label="Mostrar foto anterior">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m15 4-8 8 8 8"></path>
                                    </svg>
                                </button>
                                <button className="product-card__next" type="button" aria-label="Mostrar próxima foto">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="m9 4 8 8-8 8"></path>
                                    </svg>
                                </button>
                                <div className="product-card__gallery-dots" aria-hidden="true">
                                    <span className="is-active"></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="product-card__body">
                                <h2>Alpargata campeira</h2>
                                <p>Leve, resistente e confortável para o uso diário.</p>
                                <strong className="price">R$ 189,90</strong>
                                <button className="add-cart" type="button">Adicionar ao carrinho</button>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="product-section product-section--rental" id="aluguel">
                    <div className="container product-section--wide">
                        <div className="section-heading">
                            <div>
                                <h2>Aluguel de pilchas</h2>
                            </div>
                            <a href="#aluguel">Como funciona <span aria-hidden="true">→</span></a>
                        </div>
                        <div className="product-grid product-grid--rental">
                            <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
                                <div className="product-card__gallery" aria-label="Foto do vestido prenda adulto azul">
                                    <img className="is-active product-card__image--dress" src="assets/produtos/vestido-prenda-adulto-azul.png"
                                        alt="Vestido prenda adulto azul com detalhes bordados" decoding="async" />
                                </div>
                                <div className="product-card__body">
                                    <h2>Vestido prenda - Adulto</h2>
                                    <p>Traje completo preparado para a ocasião.</p>
                                    <strong className="price">Valor a combinar</strong>
                                    <button className="rental-button" type="button">Consultar aluguel</button>
                                </div>
                            </article>
                            <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
                                <div className="product-card__gallery" aria-label="Foto da pilcha completa masculina adulta">
                                    <img className="is-active product-card__image--pilcha"
                                        src="assets/produtos/pilcha-completa-masculina-adulto.png"
                                        alt="Pilcha completa masculina com camisa, colete, lenço e bombacha" decoding="async" />
                                </div>
                                <div className="product-card__body">
                                    <h2>Pilcha completa masculina - Adulto</h2>
                                    <p>Camisa, bombacha, faixa e acessórios.</p>
                                    <strong className="price">Valor a combinar</strong>
                                    <button className="rental-button" type="button">Consultar aluguel</button>
                                </div>
                            </article>
                            <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
                                <div className="product-card__gallery" aria-label="Foto da bota de couro para aluguel">
                                    <img className="is-active product-card__image--rental-boot"
                                        src="assets/produtos/bota-couro-aluguel.png"
                                        alt="Bota de couro preta de cano alto apoiada sobre tijolos" decoding="async" />
                                </div>
                                <div className="product-card__body">
                                    <h2>Bota de couro tam. 41</h2>
                                    <p>Couro resistente, higienizada e pronta para uso.</p>
                                    <strong className="price">Valor a combinar</strong>
                                    <button className="rental-button" type="button">Consultar aluguel</button>
                                </div>
                            </article>
                            <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
                                <div className="product-card__gallery" aria-label="Foto da sapatilha tradicional para aluguel">
                                    <img className="is-active product-card__image--rental-shoes"
                                        src="assets/produtos/sapatilha-tradicional-aluguel.png"
                                        alt="Par de sapatilhas tradicionais pretas com tiras e fivelas" decoding="async" />
                                </div>
                                <div className="product-card__body">
                                    <h2>Sapatilha tradicional</h2>
                                    <p>Modelos confortáveis em diversas numerações.</p>
                                    <strong className="price">Valor a combinar</strong>
                                    <button className="rental-button" type="button">Consultar aluguel</button>
                                </div>
                            </article>
                            <article className="product-card product-card--with-gallery product-card--rental product-card--rental-image">
                                <div className="product-card__gallery" aria-label="Foto da bombacha tradicional para aluguel">
                                    <img className="is-active product-card__image--rental-bombacha"
                                        src="assets/produtos/bombacha-tradicional-aluguel.png"
                                        alt="Bombacha tradicional cinza acompanhada de botas pretas" decoding="async" />
                                </div>
                                <div className="product-card__body">
                                    <h2>Bombacha tradicional</h2>
                                    <p>Modelo confortável disponível em diversos tamanhos.</p>
                                    <strong className="price">Valor a combinar</strong>
                                    <button className="rental-button" type="button">Consultar aluguel</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="container banner-row" aria-label="Informações da loja">
                    <div className="empty-banner empty-banner--main">
                        <img src="assets/banner-rodape-tradicionalista.png"
                            alt="Estampa Crioula — tradição que se veste com orgulho" />
                    </div>
                    <div className="empty-banner empty-banner--payment">
                        <img src="assets/banner-meios-pagamento.png"
                            alt="Meios de pagamento aceitos: Mercado Pago, Pix, Visa, Mastercard, Elo, American Express, Hipercard, Diners Club e boleto" />
                    </div>
                </section>
            </main>

            <footer className="site-footer" id="rodape">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <strong>Estampa Crioula</strong>
                        <p>Tradição que se veste com orgulho.</p>
                    </div>
                    <div>
                        <h2>Políticas e segurança</h2>
                        <a href="#">Termos de uso</a>
                        <a href="#">Privacidade e cookies</a>
                    </div>
                    <div>
                        <h2>Compras e devolução</h2>
                        <a href="#">Política de devolução</a>
                        <a href="#">Trocas e prazos</a>
                    </div>
                    <div>
                        <h2>Institucional</h2>
                        <a href="#">Sobre a Estampa Crioula</a>
                        <a href="#">Fale conosco</a>
                    </div>
                </div>
                <div className="container footer-bottom">© {currentYear} Estampa Crioula. Todos os direitos reservados.</div>
            </footer>

            <div className="toast" role="status" aria-live="polite"></div>
        </>
    )
}

export default App
