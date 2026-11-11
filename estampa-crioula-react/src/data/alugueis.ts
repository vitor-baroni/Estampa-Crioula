export type Aluguel = {
  id: number
  nome: string
  descricao: string
  valor: string
  imagem: string
  alt: string
  classeImagem: string
}

export const alugueis: Aluguel[] = [
  {
    id: 1,
    nome: "Vestido prenda - Adulto",
    descricao: "Traje completo preparado para a ocasião.",
    valor: "Valor a combinar",
    imagem: "assets/produtos/vestido-prenda-adulto-azul.png",
    alt: "Vestido prenda adulto azul com detalhes bordados",
    classeImagem: "product-card__image--dress"
  },
  {
    id: 2,
    nome: "Pilcha completa masculina - Adulto",
    descricao: "Camisa, bombacha, faixa e acessórios.",
    valor: "Valor a combinar",
    imagem: "assets/produtos/pilcha-completa-masculina-adulto.png",
    alt: "Pilcha completa masculina com camisa, colete, lenço e bombacha",
    classeImagem: "product-card__image--pilcha"
  },
  {
    id: 3,
    nome: "Bota de couro tam. 41",
    descricao: "Couro resistente, higienizada e pronta para uso.",
    valor: "Valor a combinar",
    imagem: "assets/produtos/bota-couro-aluguel.png",
    alt: "Bota de couro preta de cano alto apoiada sobre tijolos",
    classeImagem: "product-card__image--rental-boot"
  },
  {
    id: 4,
    nome: "Sapatilha tradicional",
    descricao: "Modelos confortáveis em diversas numerações.",
    valor: "Valor a combinar",
    imagem: "assets/produtos/sapatilha-tradicional-aluguel.png",
    alt: "Par de sapatilhas tradicionais pretas com tiras e fivelas",
    classeImagem: "product-card__image--rental-shoes"
  },
  {
    id: 5,
    nome: "Bombacha tradicional",
    descricao: "Modelo confortável disponível em diversos tamanhos.",
    valor: "Valor a combinar",
    imagem: "assets/produtos/bombacha-tradicional-aluguel.png",
    alt: "Bombacha tradicional cinza acompanhada de botas pretas",
    classeImagem: "product-card__image--rental-bombacha"
  }
]
