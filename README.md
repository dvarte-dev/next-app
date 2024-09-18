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

## Recursos

- [Next.js Documentation](https://nextjs.org/docs) - Para detalhes sobre funcionalidades.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial.

## Deploy

Deploy com a [Vercel](https://vercel.com/new).
