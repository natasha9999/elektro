import Botao1 from '../../components/Botao';
import Header from '../../components/Header2';
import * as EstiloPaginaLogin from './login.styles';
import Input from '../../components/Formulario/input.index';
import { FaUser, FaLock } from "react-icons/fa";
import LogoFacebook from '../../assets/img/facebook.png';
import LogoGoogle from '../../assets/img/google.png';
import Logotipo from '../../assets/img/logotipo.png';
import Visibilidade from '../../assets/img/visibilidade.png';


const PaginaLogin = () => {

    return (

        <EstiloPaginaLogin.Container>
            <Header titulo={'Cadastrar'} imagem1={'../src/assets/img/seta.png'} />
            <img src={Logotipo} alt="" />

                <EstiloPaginaLogin.InputContainer>
                    <div>
                        <FaUser className='icon' />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Digite seu..."
                            text="E-mail"
                            value=""
                            handleOnChange={undefined} />
                    </div>
                    <div>
                        <FaLock className='icon' />
                        <Input
                            type="password"
                            name="senha"
                            placeholder=""
                            text="Senha"
                            value=""
                            handleOnChange={undefined} />
                        <img src={Visibilidade} alt="" />
                    </div>

                </EstiloPaginaLogin.InputContainer>

                <EstiloPaginaLogin.LinkEsqueciSenha>Esqueci minha senha</EstiloPaginaLogin.LinkEsqueciSenha>

                <Botao1
                    temBotao
                    textoBotao="Entrar"
                />

                <EstiloPaginaLogin.ImagemContainer>
                    <EstiloPaginaLogin.FacebookContainer>
                        <img src={LogoFacebook} alt="" />
                    </EstiloPaginaLogin.FacebookContainer>
                    <EstiloPaginaLogin.TextoLogo>ou</EstiloPaginaLogin.TextoLogo>
                    <EstiloPaginaLogin.GoogleContainer>
                        <img src={LogoGoogle} alt="" />
                    </EstiloPaginaLogin.GoogleContainer>
                </EstiloPaginaLogin.ImagemContainer>

                <EstiloPaginaLogin.LinkCadastrar>Não possui cadastro? Cdastre-se!</EstiloPaginaLogin.LinkCadastrar>

        </EstiloPaginaLogin.Container>


    );
};

export default PaginaLogin;