export function Banners() {
  return (
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
  )
}
