import Botao1 from '../../components/Botao';
import Header from '../../components/Header2';
import * as EstiloPaginaCadastro2 from './cadastro2.styles';
import LogoFacebook from '../../assets/img/facebook.png';
import LogoGoogle from '../../assets/img/google.png';
import Input from '../../components/Formulario/input.index';


const PaginaCadastro2 = () => {

    return (
        <>
            <EstiloPaginaCadastro2.Container>
                <Header titulo={'Cadastrar'} imagem1={'../src/assets/img/seta.png'} />

                <EstiloPaginaCadastro2.ImagemContainer>
                    <EstiloPaginaCadastro2.FacebookContainer>
                        <img src={LogoFacebook} alt="" />
                    </EstiloPaginaCadastro2.FacebookContainer>
                    <EstiloPaginaCadastro2.TextoLogo>ou</EstiloPaginaCadastro2.TextoLogo>
                    <EstiloPaginaCadastro2.GoogleContainer>
                        <img src={LogoGoogle} alt="" />
                    </EstiloPaginaCadastro2.GoogleContainer>
                </EstiloPaginaCadastro2.ImagemContainer>

                <EstiloPaginaCadastro2.InputContainer>
                    <Input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        text="Nome"
                        value=""
                        handleOnChange={undefined} />

                    <Input
                        type="text"
                        name="cpf"
                        placeholder="Digite seu CPF"
                        text="CPF"
                        value=""
                        handleOnChange={undefined} />

                    <Input
                        type="tel"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        text="Telefone"
                        value=""
                        handleOnChange={undefined} />

                    <Input
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        text="E-mail"
                        value=""
                        handleOnChange={undefined} />

                    <Input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        text="Senha"
                        value=""
                        handleOnChange={undefined} />

                    <Input
                        type="password"
                        name="confirmar"
                        placeholder="Confirme sua senha"
                        text="Confirme sua senha"
                        value=""
                        handleOnChange={undefined} />
                </EstiloPaginaCadastro2.InputContainer>

                <Botao1
                    temBotao
                    textoBotao="Cadastre-se!"
                />


            </EstiloPaginaCadastro2.Container>
        </>
    );
};

export default PaginaCadastro2;