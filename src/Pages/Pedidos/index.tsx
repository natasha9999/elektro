import React from "react";
import { Container, Conteudo1, Conteudo2, Subtitulo, Texto, Titulo, Valor } from "./pedidos.styles";
import Imagem1 from "../../assets/img/televisao.png";
import Imagem2 from "../../assets/img/notebook.png";
import Imagem3 from "../../assets/img/monitor2.png";
import { Botao, LinkBotao } from "../ProdutosCadastrados/styles";
import Header from "../../components/Header2";
import { Footer } from "../../components/Footer";

export default function Pedidos() {
    return (
        <div>
            <Header titulo={'Produtos'} imagem1={'../src/assets/img/image5.png'} imagem2={'../src/assets/img/perfil2.png'} />
            <Subtitulo>Pedidos Realizados</Subtitulo>
            <Container>
                <Conteudo1>
                    <img src={Imagem1} alt="" />
                    <Valor>R$2000,00</Valor>
                </Conteudo1>
                <Conteudo2>
                    <Titulo>TV LG</Titulo>
                    <Texto>Smart TV 55”</Texto>
                    <Botao><LinkBotao href="#">Acompanhar</LinkBotao></Botao>
                </Conteudo2>
            </Container>
            <Container>
                <Conteudo1>
                    <img src={Imagem2} alt="" />
                    <Valor>R$3300,00</Valor>
                </Conteudo1>
                <Conteudo2>
                    <Titulo>Notebook</Titulo>
                    <Texto>Notebook Acer 20” 512GB</Texto>
                    <Botao><LinkBotao href="#">Acompanhar</LinkBotao></Botao>
                </Conteudo2>
            </Container>
            <Container>
                <Conteudo1>
                    <img src={Imagem3} alt="" />
                    <Valor>R$1000,00</Valor>
                </Conteudo1>
                <Conteudo2>
                    <Titulo>Monitor</Titulo>
                    <Texto>Monitor AOC 23.8”</Texto>
                    <Botao><LinkBotao href="#">Acompanhar</LinkBotao></Botao>
                </Conteudo2>
            </Container>
            <Footer />
        </div>
    )
}