import * as EstiloImagensPassosComprar from './passos.styles';


type ImagensPassosComprarProps = {
    imagem1?: string;
    imagem2?: string;
    imagem3?: string;
    imagem4?: string;
    imagem5?: string;
};

const ImagensPassosComprar = ({ imagem1, imagem2, imagem3, imagem4, imagem5 }: ImagensPassosComprarProps) => {
    return (
        <EstiloImagensPassosComprar.Container>

            <EstiloImagensPassosComprar.ImagemContainer>
                <EstiloImagensPassosComprar.Icone1 src={imagem1} />
                <EstiloImagensPassosComprar.Icone2 src={imagem2} />
                <EstiloImagensPassosComprar.Icone3 src={imagem3} />
                <EstiloImagensPassosComprar.Icone4 src={imagem4} />
                <EstiloImagensPassosComprar.Icone5 src={imagem5} />

                <EstiloImagensPassosComprar.TextoContainer>
                    <EstiloImagensPassosComprar.Texto>Usuário</EstiloImagensPassosComprar.Texto>
                    <EstiloImagensPassosComprar.Texto>Entrega</EstiloImagensPassosComprar.Texto>
                    <EstiloImagensPassosComprar.Texto>Pagamento</EstiloImagensPassosComprar.Texto>
                </EstiloImagensPassosComprar.TextoContainer>

        </EstiloImagensPassosComprar.Container>
    );
};

export default ImagensPassosComprar;
