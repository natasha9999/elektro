import Botao1 from "../../components/Botao";
import Card1 from "../../components/Card1";
import * as EstiloPaginaCadastro from './cadastro.styles';

import Imagem2 from "../../assets/img/cadastro.png";


const PaginaCadastro = () => {

    return (
        <>
        <EstiloPaginaCadastro.Container>
            <Card1 
                texto="Faça parte do nosso time. Cadastre-se!"

                imagem={Imagem2}
            />
            <Botao1 
                temBotao
                textoBotao="Cadastre-se!"
            />
           
                <EstiloPaginaCadastro.LinkCadastrar>Já possui cadastro? Faça Login!</EstiloPaginaCadastro.LinkCadastrar>
           
        </EstiloPaginaCadastro.Container>
        </>
    );
};

export default PaginaCadastro;