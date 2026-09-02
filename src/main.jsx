import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

import App from './pages/App'
import Carrinho from './pages/Carrinho'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carrinho",
    element: <Carrinho />,
  },
  {
    path: "/produtos",
    element: <Produtos />
  },
  {
    path: "/sobre-nos",
    element: <Sobre />
  }
])

//ErrorBoundary or errorElement prop on your route.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
