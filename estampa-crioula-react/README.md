# Estampa Crioula React

Aplicação de venda e aluguel de indumentária gaúcha, feita com React, TypeScript e CSS.

## Executar

Dentro desta pasta:

```bash
npm install
npm run dev
```

Para conferir os arquivos de produção e a análise do código:

```bash
npm run build
npm run lint
```

## Fonte dos dados

Os produtos de venda vêm de `https://my.api.mockaroo.com/estampa-crioula/products`, com a chave da conta informada no endereço da requisição em `src/hooks/use-produtos.ts`.

A API usa o dataset [EstampaCrioulaProducts](https://www.mockaroo.com/datasets/381901), criado a partir de `../docs/produtos-estampa-crioula.csv`. O handler é:

```ruby
from_dataset("EstampaCrioulaProducts", as_json: true)
```

O CSV tem cabeçalho, codificação UTF-8 e 20 registros: 10 de venda e 10 de aluguel. As colunas são `id`, `tipo`, `nome`, `descricao`, `preco`, `valor`, `imagem`, `alt`, `imagem2`, `alt2`, `ajustarFoto` e `classeImagem`.

O hook faz o `fetch` dentro de `useEffect`, seleciona `tipo === 'venda'`, converte o ID e o preço para números e transforma as imagens em uma lista de fotos. O texto `"true"` de `ajustarFoto` é convertido para booleano. O componente mostra os estados de carregamento, erro e lista vazia. A consulta é cancelada quando o componente é desmontado.

Os tipos estão em `src/data/produtos.ts`. Os aluguéis permanecem no vetor local `src/data/alugueis.ts`. As imagens continuam em `public/assets/produtos`; a API retorna os caminhos, não os arquivos.

## Favoritos

Clique no coração de um produto. O botão muda de aparência e permite remover o favorito. O estado guarda apenas os IDs e um `useEffect` sincroniza a lista com `localStorage`. Após recarregar a página, os favoritos são restaurados.

## Modo escuro

Use o botão de lua ou sol no cabeçalho. O estado `escuro` alterna o atributo `data-tema` no elemento `html`, e o CSS troca as variáveis de cores. A escolha é salva no navegador e restaurada ao abrir a página.

## Organização

- `App.tsx`: composição da página, estado das vitrines, fotos, favoritos e tema.
- `hooks/use-produtos.ts`: consulta da API e estados de produtos, carregamento e erro.
- `data/`: tipos e vetor local de aluguéis.
- `components/`: cabeçalho, cards, vitrines, banners e rodapé.
- `App.css`: estilos, estados da consulta, temas e media queries em 768px e 1024px.

Não foram adicionadas dependências para esta fase. As requisições usam o `fetch` nativo.
