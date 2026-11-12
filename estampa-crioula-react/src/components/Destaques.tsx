export function Destaques() {
  return (
    <section className="hero container" aria-label="Destaques">
          <div className="hero-static">
                <img src="banner casal.img.jpeg" alt="Casal usando indumentária gaúcha em um galpão" decoding="async" />
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
  )
}
