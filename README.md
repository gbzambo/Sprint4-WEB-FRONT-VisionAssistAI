# Vision Assist AI — Sprint 4

Evolução do projeto da Sprint 3 para React, com uma interface responsiva desenvolvida com Tailwind CSS, navegação entre páginas, autenticação demonstrativa e consumo de uma API pública.

## Integrantes 
Gabriel Torres Zambo 1ESPF RM: 569883
Octávio Mello Covre de Souza 1ESPF RM: 571811
Hiago Silva de Oliveira 1ESPT RM: 572665
Juliano Galhardo de Oliveira 1ESPQ RM: 572493

## Tecnologias

* React
* Vite
* JavaScript
* React Router DOM
* Tailwind CSS
* Lucide React
* JSONPlaceholder — API pública para demonstração de consumo de dados

## Funcionalidades

* Interface organizada em componentes reutilizáveis.
* Navegação entre páginas com React Router.
* Rotas públicas e rota privada para o Dashboard.
* Autenticação demonstrativa com Context API e `localStorage`.
* Hooks personalizados `useAuth` e `useFetch`.
* Consulta de dados externos utilizando `fetch`.
* Estados de carregamento e erro durante a consulta à API.
* Formulário de contato demonstrativo.
* Estilização com Tailwind CSS.
* Classes responsivas para diferentes tamanhos de tela.

## Páginas

* **Home:** apresentação do Vision Assist AI.
* **Solução:** apresentação da proposta do projeto.
* **Público-alvo:** informações sobre o público do produto.
* **Experiência:** apresentação da experiência proposta.
* **Equipe:** apresentação dos integrantes.
* **Contato:** informações de contato e formulário demonstrativo.
* **Login:** autenticação demonstrativa.
* **Dashboard:** área privada com dados consultados da API pública.
* **Página não encontrada:** tratamento de rotas inexistentes.

## Como instalar e executar

### Pré-requisitos

* Node.js instalado.
* npm disponível no terminal.

### Instalação

Clone o repositório ou abra a pasta do projeto no terminal e execute:

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço local apresentado pelo Vite.

### Gerar versão de produção

```bash
npm run build
```

### Visualizar a versão de produção

Depois de gerar a build, execute:

```bash
npm run preview
```

## Autenticação demonstrativa

O projeto utiliza autenticação simulada no próprio frontend. Para acessar o Dashboard com as credenciais de demonstração:

* **E-mail:** `aluno@fiap.com`
* **Senha:** `fiap123`

A autenticação não utiliza um backend real. As credenciais são verificadas no código da aplicação, e o estado da sessão é armazenado no `localStorage`.

## API pública

O Dashboard consulta a API JSONPlaceholder:

`https://jsonplaceholder.typicode.com/posts?_limit=5`

A consulta é realizada por meio do hook personalizado `useFetch`, que gerencia os dados recebidos, o estado de carregamento e os erros da requisição.

Os posts são dados fictícios disponibilizados para testes e demonstração. Eles não representam registros reais do Vision Assist AI.

## Formulário de contato

O formulário valida os campos obrigatórios no navegador e exibe uma mensagem de confirmação demonstrativa. Ele não envia mensagens para um servidor ou endereço de e-mail.

## Responsividade

A interface utiliza classes responsivas do Tailwind CSS. A apresentação deve ser validada em resoluções de desktop, tablet e celular antes da entrega final.

## Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento, incluindo auxílio na organização da estrutura do projeto, implementação e revisão de código e resolução de erros. O código e as funcionalidades devem ser revisados e compreendidos pelos integrantes da equipe antes da entrega.

## Integrantes

Consulte o arquivo `INTEGRANTES.TXT` para os nomes completos e respectivos RMs dos integrantes do grupo.

## Repositório e demonstração

* **Repositório:** https://github.com/gbzambo/Sprint4-WEB-FRONT-VisionAssistAI
* **Demonstração online: https://sprint4-web-front-vision-assist-ai.vercel.app/

## Observações

A autenticação e o formulário de contato são demonstrativos. O consumo da API pública é realizado diretamente pelo frontend. O projeto não deve ser considerado um sistema de produção com autenticação ou armazenamento de dados em backend.
