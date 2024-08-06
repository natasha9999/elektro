import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const LabelFormulario = styled.label`
   font-size: 16px;
   line-height: 19px;
   font-weight: 400;
   color: #2b2b2b;
   margin-bottom: 5px;
`

export const InputFormulario = styled.input`
   outline: none;
   border: none;
   border-bottom: 1.5px solid #b9b9b9;
   width: 326px;
   &::placeholder {
        color: #b9b9b9;
   }
`