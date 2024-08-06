import * as EstiloHeader1 from './Header1.styles';
//import {Image} from './Header1.styles';
//import Icone1Header from "../../assets/img/hamburguer.png";
//import Icone1  from "../../assets/img/avisos.png";
import IconeHamburguer from "../../assets/img/image5.png";
import IconePerfil from "../../assets/img/perfil3.png";

interface HeaderProps {
    titulo: string;

    // imagem2: string ;
    // texto?: string;
    // textoBotao?: string; interrogaçao pra nao ser obrigato a passar os componentes 
    // temBotao?: boolean;
}

const Header1 = ({ titulo }: HeaderProps) => {
    return (
        <EstiloHeader1.Container>
            <img src={IconeHamburguer} alt="" />

            <EstiloHeader1.TituloHeader>{titulo}</EstiloHeader1.TituloHeader>
            <img src={IconePerfil} alt="" />

            {/* <EstiloCard1.TextoCard>{texto}</EstiloCard1.TextoCard> */}
            {/* {temBotao && <EstiloCard1.BotaoCard>{textoBotao}</EstiloCard1.BotaoCard>}   */}

        </EstiloHeader1.Container>
    );
};

export default Header1;

// ========================================= onClick exemplo ==============================

// function ocultaForm(){
//     console.log("Oi mundo!");
//   }
//   <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png" onclick="ocultaForm()">
