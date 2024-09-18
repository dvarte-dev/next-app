# Projeto Next.js

Projeto [`Next.js`](https://nextjs.org/docs) usando React e TypeScript, pra você que é jacu lembrar.

## Como Iniciar

1. **Clone o Repositório Template (sem histórico de commits):**

   ```bash
   git clone --depth 1 https://github.com/dvarte-dev/next-app.git <novo-repositorio>
   cd <novo-repositorio>
   rm -rf .git
   ```

2. **Inicie um Novo Repositório:**

   ```bash
   git init
   git remote add origin https://github.com/dvarte-dev/<novo-repositorio>.git
   git add .
   git commit -m "create <novo-repositorio>"
   git push -u origin main
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura Básica

- **Componentes:** `src/components`
- **APIs:** `src/pages/api`
- **Páginas:** `src/pages`
- **Estilos:** `src/styles`
- **Tipos:** `src/types`
- **Functions:** `src/functions`
  - **Integration:** Funções para gerenciar integrações e API's.
  - **Fetcher:** Utilitário para fazer requisições HTTP utilizando Axios.

## Utilizando o BFF (Backend for Frontend)

O BFF é configurado para gerenciar todas as chamadas para o backend. As APIs do BFF estão localizadas na pasta `src/pages/api` e lidam com as operações CRUD para usuários, centralizando as integrações e simplificando a comunicação com os serviços backend.

## Recursos

- [Next.js Documentation](https://nextjs.org/docs) - Para detalhes sobre funcionalidades.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial.

---

<br>

```
Este README reflete as últimas atualizações do projeto, incluindo o uso de APIs de usuário como exemplo, e configuração do BFF para gerenciar integrações com o backend.
```
