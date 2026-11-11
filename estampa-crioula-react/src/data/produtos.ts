export type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number
  fotos: { src: string; alt: string }[]
  ajustarFoto?: boolean
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Bombacha masculina com favo cinza",
    descricao: "Conforto e tradição para todos os momentos.",
    preco: 369.9,
    fotos: [
      {
        src: "assets/produtos/bombacha-campeira-frente.png",
        alt: "Bombacha masculina campeira vista de frente"
      },
      {
        src: "assets/produtos/bombacha-campeira-costas.png",
        alt: "Bombacha masculina campeira vista de costas"
      }
    ]
  },
  {
    id: 2,
    nome: "Vestido bordado com renda Bordô",
    descricao: "Acabamento delicado e modelagem elegante.",
    preco: 899.99,
    fotos: [
      {
        src: "assets/produtos/vestido-bordado-lateral.png",
        alt: "Vestido bordado tradicionalista em pose lateral"
      },
      {
        src: "assets/produtos/vestido-bordado-frente.png",
        alt: "Vestido bordado tradicionalista visto de frente"
      }
    ]
  },
  {
    id: 3,
    nome: "Chapéu campeiro gaúcho caramel aba 11cm",
    descricao: "Presença marcante com acabamento resistente.",
    preco: 459.9,
    fotos: [
      {
        src: "assets/produtos/chapeu-campeiro-detalhe.png",
        alt: "Detalhe do chapéu campeiro bege e sua faixa preta"
      },
      {
        src: "assets/produtos/chapeu-campeiro-completo.png",
        alt: "Chapéu campeiro bege completo com cordão"
      }
    ]
  },
  {
    id: 4,
    nome: "Sapatilha tradicional nº 37",
    descricao: "Leveza e firmeza para dançar a noite inteira.",
    preco: 259,
    fotos: [
      {
        src: "assets/produtos/sapatilha-tradicional-frente.png",
        alt: "Par de sapatilhas tradicionais pretas visto de frente"
      },
      {
        src: "assets/produtos/sapatilha-tradicional-costas.png",
        alt: "Par de sapatilhas tradicionais pretas visto por trás e pela lateral"
      }
    ],
    ajustarFoto: true
  },
  {
    id: 5,
    nome: "Alpargata campeira",
    descricao: "Leve, resistente e confortável para o uso diário.",
    preco: 189.9,
    fotos: [
      {
        src: "assets/produtos/alpargata-campeira-par.png",
        alt: "Par de alpargatas campeiras verdes"
      },
      {
        src: "assets/produtos/alpargata-campeira-lateral.png",
        alt: "Alpargata campeira verde vista pela lateral"
      }
    ],
    ajustarFoto: true
  },
  {
    id: 6,
    nome: "Vestido prenda - Adulto",
    descricao: "Traje completo preparado para a ocasião.",
    preco: 849.9,
    fotos: [
      {
        src: "assets/produtos/vestido-prenda-adulto-azul.png",
        alt: "Vestido prenda adulto azul com detalhes bordados"
      },
      {
        src: "assets/produtos/vestido-prenda-adulto-azul-detalhe.jpg",
        alt: "Detalhe de Vestido prenda - Adulto"
      }
    ]
  },
  {
    id: 7,
    nome: "Pilcha completa masculina - Adulto",
    descricao: "Camisa, bombacha, faixa e acessórios.",
    preco: 1199.9,
    fotos: [
      {
        src: "assets/produtos/pilcha-completa-masculina-adulto.png",
        alt: "Pilcha completa masculina com camisa, colete, lenço e bombacha"
      },
      {
        src: "assets/produtos/pilcha-completa-masculina-adulto-detalhe.jpg",
        alt: "Detalhe de Pilcha completa masculina - Adulto"
      }
    ]
  },
  {
    id: 8,
    nome: "Bota de couro tam. 41",
    descricao: "Couro resistente, higienizada e pronta para uso.",
    preco: 399.9,
    fotos: [
      {
        src: "assets/produtos/bota-couro-aluguel.png",
        alt: "Bota de couro preta de cano alto apoiada sobre tijolos"
      },
      {
        src: "assets/produtos/bota-couro-aluguel-detalhe.jpg",
        alt: "Detalhe de Bota de couro tam. 41"
      }
    ]
  },
  {
    id: 9,
    nome: "Sapatilha tradicional",
    descricao: "Modelos confortáveis em diversas numerações.",
    preco: 229.9,
    fotos: [
      {
        src: "assets/produtos/sapatilha-tradicional-aluguel.png",
        alt: "Par de sapatilhas tradicionais pretas com tiras e fivelas"
      },
      {
        src: "assets/produtos/sapatilha-tradicional-aluguel-detalhe.jpg",
        alt: "Detalhe de Sapatilha tradicional"
      }
    ]
  },
  {
    id: 10,
    nome: "Bombacha tradicional",
    descricao: "Modelo confortável disponível em diversos tamanhos.",
    preco: 289.9,
    fotos: [
      {
        src: "assets/produtos/bombacha-tradicional-aluguel.png",
        alt: "Bombacha tradicional cinza acompanhada de botas pretas"
      },
      {
        src: "assets/produtos/bombacha-tradicional-aluguel-detalhe.jpg",
        alt: "Detalhe de Bombacha tradicional"
      }
    ]
  }
]
