import { useState } from 'react';
import InputField from './InputField';
import IUseInput from './IUseInput';

const PasswordInput: React.FC<PasswordInputProps> = ({ input }) => {
	const [inputType, setInputType] = useState<string>('password');

	return <InputField required={true} type={inputType} label={'Password:'} input={input} />;
};

interface PasswordInputProps {
	input: IUseInput;
}

export default PasswordInput;
