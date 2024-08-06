 import React from 'react';
 import IconeHamburguer  from "../../assets/img/image5.png";
 import IconeCarrinho from "../../assets/img/carrinho1.png";
import { Container, Imagem1, Imagem2, Titulo } from './styles';

  export default function Header() {
       return (
          <Container>
             <img src={IconeHamburguer} alt="" />
             <h1>Produto</h1>
             <img src={IconeCarrinho} alt="" />
          </Container>
       )
   }




//  type Props = {
//    img1: string;
//    nome: string;
//    img2: string;
// }

// export default function Header({img1, nome, img2}: Props) {
//    return(
//        <Container>
//            <Imagem1 src={img1} alt="" />
//                <Titulo>{nome}</Titulo>
//            <Imagem2 src={img2} alt="" />
//        </Container>
//    )
// }





// export const Header = () => {
//     return (
//         <div>
//             texto ola
          
//             <img src={IconeHamburguer} alt="" />
          
//         </div>
//     );
// };