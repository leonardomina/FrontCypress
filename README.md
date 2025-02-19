# FrontCypress
# 🚀 Automação de Testes - Loja Virtual VR (Cypress)

Este projeto contém **testes automatizados** para validar o fluxo de adição de produtos ao carrinho na loja virtual da **VR Benefícios**. Utilizamos **Cypress** para desenvolver os testes end-to-end.

A seguir, você encontrará um **passo a passo** detalhado para configurar o ambiente, instalar dependências e executar os testes.

---

## 📌 1. Configuração do Ambiente

### 1.1. Pré-requisitos

Antes de executar os testes, certifique-se de que seu ambiente possui os seguintes requisitos:

- **Windows, macOS ou Linux** (o tutorial é compatível com esses sistemas);
- **Git** instalado e configurado;
- **Node.js (LTS)** para execução do Cypress.

---

## ⚙️ 2. Como Configurar o Projeto

Após clonar este repositório, siga os passos abaixo para instalar as dependências necessárias.

### 2.1. Instalar dependências do projeto

Na raiz do projeto, execute os seguintes comandos:

```bash
npm install    # Instala as dependências do Cypress
```

Isso garantirá que todas as bibliotecas necessárias sejam baixadas e configuradas corretamente.

---

## 🚀 3. Executar os Testes

Após instalar as dependências, escolha a abordagem que deseja utilizar para rodar os testes.

### 🔹 **Modo Interativo**

Para abrir o Cypress e executar os testes manualmente, rode:

```bash
npx cypress open
```

- Selecione **E2E Testing** e um navegador de sua escolha.
- Escolha o teste desejado e execute.

### 🔹 **Modo Headless**

Para rodar todos os testes automaticamente no terminal, execute:

```bash
npx cypress run
```

---

## 🧪 4. Cenários de Testes Implementados

### ✅ **Teste de Adição de Produto ao Carrinho**

- **Objetivo**: Validar que um produto pode ser adicionado ao carrinho com sucesso.
- **Fluxo do teste**:
  1. Acessar a home do portal web (`www.vr.com.br`);
  2. Clicar no botão **"Compre online"** para navegar até a loja;
  3. Selecionar a opção **"Cartões VR"**;
  4. Adicionar uma quantidade aleatória de cartões do produto **"Auto"**;
  5. Digitar um valor de crédito aleatório para o produto **"Auto"**;
  6. Clicar no botão **"Adicionar ao carrinho"**;
  7. Validar que o produto foi adicionado ao carrinho com sucesso.

---

## 📌 Conclusão

Agora que o projeto está configurado, você pode executar os testes automaticamente para validar a experiência do usuário na loja virtual da **VR Benefícios**.

Caso tenha dúvidas ou queira contribuir com melhorias, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

**🔎 Bons testes e boa automação! 🛒✅**
