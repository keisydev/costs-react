# Costs - Gerenciador de Projetos com React

![Deploy](https://img.shields.io/github/deployments/keisydev/costs-react/production?label=deploy&style=for-the-badge)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge)

Costs é uma aplicação web, desenvolvida com React, para auxiliar no gerenciamento de custos de projetos. A plataforma permite ao usuário cadastrar projetos, definir orçamentos e adicionar serviços, acompanhando o custo total em tempo real de forma interativa.

**[➡️ Acesse a demonstração ao vivo](https://keisydev.github.io/costs-react/)**

---

## ✨ Funcionalidades Principais

* **CRUD Completo de Projetos:** Crie, visualize, edite e remova projetos.
* **Gerenciamento de Serviços:** Adicione e remova serviços a um projeto específico.
* **Cálculo de Custos em Tempo Real:** O custo total do projeto é atualizado automaticamente com base nos serviços adicionados.
* **Validação de Orçamento:** O sistema impede que os custos dos serviços ultrapassem o orçamento definido para o projeto.
* **Interface Reativa:** As alterações são refletidas na interface do usuário instantaneamente, sem a necessidade de recarregar a página.

---

##  STATUS DO PROJETO
✔️ **Projeto Concluído (Modo de Demonstração)**

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi uma oportunidade para praticar e demonstrar proficiência nas seguintes tecnologias e conceitos do ecossistema React:

* **React**
* **React Router**
* **React Hooks** (useState, useEffect)
* **UUID** para geração de IDs únicos
* **CSS Modules** para estilização escopada

### Conceitos de Arquitetura

* **Componentização:** A aplicação foi dividida em componentes reutilizáveis e de fácil manutenção.
* **Gerenciamento de Estado Centralizado:** Utilização do padrão **"Lifting State Up"** (Elevação de Estado), onde o estado principal da aplicação (a lista de projetos) é gerenciado no componente `App.js` e distribuído para os componentes filhos via *props*.
* **Renderização Condicional:** Exibição de diferentes componentes com base no estado da aplicação.
* **Roteamento em SPA:** Uso do `HashRouter` para garantir a compatibilidade do roteamento em um ambiente de hospedagem de sites estáticos como o GitHub Pages.

---

## 🚀 Como Rodar o Projeto Localmente

Para executar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/keisydev/costs-react.git](https://github.com/keisydev/costs-react.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd costs-react/costs
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação:**
    ```bash
    npm start
    ```

A aplicação estará disponível em `http://localhost:3000`.

---

### 💡 Nota sobre a Simulação do Backend

Para a versão de demonstração hospedada no GitHub Pages, o backend que era simulado com `json-server` foi substituído por uma arquitetura de front-end interativa. O estado da aplicação (a lista de projetos) é inicializado a partir de um arquivo de dados mockado e gerenciado inteiramente no lado do cliente pelo React.

Isso significa que todas as operações de criação, edição e remoção são totalmente funcionais na interface, mas as alterações **serão perdidas ao recarregar a página**, pois não há um banco de dados real para persistir os dados.

--- 

### Projeto realizado durante o curso de REACT no canal do youtube HORA DE CODAR.
