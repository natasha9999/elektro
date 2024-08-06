import * as EstiloHeader from './Header2.styles';
import {Link} from "react-router-dom";

interface HeaderProps {
    titulo: string;
    imagem1?: string;
    imagem2?: string;
}

const Header = ({ titulo, imagem1, imagem2 }: HeaderProps) => {
    return (
        <EstiloHeader.Container>
            {/* <EstiloHeader.Icone1 src={imagem1} /> */}
            <Link to='../MenuVisitante'><EstiloHeader.Icone1 src={imagem1} /></Link>
            <EstiloHeader.TituloHeader>{titulo}</EstiloHeader.TituloHeader>
            <Link to='../Perfil'><EstiloHeader.Icone1 src={imagem2} /></Link>
            {/* <EstiloHeader.Icone2 src={imagem2} /> */}
        </EstiloHeader.Container>
    );
};

export default Header;




