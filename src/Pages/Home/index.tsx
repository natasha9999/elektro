import { Container, Titulo } from './styles';
import Logotipo from '../../assets/img/logotipo.png';



const Home = () => {

    return (
        <Container>
            <img src={Logotipo}/>
            <Titulo>Elektro</Titulo>
        </Container>

    );
};

export default Home;