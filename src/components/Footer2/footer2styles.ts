
import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 300px;
    bottom: 0;
    padding: 30px 32px;
    
    border-radius: 15px 15px 0px 0px;
    background-color: #2b2b2b;
    position: fixed;
`;

export const TextoContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom:10px;
    background-color: green;
`;

export const TituloFooter2 = styled.p`
   color: #2b2b2b;
    
`;

export const ContainerBotao = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Botao = styled.button`
     margin: 20px;
     background-color: #f5f5f5;
     width: 188px; 
     height: 40px;
     border-radius: 16px;
     padding: 10px;
     border: none;
    
`;

export const LinkBotao = styled.a`
     text-decoration: none;
     color: #2b2b2b;
     font-size: 14px;
     line-height: 17.07px;
     font-weight: 500;
`;