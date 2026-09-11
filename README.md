#  Econverse - (Desafio Front-End)

Este repositório contém a implementação de um e-commerce para a **Econverse**, desenvolvido com foco em alta fidelidade visual (**Pixel Perfect** ao protótipo do Figma), responsividade completa para múltiplos dispositivos e arquitetura limpa de componentes utilizando **React, Vite e Sass**.

---

## Protótipo e Fidelidade Visual (Pixel Perfect)

O projeto foi construído respeitando milimetricamente os requisitos de design fornecidos:
* **Tipografia**: Utilização da fonte `Poppins` com pesos `300`, `400`, `500`, `600` e `700`.
* **Cores Principais**: Roxo (`#2A225B`), Amarelo de Destaque (`#F7CA11`), Azul de Ação (`#3049B2` / `#3F51B5`) e Cinzas de Suporte (`#F4F4F4`, `#DEDEDE`).
* **Layout & Grids**: Alinhamento estrito dos blocos de cabeçalho, banners de promoção, navegação de categorias, vitrines de produtos, marcas parceiras e rodapé institucional.

---

##  Tecnologias e Ferramentas Utilizadas

* **React (v18+)**: Construção da interface declarativa e baseada em componentes.
* **TypeScript**: Tipagem estática para garantia de previsibilidade do código e interfaces de dados.
* **Vite**: Bundler e servidor de desenvolvimento ultra-rápido.
* **Sass / SCSS (Modules)**: Estilização modularizada (`.module.scss`) com suporte a variáveis, aninhamento (nesting) e pré-processamento sem poluição global do DOM.
* **Fetch API**: Consumo assíncrono do arquivo `produtos.json` para renderização dinâmica da vitrine.

---

##  Funcionalidades Implementadas

1. **Cabeçalho (Header)**:
   * Barra superior com selos de garantia e frete.
   * Campo de busca, menu de categorias e navegação principal.
   
2. **Banner Principal & Categorias**:
   * Banner de promoções com chamada para ação (*CTA*).
   * Lista interativa de categorias com ícones dedicados.

3. **Vitrine de Produtos (Product Shelf)**:
   * Carregamento dinâmico de produtos via requisição HTTP (`produtos.json`).
   * Estados visuais de **Loading** e **Tratamento de Erros**.
   * Cards responsivos com preços formatados para a moeda brasileira (`R$`).

4. **Modal de Produto (Product Modal)**:
   * Modal interativo acionado ao clicar em um produto da vitrine.
   * Controle dinâmico de quantidade com limites mínimos.
   * Exibição detalhada de foto, nome, preço e descrição curta.
   * Fechamento via botão dedicado ou clique no backdrop.

5. **Rodapé Institucional (Footer)**:
   * Formulário de Newsletter com validação e aceite de termos.
   * Ícones de redes sociais estilizados em SVG.
   * Divisor vertical alinhado e grupos de links (Institucional, Ajuda e Termos).
   * Faixa de Direitos Autorais (Copyright).

6. **Responsividade & Acessibilidade**:
   * Layout totalmente adaptável para Mobile, Tablet e Desktop.
   * Prevenção de estouro de scroll lateral (`overflow-x: hidden`).
   * Rótulos acessíveis (`aria-label`) em elementos interativos.

---

##  Arquitetura de Pastas

```text
src/
├── assets/            # imagens, logos e ícones locais
├── components/        # componentes 
│   ├── Banner/
│   ├── Brands/
│   ├── Categories/
│   ├── Footer/
│   ├── Header/
│   ├── PartnersBanners/
│   ├── ProductModal/
│   └── ProductShelf/
├── styles/            # estilos globais e variáveis SCSS
│   ├── _variables.scss
│   └── global.scss
├── App.tsx            # componente raiz e gerenciamento de estados globais
└── main.tsx           # ponto de entrada da aplicação React
```


## Como Executar o Projeto Localmente
1-git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

2-cd seu-repositorio

3- npm install ou bun install

4- npm run dev ou bun run dev

5-Abra http://localhost:5173


## Desenvolvido por Janine Vitoria para o Desafio Técnico de Front-End Econverse.