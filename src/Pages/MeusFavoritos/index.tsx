import React from "react";
import Figura1 from '../../assets/img/lixeira.png';
import Figura2 from '../../assets/img/mousepad.png';
import Figura3 from '../../assets/img/som.png';
import Figura4 from '../../assets/img/carregador.png';
import Figura5 from '../../assets/img/tablet.png';
import Header from '../../components/Header2';
import Item from "../../components/ItemProduto";
import { Container, ElementosContainer, ListaContainer, Subtitulo } from "./favoritos.styles";
import Input from '../../components/Formulario/input.index';


export default function Favoritos() {
    const itemListaCadastro = [
        {
            img: Figura2,
            nome: 'Mousepad',
            descricao: 'Mousepad HyperX',
            preco: 'R$ 60,00',
            icone: Figura1
        },
        {
            img: Figura3,
            nome: 'Carregador',
            descricao: 'Carregador ELGX',
            preco: 'R$ 250,00',
            icone: Figura1
        },
        {
            img: Figura4,
            nome: 'Caixa de som',
            descricao: 'Caixa bluetooth JBL',
            preco: 'R$ 300,00',
            icone: Figura1
        },
        {
            img: Figura5,
            nome: 'Tablet',
            descricao: 'Tablet Samsung',
            preco: 'R$ 300,00',
            icone: Figura1
        }

    ];

    return (

        <Container>
            <Header titulo={'Meus Favoritos'} imagem1={'../src/assets/img/image5.png'} imagem2={'../src/assets/img/perfil2.png'}
            />
            <div>
                <Subtitulo>Produtos Favoritos</Subtitulo>
            </div>

            <ElementosContainer>

                <Input
                    type="checkbox"
                    name="selecao"
                    placeholder=""
                    text=""
                    value=""
                    handleOnChange={undefined} />
                <ListaContainer>
                    {itemListaCadastro.map((elemento) => (
                        <Item img={elemento.img} nome={elemento.nome} descricao={elemento.descricao} preco={elemento.preco} icone={elemento.icone} />
                    ))}
                </ListaContainer>
            </ElementosContainer>
        </Container>

    );
}