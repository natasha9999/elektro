import styled from "styled-components"


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`

export const ConteudoContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   width: 326px;
   height: 40px;
   gap: 4px;
   padding: 8px 16px;
   border-bottom: 1px solid #dedede ;
   box-shadow: 4px 4px rgba(0, 0, 0, 0.08);
`

export const Image = styled.img`
   width: 24px;
   height: 24px;
   
`

export const TextoConteudo = styled.p`
   color: #2b2b2b;
   font-size: 14px;
   line-height: 17px;
   font-weight: 500;
   
`