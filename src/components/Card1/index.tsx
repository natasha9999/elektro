import * as EstiloCard1 from './Card1.styles';
import {Image} from './Card1.styles';
//import Imagem2 from "../../assets/img/anotacao.png";


interface CardProps  {
    titulo?: string;
    imagem?: string ;
    texto?: string;
    // textoBotao?: string; interrogaçao pra nao ser obrigato a passar os componentes 
    // temBotao?: boolean;
}

const Card1 = ({ titulo, imagem , texto}: CardProps) => {
    return (
        <EstiloCard1.Container>

            <EstiloCard1.TituloCard>{titulo}</EstiloCard1.TituloCard>

            <EstiloCard1.ImagemContainer>
                <Image src={imagem}  />
                
            </EstiloCard1.ImagemContainer>

             <EstiloCard1.TextoCard>{texto}</EstiloCard1.TextoCard>
            {/* {temBotao && <EstiloCard1.BotaoCard>{textoBotao}</EstiloCard1.BotaoCard>}  */}

        </EstiloCard1.Container>
    );
};

export default Card1;




