import React from 'react';
import { Form } from 'react-bulma-components';
import IUseInput from './IUseInput';
import useIsPristine from './useIsPristine';

const InputField: React.FC<InputFieldProps> = ({ type, required, label, input }) => {
	const inputId = Math.random().toString();

	const [valid, onFocus] = useIsPristine(input);

	const onInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
		input.setValue(event.target.value);
		input.setValid(event.target.validity.valid);
		input.setErrorMessage(event.target.validationMessage);
	};

	return (
		<Form.Field>
			<Form.Label htmlFor={inputId}>{label}</Form.Label>
			<Form.Control>
				<Form.Input
					id={inputId}
					type={type}
					required={required}
					value={input.value}
					onInput={onInput}
					onFocus={onFocus}
					className={`${valid ? '' : 'is-danger'}`}
				/>
			</Form.Control>
			<p className={`help is-danger ${valid ? 'is-invisible' : ''}`}>{valid ? 'valid' : input.errorMessage}</p>
		</Form.Field>
	);
};

interface InputFieldProps {
	type: string;
	required?: boolean;
	label: string;
	input: IUseInput;
}

export default InputField;
