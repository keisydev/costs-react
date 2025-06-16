# Costs - Gerenciador de Projetos com React

![Deploy](https://img.shields.io/github/deployments/keisydev/costs-react/production?label=deploy&style=for-the-badge)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge)

Costs é uma aplicação web completa e interativa, desenvolvida com React, para auxiliar no gerenciamento de custos de projetos. A plataforma permite ao usuário cadastrar projetos, definir orçamentos e adicionar serviços, acompanhando o custo total em tempo real através de uma interface moderna e fluida.

**[➡️ Acesse a demonstração ao vivo](https://keisydev.github.io/costs-react/)**

---

## ✨ Funcionalidades Principais

O projeto demonstra uma vasta gama de funcionalidades de front-end, incluindo:

* **CRUD Completo de Projetos:** Crie, visualize, edite e remova projetos.
* **Gerenciamento de Serviços:** Adicione e remova serviços a um projeto específico.
* **Filtros Dinâmicos:** Filtre a lista de projetos em tempo real por nome ou por categoria.
* **Dashboard Interativo:** Uma página dedicada com gráficos para visualização de dados, incluindo:
    * Gráfico de Pizza para Orçamento por Categoria.
    * Gráfico de Barras para comparar Orçamento vs. Custo por Projeto.
* **Modal de Confirmação:** Um modal de segurança para ações destrutivas (exclusão), melhorando a experiência e evitando erros do usuário.
* **Animações Fluidas:** Animações de entrada para os cards de projeto, criando uma interface mais agradável e profissional.
* **Controle de Orçamento:** Validações que impedem que os custos dos serviços ultrapassem o orçamento definido.

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi uma oportunidade para praticar e demonstrar proficiência nas seguintes tecnologias e conceitos do ecossistema React:

### Tecnologias

* **React**
* **React Router**
* **React Hooks** (useState, useEffect, useMemo)
* **Recharts:** Para a criação dos gráficos do dashboard.
* **Framer Motion:** Para animações declarativas e fluidas.
* **React Icons:** Para a utilização de ícones vetoriais.
* **UUID:** Para a geração de identificadores únicos.
* **CSS Modules:** Para estilização escopada e modular.

### Conceitos de Arquitetura

* **Componentização:** Divisão da aplicação em componentes reutilizáveis.
* **Gerenciamento de Estado Centralizado:** Utilização do padrão **"Lifting State Up"** (Elevação de Estado) para uma interação coesa entre componentes.
* **Renderização Condicional:** Exibição de diferentes componentes (como o Modal) com base no estado da aplicação.
* **Roteamento em SPA:** Uso do `HashRouter` para compatibilidade com deploy em hosts estáticos.
* **Melhoria de Experiência do Usuário (UX):** Foco em usabilidade através de filtros, modais e feedback visual claro.

---

## 🚀 Como Rodar o Projeto Localmente

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

Para a versão de demonstração hospedada no GitHub Pages, o backend foi substituído por uma arquitetura de front-end interativa. O estado da aplicação (a lista de projetos) é gerenciado no componente principal `App.js` e passado para os componentes filhos via props. As alterações são visíveis em tempo real, mas **serão perdidas ao recarregar a página**, pois não há um banco de dados para persistir os dados.

--- 

### Projeto realizado durante o curso de REACT no canal do youtube HORA DE CODAR.
