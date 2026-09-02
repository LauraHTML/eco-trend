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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
