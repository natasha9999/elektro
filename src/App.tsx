import './App';
import React from'react';
import {Outlet} from 'react-router-dom';
import { Container, Conteudo } from './App';
import Home from './Pages/Home';


function App() {
  return (
    <Container>   
      <Conteudo>
        <Home />
          <Outlet />
      </Conteudo>
    </Container>

  )
}

export default App
