import React from "react";
import { Container, Conteudo, EditarProduto, Texto, Titulo, Valor } from "./styles";

type Props = {
    img: string;
    nome: string;
    descricao: string;
    preco: string;
    icone: string;
}

export default function Item({img, nome, descricao, preco, icone}: Props) {
    return(
        <Container>
            <img src={img} alt="" />
            <Conteudo>
                <Titulo>{nome}</Titulo>
                <Texto>{descricao}</Texto>
                <Valor>{preco}</Valor>
            </Conteudo>
            <EditarProduto src={icone} alt="" />
        </Container>
    )
}