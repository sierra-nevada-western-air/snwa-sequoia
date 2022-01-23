import InputField from './InputField';
import IUseInput from './IUseInput';

const TextInput: React.FC<TextInputProps> = ({ input, label }) => {
	return <InputField type={'text'} label={label} input={input} required={true} />;
};

interface TextInputProps {
	input: IUseInput;
	label: string;
}

export default TextInput;
