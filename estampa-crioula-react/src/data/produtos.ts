export type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number | null
  fotos: { src: string; alt: string }[]
  ajustarFoto?: boolean
}

export type ProdutoApi = {
  id: string
  tipo: string
  nome: string
  descricao: string
  preco: string
  imagem: string
  alt: string
  imagem2: string
  alt2: string
  ajustarFoto: string
}
