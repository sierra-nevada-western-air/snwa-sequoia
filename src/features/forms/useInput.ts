import { useState } from 'react';
import IUseInput from './IUseInput';

export default function useInput(initialValue = ''): IUseInput {
	const [value, setValue] = useState<string>(initialValue);
	const [valid, setValid] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');

	return {
		value,
		setValue,
		valid,
		setValid,
		errorMessage,
		setErrorMessage,
	};
}
