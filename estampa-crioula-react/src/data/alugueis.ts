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
    valor: "valor a combinar",
    imagem: "assets/produtos/vestido-prenda-adulto-azul.png",
    alt: "Vestido prenda adulto azul com detalhes bordados",
    classeImagem: "product-card__image--dress"
  },
  {
    id: 2,
    nome: "Pilcha completa masculina - Adulto",
    descricao: "Camisa, bombacha, faixa e acessórios.",
    valor: "valor a combinar",
    imagem: "assets/produtos/pilcha-completa-masculina-adulto.png",
    alt: "Pilcha completa masculina com camisa, colete, lenço e bombacha",
    classeImagem: "product-card__image--pilcha"
  },
  {
    id: 3,
    nome: "Bota de couro tam. 41",
    descricao: "Couro resistente, higienizada e pronta para uso.",
    valor: "valor a combinar",
    imagem: "assets/produtos/bota-couro-aluguel.png",
    alt: "Bota de couro preta de cano alto apoiada sobre tijolos",
    classeImagem: "product-card__image--rental-boot"
  },
  {
    id: 4,
    nome: "Sapatilha tradicional",
    descricao: "Modelos confortáveis em diversas numerações.",
    valor: "valor a combinar",
    imagem: "assets/produtos/sapatilha-tradicional-aluguel.png",
    alt: "Par de sapatilhas tradicionais pretas com tiras e fivelas",
    classeImagem: "product-card__image--rental-shoes"
  },
  {
    id: 5,
    nome: "Bombacha tradicional",
    descricao: "Modelo confortável disponível em diversos tamanhos.",
    valor: "valor a combinar",
    imagem: "assets/produtos/bombacha-tradicional-aluguel.png",
    alt: "Bombacha tradicional cinza acompanhada de botas pretas",
    classeImagem: "product-card__image--rental-bombacha"
  },
  {
    id: 6,
    nome: "Pilcha infantil completa",
    descricao: "Camisa, bombacha, faixa e acessórios para crianças.",
    valor: "valor a combinar",
    imagem: "assets/produtos/pilcha-infantil-aluguel.png",
    alt: "Pilcha infantil completa com boina, camisa, lenço, cinto, bombacha e alpargatas",
    classeImagem: "product-card__image--rental-child"
  },
  {
    id: 7,
    nome: "Vestido de prenda Mirim",
    descricao: "Vestido de prenda infantil rosa com laço e detalhes em renda branca.",
    valor: "valor a combinar",
    imagem: "assets/produtos/vestido-prenda-infantil-rosa-aluguel.png",
    alt: "Vestido de prenda infantil rosa com laço e detalhes em renda branca",
    classeImagem: "product-card__image--rental-child-dress"
  },
  {
    id: 8,
    nome: "Chapéu gaúcho preto com faixa bordada",
    descricao: "Chapéu gaúcho preto com faixa bordada, ideal para complementar o seu traje gaúcho.",
    valor: "valor a combinar",
    imagem: "assets/produtos/chapeu-gaucho-preto-aluguel.png",
    alt: "Chapéu gaúcho preto com faixa bordada apoiado em cerca de madeira",
    classeImagem: "product-card__image--rental-hat"
  },
  {
    id: 9,
    nome: "Lenço carijó vermelho e azul",
    descricao: "Lenço carijó vermelho e azul com detalhes em branco.",
    valor: "valor a combinar",
    imagem: "assets/produtos/lencos-gauchos-azul-vermelho-aluguel.png",
    alt: "Lenços gaúchos azul e vermelho com prendedores sobre couro",
    classeImagem: "product-card__image--rental-scarves"
  },
  {
    id: 10,
    nome: "Camisa branca cavalo crioulo ",
    descricao: "Camisa tradicional branca com bolso bordado.",
    valor: "valor a combinar",
    imagem: "assets/produtos/camisa-branca-aluguel.png",
    alt: "Camisa tradicional branca com bolso bordado e guaiaca preta",
    classeImagem: ""
  }
]
