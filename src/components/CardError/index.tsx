import * as EstiloCard1 from './CardError.styles';
import {Image} from './CardError.styles';
import ImagemError from "../../assets/img/error404.png";


// interface CardProps  {
//     //titulo?: string;
//     // imagem?: string ;
//     // texto?: string;
//     // textoBotao?: string; interrogaçao pra nao ser obrigato a passar os componentes 
//     // temBotao?: boolean;
// }

const CardError = () => {
    return (
        <EstiloCard1.Container>

            <EstiloCard1.TituloCard>Opsss...</EstiloCard1.TituloCard>

            <EstiloCard1.ImagemContainer>
                <Image src={ImagemError}  />
                
            </EstiloCard1.ImagemContainer>

             <EstiloCard1.TextoCard>Infelizmente, parece que não encontramos o produto desejado.</EstiloCard1.TextoCard>
            {/* {temBotao && <EstiloCard1.BotaoCard>{textoBotao}</EstiloCard1.BotaoCard>}  */}

        </EstiloCard1.Container>
    );
};

export default CardError;




