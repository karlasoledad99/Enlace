# Enlace Empresarial

Aplicacion SSR construida con TanStack Start, React y Vite.

## Publicar en Render desde GitHub

El archivo `render.yaml` define el servicio web de Render. En el dashboard de Render:

1. Selecciona **New > Blueprint** y conecta el repositorio de GitHub.
2. Elige la rama que contiene `render.yaml` y confirma el servicio `enlace-empresarial`.
3. En las variables de entorno del servicio, agrega los valores reales de `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` desde **Supabase > Project Settings > Data API**.
4. Haz un deploy. Render ejecutara `npm install && npm run build` y luego `npm run start`.

El servicio esta configurado con `rootDir: .`, por lo que funciona si este proyecto es la raiz del repositorio o como una aplicacion dentro de un monorepo cuyo `render.yaml` vive junto a este `package.json`. Para varias aplicaciones, crea un servicio Render adicional con su propio `rootDir` y comandos.

La clave anon de Supabase puede estar en el cliente. Nunca agregues `SUPABASE_SERVICE_ROLE_KEY` al frontend ni al repositorio; las politicas RLS de Supabase deben proteger las tablas.

Para desarrollo local, copia `.env.example` como `.env.local` y completa sus valores.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
