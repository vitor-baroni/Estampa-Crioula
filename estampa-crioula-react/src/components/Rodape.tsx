export function Rodape() {
  const currentYear = new Date().getFullYear()

  return (
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
  )
}
