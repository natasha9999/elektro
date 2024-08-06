import React from "react";
//import { BotaoGeral } from "./styles";

// type Props = { texto: string; }

//  export default function Botao({texto}: Props) {

//      return(
//          <BotaoGeral>{texto}</BotaoGeral>
//      )
//  }
import * as EstiloBotao1 from './botao1.styles';

type BotaoProps = {
    textoBotao?: string;
    temBotao?: boolean;
};

const Botao1 = ({ textoBotao = 'Entrar', temBotao = false }: BotaoProps) => {
    return (
        <EstiloBotao1.Container>
            {temBotao && <EstiloBotao1.BotaoCard>{textoBotao}</EstiloBotao1.BotaoCard>}
        </EstiloBotao1.Container>
    );
};

export default Botao1;


