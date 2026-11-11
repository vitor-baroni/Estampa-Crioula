import { useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Destaques } from './components/Destaques'
import { ListaVendas } from './components/ListaVendas'
import { ListaAlugueis } from './components/ListaAlugueis'
import { Banners } from './components/Banners'
import { Rodape } from './components/Rodape'
import { produtos } from './data/produtos'
import { alugueis } from './data/alugueis'
import './App.css'

function App() {
  const [fotosAtivas, setFotosAtivas] = useState<{ [id: number]: number }>({})

  function selecionarFoto(id: number, indice: number) {
    setFotosAtivas(anteriores => ({ ...anteriores, [id]: indice }))
  }

  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <Destaques />
        <ListaVendas produtos={produtos} fotosAtivas={fotosAtivas} aoSelecionarFoto={selecionarFoto} />
        <ListaAlugueis itens={alugueis} />
        <Banners />
      </main>
      <Rodape />
    </>
  )
}

export default App
