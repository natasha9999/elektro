import React from 'react';
import { Botao, Container, ContainerBotao, LinkBotao, TextoContainer, TituloFooter2 } from './footer2styles';


interface Footer2Props {
   texto1?: string;
   texto2?: string;
   texto3?: string;
   texto4?: string;
   texto5?: string;
   texto6?: string;

}

export const Footer2 = ({ texto1 = '', texto2 = '', texto3 = '', texto4 = '', texto5 = '', texto6 = '' }: Footer2Props) => {
   return (
      <Container>
         <TextoContainer>
            <TituloFooter2>{texto1}fdfd</TituloFooter2>
            <TituloFooter2>{texto2}fdfd</TituloFooter2>
         </TextoContainer>
         <TextoContainer>
            <TituloFooter2>{texto3}fdfd</TituloFooter2>
            <TituloFooter2>{texto4}fdfd</TituloFooter2>
         </TextoContainer>
         <TextoContainer>
            <TituloFooter2>{texto5}fdfd</TituloFooter2>
            <TituloFooter2>{texto6}fdfd</TituloFooter2>
         </TextoContainer>
         <ContainerBotao>
            <Botao><LinkBotao href="#">Finalizar Compra</LinkBotao></Botao>
         </ContainerBotao>
      </Container>
   )
}

