# Central Atlas - Wiki de uso

Wiki estática de ajuda e documentação funcional do Atlas.

## Visualizar localmente

Abra `index.html` diretamente no navegador ou sirva a pasta com qualquer servidor HTTP estático.

Exemplo:

```powershell
npx serve wiki
```

## Estrutura

- `index.html`: estrutura e elementos globais.
- `styles.css`: identidade visual e responsividade.
- `content.js`: categorias e conteúdo das páginas.
- `app.js`: navegação, busca, tema e menu mobile.
- `assets/screenshots`: capturas demonstrativas das funcionalidades, sempre com dados fictícios.

## Publicação

Todo o conteúdo é estático. A pasta pode ser publicada em Cloudflare Pages, GitHub Pages, Netlify, servidor Nginx ou outro serviço de arquivos estáticos.

Configure o domínio desejado para apontar para o conteúdo desta pasta. Os links usam hash (`#/atendimentos`), portanto não exigem regras especiais de reescrita no servidor.

## Adicionar uma página

1. Inclua o identificador da página em um grupo de `content.js`.
2. Adicione o objeto correspondente dentro de `pages`.
3. Use `sections` com `cards`, `steps`, `bullets`, `list`, `note` ou `warning`.
4. Associe uma captura em `assets/screenshots` e escreva uma legenda objetiva em `content.js`.
5. Teste busca, navegação anterior/próxima, ampliação da imagem e visualização mobile.

O conteúdo da wiki deve explicar como usar o produto. Detalhes de tokens, banco, endpoints internos e credenciais pertencem à documentação técnica, não à Central de Ajuda pública.
