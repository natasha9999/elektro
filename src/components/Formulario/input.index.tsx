import * as EstiloInput from './input.styles';

interface InputProps  {
    name: string;
    value: string;
    placeholder: string ;
    text: string;
    handleOnChange: undefined;
    type: string;
}

const Input = ({type, text, name, placeholder, handleOnChange, value}: InputProps) => {
    return (
       <EstiloInput.Container>
        <EstiloInput.LabelFormulario htmlFor={name}>{text}</EstiloInput.LabelFormulario>
        <EstiloInput.InputFormulario type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
       </EstiloInput.Container>
    );
};

export default Input;

