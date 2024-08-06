import * as EstiloListagemOpcoesUsuario from './opcoes.styles';
import IconeAnotacao from '../../assets/img/anotacao.png';
import IconeDado from '../../assets/img/dado.png';
import IconeCoracao from '../../assets/img/coracao1.png';
import IconeCarrinho from '../../assets/img/carrinho2.png';
import IconeCupom from '../../assets/img/cupom.png';
import IconeChat from '../../assets/img/comentario.png';




const ListagemOpcoesUsuario = () => {
    return (
        <EstiloListagemOpcoesUsuario.Container>

            <EstiloListagemOpcoesUsuario.ConteudoContainer>
                <img src={IconeAnotacao} />
                <EstiloListagemOpcoesUsuario.TextoConteudo>Meus dados</EstiloListagemOpcoesUsuario.TextoConteudo>
            </EstiloListagemOpcoesUsuario.ConteudoContainer>

            <EstiloListagemOpcoesUsuario.ConteudoContainer>
                <img src={IconeDado} />
                <EstiloListagemOpcoesUsuario.TextoConteudo>Meus produtos</EstiloListagemOpcoesUsuario.TextoConteudo>
            </EstiloListagemOpcoesUsuario.ConteudoContainer>

            <EstiloListagemOpcoesUsuario.ConteudoContainer>
                <img src={IconeCoracao} />
                <EstiloListagemOpcoesUsuario.TextoConteudo>Meus favoritos</EstiloListagemOpcoesUsuario.TextoConteudo>
            </EstiloListagemOpcoesUsuario.ConteudoContainer>

            <EstiloListagemOpcoesUsuario.ConteudoContainer>
                <img src={IconeCarrinho} />
                <EstiloListagemOpcoesUsuario.TextoConteudo>Meus carrinho</EstiloListagemOpcoesUsuario.TextoConteudo>
            </EstiloListagemOpcoesUsuario.ConteudoContainer>

            <EstiloListagemOpcoesUsuario.ConteudoContainer>
                <img src={IconeCupom} />
                <EstiloListagemOpcoesUsuario.TextoConteudo>Meus cupons</EstiloListagemOpcoesUsuario.TextoConteudo>
            </EstiloListagemOpcoesUsuario.ConteudoContainer>

            <EstiloListagemOpcoesUsuario.ConteudoContainer>
                <img src={IconeChat} />
                <EstiloListagemOpcoesUsuario.TextoConteudo>Meus chats</EstiloListagemOpcoesUsuario.TextoConteudo>
            </EstiloListagemOpcoesUsuario.ConteudoContainer>



        </EstiloListagemOpcoesUsuario.Container>
    );
};

export default ListagemOpcoesUsuario;





