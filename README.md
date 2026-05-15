# 🛒 Mini E-Commerce Application

## 🚀 Project Overview

This project is an e-commerce application.

The application demonstrates:

- Product Listing
- Sorting Functionality
- Cart Management
- Local Storage Persistence
- Routing
- Responsive UI
- Context API State Management
- API Integration using Axios

The goal of this assignment is to showcase clean architecture, reusable components, and modern React development practices.

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite

## UI Library

- Material UI (MUI)
- Emotion Styling

## State Management

- React Context API

## Routing

- React Router DOM

## API Handling

- Axios

## Code Quality

- ESLint

---

# 📂 Project Structure

```bash
src/
│
├── components/      # Reusable UI components
├── context/         # Context API (Cart Context etc.)
├── pages/           # Application pages
├── actions         # API services
├── types/           # TypeScript types/interfaces
├── routes/          # Application routing
└── main.tsx         # App entry point
```

---

# ✨ Features

## ✅ Product Listing

Displays products fetched from API.

## ✅ Product Sorting

Supports sorting products based on:

- Price
- Name
- Order (Ascending / Descending)

## ✅ Cart Functionality

Users can:

- Add items to cart
- Store cart data in localStorage
- Persist cart after page refresh

## ✅ Responsive Design

Optimized for desktop and mobile devices.

## ✅ TypeScript Support

Strong typing for:

- Components
- Props
- Context
- API Responses

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

## 2️⃣ Navigate to Project

```bash
cd e-commerce-assignment
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Run Development Server

```bash
npm run dev
```

Application will run on:

```bash
http://localhost:5173
```

---

# 🧪 Available Scripts

## ▶️ Run Development Server

```bash
npm run dev
```

## 🏗 Build Production Version

```bash
npm run build
```

## 👀 Preview Production Build

```bash
npm run preview
```

## 🧹 Run ESLint

```bash
npm run lint
```

---

# 📌 Assignment Highlights

- Clean and scalable folder structure
- Reusable React components
- Context API for global state management
- Persistent cart using localStorage
- API integration using Axios
- Fully responsive UI using Material UI
- Type-safe development with TypeScript

---

# 👨‍💻 Author

Name: Rajnikant Raghav

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
