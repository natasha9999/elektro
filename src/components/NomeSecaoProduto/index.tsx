import React from "react";
import { Container, Titulo } from "./styles";

type Props = { nome: string }

export default function NomeDaSecao({nome}: Props) {
    return(
        <Container>
            <Titulo>{nome}</Titulo>
        </Container>
    )
}