// Menu lateral do Visitante

// Produtos Cadastrados e Vendidos

import styled from "styled-components";

export const Container1 = styled.div`
    width:220px;
    height: 84px;
    display: flex;
    align-items:center;
    gap: 30px;
    background-color: #2b2b2b;
    padding-bottom: 30px 10px;
   
`;

export const Imagem = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 20px;
`;

//  VIDEO REACT - COMPONENTE DE BARRA DE PESQUISA - 1:48 MINUTOS

export const Usuario = styled.h1`
    color: #ffffff;
    font-size: 20px;
    line-height: 24.38;
    font-weight: 500;
`;

export const Container2 = styled.div`
    width: 180px;
    height: 200px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 15px;
    margin: 20px;
`;

export const Texto = styled.h2`
    color: #2b2b2b;
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 500;
    border-bottom: 1.5px solid #b9b9b9;
    padding-bottom: 15px;
    width: 180px;
`;

export const Botao = styled.button`
    display: flex;
    padding: 10px;
    width: 51px;
    height: 20px;
    gap: 10px;
`;

export const LinkBotao = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 500;
`;