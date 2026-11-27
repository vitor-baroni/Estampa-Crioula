import { useEffect, useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Destaques } from './components/Destaques'
import { ListaVendas } from './components/ListaVendas'
import { ListaAlugueis } from './components/ListaAlugueis'
import { Banners } from './components/Banners'
import { Rodape } from './components/Rodape'
import { Carrinho } from './components/Carrinho'
import { MinhaConta } from './components/MinhaConta'
import type { Produto } from './data/produtos'
import type { ItemCarrinho } from './data/carrinho'
import { alugueis, type Aluguel } from './data/alugueis'
import { useProdutos } from './hooks/use-produtos'
import './App.css'

function itensPorPagina() {
  if (window.matchMedia('(min-width: 1024px)').matches) return 5
  if (window.matchMedia('(min-width: 768px)').matches) return 3
  return 2
}


function App() {
  const { produtos, carregando, erro } = useProdutos()
  const [fotosAtivas, setFotosAtivas] = useState<{ [id: number]: number }>({})
  const [favoritos, setFavoritos] = useState<number[]>(() => {
    try {
      const salvos = JSON.parse(localStorage.getItem('estampa-crioula-favoritos') ?? '[]')
      return Array.isArray(salvos) ? salvos : []
    } catch {
      return []
    }
  })
  const [favoritosAlugueis, setFavoritosAlugueis] = useState<number[]>(() => {
    try {
      const salvos = JSON.parse(localStorage.getItem('estampa-crioula-favoritos-alugueis') ?? '[]')
      return Array.isArray(salvos) ? salvos : []
    } catch {
      return []
    }
  })
  const [escuro, setEscuro] = useState(() => localStorage.getItem('estampa-crioula-tema') === 'escuro')
  const [aviso, setAviso] = useState(0)
  const [mensagem, setMensagem] = useState('')
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [contaAberta, setContaAberta] = useState(false)
  const quantidadeCarrinho = carrinho.reduce((soma, item) => soma + item.quantidade, 0)
  const produtosFavoritos = produtos.filter(produto => favoritos.includes(produto.id))
  const alugueisFavoritos = alugueis.filter(item => favoritosAlugueis.includes(item.id))

  const [quantidade, setQuantidade] = useState(itensPorPagina)
  const [primeiraVenda, setPrimeiraVenda] = useState(0)
  const [primeiroAluguel, setPrimeiroAluguel] = useState(0)
  const [mostrarTodasVendas, setMostrarTodasVendas] = useState(false)
  const [mostrarTodosAlugueis, setMostrarTodosAlugueis] = useState(false)

  const gruposVendas: Produto[][] = []
  for (let inicio = 0; inicio < produtos.length; inicio += quantidade) {
    gruposVendas.push(produtos.slice(inicio, inicio + quantidade))
  }

  const gruposAlugueis: Aluguel[][] = []
  for (let inicio = 0; inicio < alugueis.length; inicio += quantidade) {
    gruposAlugueis.push(alugueis.slice(inicio, inicio + quantidade))
  }

  const paginaVendas = Math.max(0, Math.min(Math.floor(primeiraVenda / quantidade), gruposVendas.length - 1))
  const paginaAlugueis = Math.max(0, Math.min(Math.floor(primeiroAluguel / quantidade), gruposAlugueis.length - 1))

  useEffect(() => {
    if (aviso === 0) return

    const tempo = window.setTimeout(() => setAviso(0), 3000)
    return () => window.clearTimeout(tempo)
  }, [aviso])

  useEffect(() => {
    localStorage.setItem('estampa-crioula-favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  useEffect(() => {
    localStorage.setItem('estampa-crioula-favoritos-alugueis', JSON.stringify(favoritosAlugueis))
  }, [favoritosAlugueis])

  useEffect(() => {
    const tema = escuro ? 'escuro' : 'claro'
    document.documentElement.dataset.tema = tema
    localStorage.setItem('estampa-crioula-tema', tema)
  }, [escuro])

  useEffect(() => {
    function ajustarVitrines() {
      setQuantidade(itensPorPagina())
    }
    window.addEventListener('resize', ajustarVitrines)
    return () => window.removeEventListener('resize', ajustarVitrines)
  }, [])

  function selecionarPaginaVendas(pagina: number) {
    setPrimeiraVenda(pagina * quantidade)
  }

  function selecionarPaginaAlugueis(pagina: number) {
    setPrimeiroAluguel(pagina * quantidade)
  }

  function selecionarFoto(id: number, indice: number) {
    setFotosAtivas(anteriores => ({ ...anteriores, [id]: indice }))
  }

  function favoritar(id: number) {
    const jaFavorito = favoritos.includes(id)
    setFavoritos(anteriores => anteriores.includes(id)
      ? anteriores.filter(favorito => favorito !== id)
      : [...anteriores, id])
    mostrarAviso(jaFavorito ? 'produto removido dos favoritos!' : 'produto favoritado!')
  }

  function mostrarAviso(texto: string) {
    setMensagem(texto)
    setAviso(anterior => anterior + 1)
  }

  function favoritarAluguel(id: number) {
    const jaFavorito = favoritosAlugueis.includes(id)
    setFavoritosAlugueis(anteriores => anteriores.includes(id)
      ? anteriores.filter(favorito => favorito !== id)
      : [...anteriores, id])
    mostrarAviso(jaFavorito ? 'produto removido dos favoritos!' : 'produto favoritado!')
  }

  function adicionarAoCarrinho(produto: Produto) {
    setCarrinho(anteriores => {
      const existe = anteriores.some(item => item.produto.id === produto.id)
      if (existe) {
        return anteriores.map(item => item.produto.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item)
      }
      return [...anteriores, { produto, quantidade: 1 }]
    })
    mostrarAviso('produto adicionado ao carrinho!')
  }

  function removerDoCarrinho(id: number) {
    setCarrinho(anteriores => anteriores.filter(item => item.produto.id !== id))
  }

  return (
    <>
      <Cabecalho escuro={escuro} aoAlternarTema={() => setEscuro(!escuro)}
        quantidadeCarrinho={quantidadeCarrinho} carrinhoAberto={carrinhoAberto}
        aoAbrirCarrinho={() => setCarrinhoAberto(true)} contaAberta={contaAberta}
        aoAbrirConta={() => setContaAberta(true)} />
      <main id="conteudo">
        <Destaques />
        <ListaVendas
          carregando={carregando}
          erro={erro}
          grupos={mostrarTodasVendas && produtos.length > 0 ? [produtos] : gruposVendas}
          pagina={mostrarTodasVendas ? 0 : paginaVendas}
          mostrarTodos={mostrarTodasVendas}
          aoAlternarTodos={() => setMostrarTodasVendas(anterior => !anterior)}
          aoSelecionarPagina={selecionarPaginaVendas}
          fotosAtivas={fotosAtivas}
          aoSelecionarFoto={selecionarFoto}
          favoritos={favoritos}
          aoFavoritar={favoritar}
          carrinho={carrinho}
          aoAdicionarCarrinho={adicionarAoCarrinho}
        />
        <ListaAlugueis
          grupos={mostrarTodosAlugueis ? [alugueis] : gruposAlugueis}
          pagina={mostrarTodosAlugueis ? 0 : paginaAlugueis}
          mostrarTodos={mostrarTodosAlugueis}
          aoAlternarTodos={() => setMostrarTodosAlugueis(anterior => !anterior)}
          aoSelecionarPagina={selecionarPaginaAlugueis}
          favoritos={favoritosAlugueis}
          aoFavoritar={favoritarAluguel}
        />
        <Banners />
      </main>
      <Rodape />
      <Carrinho aberto={carrinhoAberto} itens={carrinho}
        aoFechar={() => setCarrinhoAberto(false)} aoRemover={removerDoCarrinho} />
      <MinhaConta aberta={contaAberta} produtosFavoritos={produtosFavoritos}
        alugueisFavoritos={alugueisFavoritos}
        carregando={carregando} erro={erro} aoFechar={() => setContaAberta(false)} />
      {aviso > 0 && (
        <div className="toast is-visible" role="status" key={aviso}>
          {mensagem}
        </div>
      )}
    </>
  )
}

export default App
