import React from "react";
import Figura1 from '../../assets/img/anotacao.png';
import Figura2 from '../../assets/img/relogio.png';
import Figura3 from '../../assets/img/mouse.png';
import Figura4 from '../../assets/img/galaxy.png';
import Figura5 from '../../assets/img/monitor.png';
import Figura6 from '../../assets/img/smarttv.png';
import Figura7 from '../../assets/img/notebook.png';
import Figura8 from '../../assets/img/jbl.png';
import Header from '../../components/Header2';
import Item from "../../components/ItemProduto";
import NomeDaSecao from "../../components/NomeSecaoProduto";
import { Botao, Container, ContainerBotao, LinkBotao } from "./styles";

export default function Produtos() {
    const itemListaCadastro = [
        {
            img: Figura2,
            nome: 'Smartwatch',
            descricao: 'Descrição do Produto',
            preco: 'R$50,00',
            icone: Figura1
        },
        {
            img: Figura5,
            nome: 'Monitor LG',
            descricao: 'Descrição do Produto',
            preco: 'R$450,00',
            icone: Figura1
        },
        {
            img: Figura3,
            nome: 'Mouse Gamer',
            descricao: 'Descrição do Produto',
            preco: 'R$90,00',
            icone: Figura1
        },
        {
            img: Figura4,
            nome: 'Galaxy M53',
            descricao: 'Descrição do Produto',
            preco: 'R$1900,00',
            icone: Figura1
        }

    ];

    const itemListaVendas = [
        {
            img: Figura6,
            nome: 'Samsung Smart TV',
            descricao: 'Descrição do Produto',
            preco: 'R$90,00',
            icone: Figura1
        },
        {
            img: Figura7,
            nome: 'Notebook',
            descricao: 'Descrição do Produto',
            preco: 'R$1900,00',
            icone: Figura1
        },
        {
            img: Figura8,
            nome: 'Fone Bluetooth JBL',
            descricao: 'Descrição do Produto',
            preco: 'R$1900,00',
            icone: Figura1
        }
    ];

    return (
        // <Item img={itemLista[0].img} nome={itemLista[0].nome} descricao={itemLista[0].descricao} preco={itemLista[0].preco} icone={itemLista[0].icone}/>

        <Container>
            <Header titulo={'Produtos'} imagem1={'../src/assets/img/image5.png'} imagem2={'../src/assets/img/perfil2.png'}
            />
            <NomeDaSecao nome='Produtos Cadastrados' />
            <ContainerBotao>
                <Botao><LinkBotao href="#">Cadastrar novo produto</LinkBotao></Botao>
            </ContainerBotao>
            {itemListaCadastro.map((elemento) => (
                <Item img={elemento.img} nome={elemento.nome} descricao={elemento.descricao} preco={elemento.preco} icone={elemento.icone} />
            ))}
            <NomeDaSecao nome='Produtos Vendidos' />
            {itemListaVendas.map((elemento) => (
                <Item img={elemento.img} nome={elemento.nome} descricao={elemento.descricao} preco={elemento.preco} icone={elemento.icone} />
            ))}
        </Container>
    );
}