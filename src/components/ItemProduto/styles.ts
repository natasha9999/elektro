// ItemProduto
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #b9b9b9;
    padding-bottom: 15px;
    margin-top:15px;
`;

export const Conteudo = styled.div`
     display: flex;
     flex-direction: column;
`;

export const Titulo = styled.h2`
     color: #2b2b2b;
     font-size: 20px;
     line-height: 24.38px;
     width: 180px;
     height: 24px;
     font-weight: 500;
     margin-bottom: 8px;
`;

export const Texto = styled.p`
     color: #B9B9B9;
     font-size: 14px;
     line-height: 17.07px;
     width: 155px;
     height: 17px;
     font-weight: 500;
     padding: 0px 10px 0px 0px; 
     margin-bottom:4px
`;

export const Valor = styled.p`
     color: #2B2B2B;
     font-size: 16px;
     line-height: 19.5px;
     width: 71px;
     height: 20px;
     font-weight: 500;
`;


export const EditarProduto = styled.img`
    display: flex;
    align-self: flex-start; 
    
`;
    