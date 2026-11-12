export type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number | null
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
    nome: " Botas e guaiaca em couro marrom",
    descricao: "Resistência e estilo para o dia a dia, com acabamento em couro de alta qualidade.",
    preco: 699.9,
    fotos: [
      {
        src: "assets/produtos/bota-couro-marrom-mais-vendidos.png",
        alt: "Par de botas de couro marrom em ambiente rústico"
      }
    ]
  },
  {
    id: 7,
    nome: " Faca de prata trabalhada com bainha decorada",
    descricao: "Design elegante e funcional para uso diário.",
    preco: 499.9,
    fotos: [
      {
        src: "assets/produtos/faca-prateada-mais-vendidos.png",
        alt: "Faca prateada trabalhada com bainha decorada"
      }
    ]
  },
  {
    id: 8,
    nome: "Poncho gaúcho tradicional marrom",
    descricao: "Estilo e conforto para o dia a dia.",
    preco: 399.9,
    fotos: [
      {
        src: "assets/produtos/gaucho-gaiteiro-mais-vendidos.png",
        alt: "Gaúcho com poncho tradicional segurando uma gaita"
      }
    ]
  },
  {
    id: 9,
    nome: "Lenço escavino tradicional vermelho",
    descricao: "Lenço  tradicional, ideal para complementar o seu traje gaúcho.",
    preco: 159.9,
    fotos: [
      {
        src: "assets/produtos/lenco-gaucho-vermelho-mais-vendidos.png",
        alt: "Lenço gaúcho vermelho sobre mesa de madeira com chapéu"
      }
    ]
  },
  {
    id: 10,
    nome: "Camafeu com brincos e pingente ornamentado",
    descricao: "Conjunto de camafeu com brincos e pingente ornamentado, ideal para complementar o seu traje gaúcho.",
    preco: 199.9,
    fotos: [
      {
        src: "assets/produtos/conjunto-camafeu-mais-vendidos.png",
        alt: "Conjunto de camafeu com dois brincos e pingente ornamentado"
      }
    ]
  }
]
