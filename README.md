# EBAC Cypress Samples

Projeto de testes automatizados com **Cypress**, configurado com **Integração Contínua (CI)** via **GitHub Actions** e publicação de relatórios no **GitHub Pages**.

Fork do repositório base da [EBAC-QE](https://github.com/EBAC-QE/ebac-cypress-samples).

[![Cypress CI](https://github.com/jasonsilvaa/ebac-cypress-samples/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/jasonsilvaa/ebac-cypress-samples/actions/workflows/ci-cd.yml)

## Sobre o projeto

Este repositório contém uma suíte de testes E2E (end-to-end) utilizando o Cypress, com exemplos oficiais da ferramenta. Os testes são executados automaticamente a cada push ou pull request na branch `main`, garantindo feedback rápido sobre a qualidade do código.

**Relatório publicado:** [jasonsilvaa.github.io/ebac-cypress-samples](https://jasonsilvaa.github.io/ebac-cypress-samples/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18 (recomenda-se a versão LTS)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recomendado)

## Instalação

```bash
git clone https://github.com/jasonsilvaa/ebac-cypress-samples.git
cd ebac-cypress-samples
npm install
```

> O script `postinstall` baixa automaticamente o binário do Cypress.

## Executando os testes

### Modo interativo (Cypress Test Runner)

```bash
npm run cypress:open
```

### Modo headless (terminal)

```bash
npm test
```

### Com relatório HTML (Mochawesome)

```bash
npm run test:report
```

O relatório consolidado é gerado em `cypress/reports/index.html`.

## Scripts disponíveis

| Script | Descrição |
|--------|-----------|
| `npm test` | Executa todos os testes em modo headless |
| `npm run test:report` | Executa os testes e gera relatório HTML |
| `npm run cypress:open` | Abre o Cypress em modo interativo |
| `npm run cypress:install` | Reinstala o binário do Cypress |

## Estrutura do projeto

```
ebac-cypress-samples/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Pipeline de CI/CD
├── cypress/
│   ├── e2e/                   # Specs de teste
│   │   ├── 1-getting-started/
│   │   └── 2-advanced-examples/
│   ├── fixtures/              # Dados de teste (JSON)
│   ├── support/               # Comandos e configurações globais
│   └── reports/               # Relatórios gerados (ignorado no Git)
├── cypress.config.js          # Configuração do Cypress
├── package.json
└── README.md
```

## Pipeline de CI/CD

O workflow `.github/workflows/ci-cd.yml` possui dois jobs:

### 1. `cypress-tests`

Disparado em:
- Push na branch `main`
- Pull requests para `main`
- Execução manual (`workflow_dispatch`)

Etapas:
1. Checkout do código
2. Setup do Node.js 20
3. Cache do binário Cypress
4. Instalação de dependências (`npm ci`)
5. Execução dos testes com relatório (`npm run test:report`)
6. Upload do relatório como artifact

### 2. `deploy-report`

Executado apenas em **push na `main`** após os testes passarem:
1. Download do artifact com o relatório
2. Publicação no GitHub Pages (branch `gh-pages`)

## GitHub Pages

Para visualizar o relatório online, habilite o GitHub Pages no repositório:

**Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / `(root)`**

Após o próximo push na `main` com testes passando, o relatório estará disponível em:

```
https://jasonsilvaa.github.io/ebac-cypress-samples/
```

## Tecnologias

- [Cypress](https://www.cypress.io/) 15.x
- [Mochawesome](https://www.npmjs.com/package/mochawesome) — relatórios HTML
- [GitHub Actions](https://github.com/features/actions) — integração contínua
- [GitHub Pages](https://pages.github.com/) — hospedagem do relatório

## Referências

- [Repositório original EBAC-QE](https://github.com/EBAC-QE/ebac-cypress-samples)
- [Documentação Cypress](https://docs.cypress.io/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## Licença

ISC
