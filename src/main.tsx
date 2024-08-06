import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "../src/Pages/Login/index.tsx";
import Produtos from "../src/Pages/ProdutosCadastrados/index.tsx";
import CardError from "../src/components/CardError/index.tsx";
import Home from "../src/Pages/Home"; 
import Cadastro2 from "../src/Pages/Cadastro2"; 
import Endereco from "../src/Pages/EnderecoEntrega"; 
import Favoritos from "../src/Pages/MeusFavoritos";
import Cadastro from "../src/Pages/Cadastro"; 
import Pedidos from "../src/Pages/Pedidos"; 



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <CardError />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/cadastro2",
        element: <Cadastro2 />
      },
      {
        path: "/endereco",
        element: <Endereco />
      },
      {
        path: "/favoritos",
        element: <Favoritos />
      },
      {
        path: "/pedidos",
        element: <Pedidos />
      },
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
