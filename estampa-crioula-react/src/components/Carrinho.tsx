import { useEffect, useRef } from 'react'
import type { ItemCarrinho } from '../data/carrinho'

type CarrinhoProps = {
  aberto: boolean
  itens: ItemCarrinho[]
  aoFechar: () => void
  aoRemover: (id: number) => void
}

function formatarPreco(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function Carrinho({ aberto, itens, aoFechar, aoRemover }: CarrinhoProps) {
  const dialogo = useRef<HTMLDialogElement>(null)
  const total = itens.reduce((soma, item) => soma + (item.produto.preco ?? 0) * item.quantidade, 0)

  useEffect(() => {
    if (aberto) dialogo.current?.showModal()
    else dialogo.current?.close()
  }, [aberto])

  return (
    <dialog className="cart-dialog" id="carrinho" ref={dialogo} aria-labelledby="titulo-carrinho"
      onCancel={aoFechar} onClick={event => { if (event.target === event.currentTarget) aoFechar() }}>
      <div className="cart-panel">
        <header className="cart-heading">
          <h2 id="titulo-carrinho">Seu carrinho</h2>
          <button className="cart-close" type="button" onClick={aoFechar} aria-label="Fechar carrinho">×</button>
        </header>
        {itens.length === 0 ? (
          <p className="cart-empty">Seu carrinho está vazio. Escolha um produto para começar.</p>
        ) : (
          <ul className="cart-items">
            {itens.map(item => (
              <li className="cart-item" key={item.produto.id}>
                <img src={item.produto.fotos[0].src} alt={item.produto.fotos[0].alt} />
                <div className="cart-item-info">
                  <h3>{item.produto.nome}</h3>
                  <p>Preço unitário: {formatarPreco(item.produto.preco ?? 0)}</p>
                  <div className="cart-item-values">
                    <span>Quantidade: {item.quantidade}</span>
                    <strong>{formatarPreco((item.produto.preco ?? 0) * item.quantidade)}</strong>
                  </div>
                  <button className="cart-remove" type="button" onClick={() => aoRemover(item.produto.id)}
                    aria-label={`Remover ${item.produto.nome.trim()} do carrinho`}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <footer className="cart-summary">
          <div className="cart-total"><span>Total</span><strong>{formatarPreco(total)}</strong></div>
          <button className="cart-continue" type="button" onClick={aoFechar}>Continuar comprando</button>
        </footer>
      </div>
    </dialog>
  )
}
