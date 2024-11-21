# ptec-meli-front

## Descripción

Este proyecto es una aplicación de carrito de compras desarrollada con React, TypeScript y Vite. Permite a los usuarios registrarse, iniciar sesión, navegar por productos, agregar productos al carrito y gestionar su carrito de compras.

## Características

- Registro e inicio de sesión de usuarios.
- Navegación por una lista de productos.
- Agregar, actualizar y eliminar productos del carrito de compras.
- Visualización del carrito de compras con el total de productos y precio.

## Requisitos

- Node.js 22
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio en tu máquina local:

    ```sh
    git clone https://github.com/tu-usuario/ptec-meli-front.git
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd ptec-meli-front
    ```

3. Instala las dependencias del proyecto:

    ```sh
    npm install
    ```

## Ejecución en Local

1. Inicia el servidor de desarrollo:

    ```sh
    npm run dev
    ```

2. Abre tu navegador y navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta el linter para verificar el código.
- `npm run preview`: Previsualiza la aplicación compilada.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes reutilizables.
  - `features/`: Funcionalidades principales de la aplicación (autenticación, carrito, productos).
  - `routes/`: Definición de rutas de la aplicación.
- `App.tsx`: Componente principal de la aplicación.
- `main.tsx`: Punto de entrada de la aplicación.

