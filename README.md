# 🦄 Unicorns CRUD App (con Fetch)

Este proyecto es una aplicación **CRUD** de **Unicornios** y **Productos**, desarrollada en **React**.  
Utiliza `fetch` para interactuar con una API mockeada (`crudcrud.com`) y maneja productos localmente usando `localStorage`.

¡Incluye diseño pastel inspirado en colores de unicornios! 🌈🦄

---

## 🚀 Tecnologías usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [PrimeReact](https://primereact.org/)
- `fetch` API nativa
- `localStorage` para productos

---

## 🛠 Funcionalidades

### Unicornios

- Listar unicornios (GET)
- Crear unicornios (POST)
- Editar unicornios (PUT)
- Eliminar unicornios (DELETE)
- Validaciones con Formik + Yup

### Productos

- Listar productos
- Crear productos
- Eliminar productos
- Persistencia local (localStorage)

---

## 📁 Estructura de Carpetas

```bash
src/
├── context/
│   └── UnicornContext.jsx    # Contexto global para unicornios (con Fetch)
│
├── products/
│   ├── index.jsx              # Rutas del módulo productos
│   ├── ProductsView.jsx       # Vista de productos
│   ├── ProductForm.jsx        # Formulario para crear productos
│   └── productsData.js        # Productos base iniciales
│
├── unicorns/
│   ├── index.jsx              # Rutas del módulo unicornios
│   ├── UnicornsView.jsx       # Vista para ver, editar y eliminar unicornios
│   └── UnicornForm.jsx        # Formulario para crear o editar unicornios
│
├── App.jsx                    # Ruteo global (BrowserRouter + Routes)
├── App.css                    # Estilos personalizados con tema unicornio
├── index.css                  # Estilos globales (reset y body)
├── main.jsx                   # Entrada principal de la app React
└── assets/                    # (Opcional) Archivos estáticos como imágenes
