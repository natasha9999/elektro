import Botao1 from '../../components/Botao';
import Header from '../../components/Header2';
import * as EstiloPaginaEnderecoEntrega from './endereco.styles';
import LogoFacebook from '../../assets/img/facebook.png';
import LogoGoogle from '../../assets/img/google.png';
import Input from '../../components/Formulario/input.index';


const PaginaEnderecoEntrega = () => {

    return (
        <>
            <EstiloPaginaEnderecoEntrega.Container>
                <Header titulo={'Endereço'} imagem1={'../../..'} imagem2={'../src/assets/img/seta.png'} />

                <EstiloPaginaEnderecoEntrega.ImagemContainer>
                    <EstiloPaginaEnderecoEntrega.FacebookContainer>
                        <img src={LogoFacebook} alt="" />
                    </EstiloPaginaEnderecoEntrega.FacebookContainer>
                    <EstiloPaginaEnderecoEntrega.TextoLogo>ou</EstiloPaginaEnderecoEntrega.TextoLogo>
                    <EstiloPaginaEnderecoEntrega.GoogleContainer>
                        <img src={LogoGoogle} alt="" />
                    </EstiloPaginaEnderecoEntrega.GoogleContainer>
                </EstiloPaginaEnderecoEntrega.ImagemContainer>

                <EstiloPaginaEnderecoEntrega.InputContainer>
                    <div>
                        <Input
                            type="text"
                            name="cep"
                            placeholder="Digite aqui..."
                            text="CEP"
                            value=""
                            handleOnChange={undefined}/>
                    </div>

                    <div>
                        <Input
                            type="text"
                            name="endereco"
                            placeholder="Digite aqui..."
                            text="Endereço"
                            value=""
                            handleOnChange={undefined} />

                        <Input
                            type="text"
                            name="bairro"
                            placeholder="Digite aqui..."
                            text="Bairro"
                            value=""
                            handleOnChange={undefined} />

                        <Input
                            type="number"
                            name="numero"
                            placeholder="Digite aqui..."
                            text="Número"
                            value=""
                            handleOnChange={undefined} />
                    </div>

                    <div>
                        <Input
                            type="text"
                            name="cidade"
                            placeholder="Digite aqui..."
                            text="Cidade"
                            value=""
                            handleOnChange={undefined} />

                        <Input
                            type="text"
                            name="estado"
                            placeholder="Digite aqui..."
                            text="Estado"
                            value=""
                            handleOnChange={undefined} />

                        <Input
                            type="text"
                            name="logradouro"
                            placeholder="Digite aqui..."
                            text="Logradouro"
                            value=""
                            handleOnChange={undefined} />
                    </div>
                </EstiloPaginaEnderecoEntrega.InputContainer>

                <Botao1
                    temBotao
                    textoBotao="Cadastre-se!"
                />


            </EstiloPaginaEnderecoEntrega.Container>
        </>
    );
};

export default PaginaEnderecoEntrega;