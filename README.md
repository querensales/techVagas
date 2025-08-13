# Tech Vagas 💼

## 📝 Descrição do Projeto

**Tech Vagas** é um portal de empregos focado no mercado de tecnologia, desenvolvido como um projeto de portfólio para demonstrar habilidades fundamentais em desenvolvimento front-end com React. A aplicação permite que usuários busquem, filtrem e visualizem vagas de tecnologia de forma simples e intuitiva.

Este projeto foi construído com foco em uma arquitetura de componentes limpa, gerenciamento de estado moderno e boas práticas de desenvolvimento, incluindo um fluxo de trabalho organizado com Git.

---

## ✨ Funcionalidades Principais

- **Busca Dinâmica:** Pesquise vagas por título, empresa ou tecnologia.
- **Filtragem Avançada:** Refine a busca com filtros por área, nível de experiência e modelo de trabalho.
- **Listagem de Vagas:** Interface clara e organizada para visualização das oportunidades em formato de cards.
- **Criação de Vagas:** Um modal interativo permite que recrutadores publiquem novas vagas facilmente.
- **Design Responsivo (em desenvolvimento):** Planejado para se adaptar a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca principal para a construção da interface de usuário.
- **Next.js:** Framework React para otimização, roteamento e renderização.
- **TypeScript:** Para um código mais seguro, previsível e escalável.
- **Tailwind CSS:** Framework de CSS para estilização rápida e moderna.
- **Git & GitHub:** Para versionamento de código e fluxo de trabalho em equipe.

---

## 🚀 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/querensales/techVagas.git](https://github.com/querensales/techVagas.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd techVagas
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 🏛️ Arquitetura do Projeto

O projeto segue uma arquitetura baseada em componentes, onde a página principal (`page.tsx`) atua como o "cérebro", gerenciando o estado global (filtros, busca, etc.). Os componentes filhos (`JobList`, `FilterSidebar`, etc.) são "apresentacionais", recebendo dados e funções via props. Essa abordagem, conhecida como **Lifting State Up**, mantém o código organizado, desacoplado e fácil de manter.

---

Desenvolvido com ❤️ por **Quéren Sales**.
