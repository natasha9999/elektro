import React from "react";
import ImgPerfil from '../../assets/img/imgperfil.png';
import { Botao, Container1, Container2, Imagem, LinkBotao, Texto, Usuario } from "./styles";

export default function MenuVisitante() {
   
    return (
        <div>
            <Container1>
                <Imagem src={ImgPerfil} alt="" />
                <Usuario>Usuário</Usuario>
            </Container1>
            <Container2>
                <Texto>Editar dados</Texto>
                <Texto>Meus pedidos</Texto>
                <Texto>Meus produtos</Texto>
                <Texto>Meu carrinho</Texto>
            </Container2>
            
            <Botao><LinkBotao href="#">Sair</LinkBotao></Botao>
        </div>
    );
}