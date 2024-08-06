import React from 'react';
import IconeCasa  from "../../assets/img/home.png";
import IconeChat from "../../assets/img/chat.png";
import IconeAvisos  from "../../assets/img/avisos.png";
import IconePerfil from "../../assets/img/perfil1.png";
import { Container } from './styles';

 export const Footer = () => {
     return (
        <Container>
           <img src={IconeCasa} alt="" />
           <img src={IconeChat} alt="" />
           <img src={IconeAvisos} alt="" />
           <img src={IconePerfil} alt="" />
        </Container>
     )
 }

