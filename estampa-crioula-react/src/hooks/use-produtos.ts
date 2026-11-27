import { useEffect, useState } from 'react'
import type { Produto, ProdutoApi } from '../data/produtos'

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://my.api.mockaroo.com/estampa-crioula/products?key=e3e96e00', {
      signal: controller.signal,
    })
      .then(resposta => {
        if (!resposta.ok) throw new Error('Erro ao buscar os produtos')
        return resposta.json()
      })
      .then((dados: ProdutoApi[]) => {
        const vendas = dados.filter(item => item.tipo === 'venda').map(item => ({
          id: Number(item.id),
          nome: item.nome,
          descricao: item.descricao,
          preco: item.preco ? Number(item.preco) : null,
          fotos: item.imagem2
            ? [{ src: item.imagem, alt: item.alt }, { src: item.imagem2, alt: item.alt2 }]
            : [{ src: item.imagem, alt: item.alt }],
          ajustarFoto: item.ajustarFoto === 'true',
        }))
        setProdutos(vendas)
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setErro('Não foi possível carregar os produtos. Verifique sua conexão e recarregue a página para tentar novamente.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setCarregando(false)
      })

    return () => controller.abort()
  }, [])

  return { produtos, carregando, erro }
}
