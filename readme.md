# Champions API

API desenvolvida no bootcamp da DIO para praticar backend com Node.js, Express e TypeScript. O projeto gerencia jogadores e clubes de futebol, permitindo listar, buscar, criar, atualizar e remover jogadores, além de consultar clubes cadastrados.

## Funcionalidades

- Listar jogadores.
- Buscar jogador por ID.
- Filtrar jogadores por nome, clube, nacionalidade ou posição.
- Cadastrar um novo jogador.
- Atualizar estatísticas de um jogador.
- Remover jogador.
- Listar clubes.
- Buscar clube por ID.
- Verificar o status da API.

## Tecnologias

- Node.js
- TypeScript
- Express
- CORS
- TSX
- TSUP

## Como executar

Instale as dependências:

```bash
npm install
```

Crie ou mantenha um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

Execute em desenvolvimento:

```bash
npm run start:dev
```

A API ficará disponível em:

```txt
http://localhost:3333
```

## Rotas principais

```http
GET /health
GET /api
```

```http
GET /api/players
GET /api/players/:id
POST /api/players
PATCH /api/players/:id
DELETE /api/players/:id
```

```http
GET /api/clubs
GET /api/clubs/:id
```

Filtros disponíveis para jogadores:

```http
GET /api/players?club=Liverpool
GET /api/players?name=Messi
GET /api/players?nationality=Brazil
GET /api/players?position=Forward
```

## Exemplo de cadastro

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

## Scripts

```json
{
  "build": "tsc --noEmit && tsup src/server.ts",
  "dist": "npm run build",
  "start:dev": "tsx --env-file=.env src/server.ts",
  "start:watch": "tsx watch --env-file=.env src/server.ts",
  "start:dist": "npm run dist && node dist/server.js"
}
```

## Estrutura

```txt
src/
  controllers/
  data/
  models/
  repositories/
  services/
  utils/
  app.ts
  routes.ts
  server.ts
```

<a href="https://github.com/tayllaefg-netizen" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-Taylla-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Taylla">
</a>
