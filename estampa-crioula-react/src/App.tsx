import { useEffect, useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Destaques } from './components/Destaques'
import { ListaVendas } from './components/ListaVendas'
import { ListaAlugueis } from './components/ListaAlugueis'
import { Banners } from './components/Banners'
import { Rodape } from './components/Rodape'
import { produtos, type Produto } from './data/produtos'
import { alugueis, type Aluguel } from './data/alugueis'
import './App.css'

function itensPorPagina() {
  if (window.matchMedia('(min-width: 1024px)').matches) return 5
  if (window.matchMedia('(min-width: 768px)').matches) return 3
  return 2
}


function App() {
  const [fotosAtivas, setFotosAtivas] = useState<{ [id: number]: number }>({})

  const [quantidade, setQuantidade] = useState(itensPorPagina)
  const [primeiraVenda, setPrimeiraVenda] = useState(0)
  const [primeiroAluguel, setPrimeiroAluguel] = useState(0)

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

  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <Destaques />
        <ListaVendas
          grupos={gruposVendas}
          pagina={paginaVendas}
          aoSelecionarPagina={selecionarPaginaVendas}
          fotosAtivas={fotosAtivas}
          aoSelecionarFoto={selecionarFoto}
        />
        <ListaAlugueis
          grupos={gruposAlugueis}
          pagina={paginaAlugueis}
          aoSelecionarPagina={selecionarPaginaAlugueis}
        />
        <Banners />
      </main>
      <Rodape />
    </>
  )
}

export default App
