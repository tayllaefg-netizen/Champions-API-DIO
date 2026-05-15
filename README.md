# Champions API

API REST desenvolvida em Node.js, Express e TypeScript para listar e gerenciar jogadores e clubes da Champions League.

O projeto usa uma base de dados em memoria para os jogadores e um arquivo JSON local para os clubes. Ele foi organizado em camadas para deixar a API mais facil de manter: rotas, controllers, services, repositories, models e utilitarios HTTP.

## Tecnologias

- Node.js
- TypeScript
- Express
- CORS
- TSX para ambiente de desenvolvimento
- TSUP para gerar a build de producao

## Como o projeto foi criado

O projeto foi criado como uma API simples em Express com TypeScript. A estrutura separa as responsabilidades da aplicacao:

- `src/server.ts`: inicia o servidor HTTP.
- `src/app.ts`: configura middlewares, CORS, rotas, health check e tratamento de erros.
- `src/routes.ts`: registra os endpoints da API.
- `src/controllers`: recebe requisicoes HTTP e envia respostas.
- `src/services`: concentra regras de negocio e validacoes.
- `src/repositories`: acessa os dados da aplicacao.
- `src/models`: define os tipos TypeScript usados no projeto.
- `src/utils`: helpers reutilizaveis, como respostas HTTP padronizadas.
- `src/data`: arquivos de dados locais.

## Funcionalidades

- Listar jogadores.
- Buscar jogador por ID.
- Filtrar jogadores por nome, clube, nacionalidade ou posicao.
- Criar jogador.
- Atualizar estatisticas de um jogador.
- Deletar jogador.
- Listar clubes.
- Buscar clube por ID.
- Verificar saude da API.
- Tratamento de erros com respostas padronizadas.

## Como executar

Instale as dependencias:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a porta da aplicacao:

```env
PORT=3333
```

Execute em modo desenvolvimento:

```bash
npm run start:dev
```

A API ficara disponivel em:

```text
http://localhost:3333
```

Endpoint principal:

```text
http://localhost:3333/api
```

## Scripts disponiveis

```bash
npm run start:dev
```

Executa a API em modo desenvolvimento.

```bash
npm run start:watch
```

Executa a API em modo watch, reiniciando quando houver alteracoes.

```bash
npm run build
```

Valida o TypeScript e gera a build em `dist`.

```bash
npm run dist
```

Executa o mesmo processo de build.

```bash
npm run start:dist
```

Gera a build e executa a versao compilada.

## Endpoints

### Health check

```http
GET /health
```

Retorna o status da API.

### Informacoes da API

```http
GET /api
```

Retorna o nome da API e os principais endpoints disponiveis.

### Jogadores

```http
GET /api/players
```

Lista todos os jogadores.

Tambem e possivel filtrar usando query params:

```http
GET /api/players?club=Liverpool
GET /api/players?name=Messi
GET /api/players?nationality=Brazil
GET /api/players?position=Forward
```

```http
GET /api/players/:id
```

Busca um jogador pelo ID.

```http
POST /api/players
```

Cria um novo jogador.

Exemplo de corpo:

```json
{
  "name": "Test Player",
  "club": "Real Madrid",
  "nationality": "Brazil",
  "position": "Forward",
  "statistics": {
    "Overall": 80,
    "Pace": 80,
    "Shooting": 80,
    "Passing": 80,
    "Dribbling": 80,
    "Defending": 40,
    "Physical": 75
  }
}
```

```http
PATCH /api/players/:id
```

Atualiza uma ou mais estatisticas de um jogador.

Exemplo de corpo:

```json
{
  "Pace": 90,
  "Shooting": 88
}
```

```http
DELETE /api/players/:id
```

Remove um jogador pelo ID.

### Clubes

```http
GET /api/clubs
```

Lista todos os clubes.

```http
GET /api/clubs/:id
```

Busca um clube pelo ID.

## Respostas de erro

A API retorna mensagens padronizadas para erros comuns:

- `400 Bad Request`: dados invalidos ou JSON malformado.
- `404 Not Found`: rota ou recurso nao encontrado.
- `409 Conflict`: tentativa de criar jogador com ID ja existente.
- `500 Internal Server Error`: erro interno inesperado.

## Estrutura do projeto

```text
projeto-champions/
├── src/
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   ├── routes.ts
│   └── server.ts
├── .env
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Observacoes

Os dados de jogadores ficam em memoria. Isso significa que alteracoes feitas por `POST`, `PATCH` ou `DELETE` existem apenas enquanto o servidor estiver rodando. Ao reiniciar a aplicacao, os dados voltam ao estado original definido no codigo.
