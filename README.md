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
- **Prisma:** `prisma/schema.prisma`
- **Functions:** `src/functions`
  - **Integration:** Funções para gerenciar integrações e API's.
  - **Fetcher:** Utilitário para fazer requisições HTTP utilizando Axios.

## Opcional (Prisma ORM)

1. **Execute as Migrações do Prisma:**

   Após configurar o Prisma, execute as migrações para atualizar o banco de dados:

   ```bash
   npx prisma migrate dev --name init
   ```

2. **Gere o Cliente do Prisma:**

   Gere o cliente do Prisma para ser utilizado nas APIs:

   ```bash
   npx prisma generate
   ```

## Utilizando o BFF (Backend for Frontend)

O BFF é configurado para gerenciar todas as chamadas para o backend. As APIs do BFF estão localizadas na pasta `src/pages/api` e lidam com as operações CRUD para usuários, centralizando as integrações e simplificando a comunicação com os serviços backend.

## ORM Prisma

O Prisma é utilizado como ORM (Object-Relational Mapping) para interagir com o banco de dados MongoDB. A configuração do Prisma, incluindo modelos e migrações, está localizada na pasta `prisma`, especificamente no arquivo `prisma/schema.prisma`. O Prisma permite uma interação fácil e tipada com o banco de dados, facilitando a gestão de dados e migrações.

## Recursos

- [Next.js Documentation](https://nextjs.org/docs) - Para detalhes sobre funcionalidades.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial.

---

<br>

```
Este README reflete as últimas atualizações do projeto, incluindo o uso do Prisma, APIs de usuário, e configuração do BFF para gerenciar integrações com o backend.
```
