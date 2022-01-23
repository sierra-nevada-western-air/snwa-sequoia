import React, { useEffect, useState } from 'react';
import IUseInput from './IUseInput';

export default function useIsPristine(input: IUseInput): [boolean, (event: React.FocusEvent<HTMLInputElement>) => void] {
	const [pristine, setPristine] = useState<boolean>(true);
	const [valid, setValid] = useState<boolean>(true);

	const onFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
		setPristine(false);
		input.setValid(event.target.validity.valid);
		input.setErrorMessage(event.target.validationMessage);
	};

	useEffect(() => {
		if (pristine) {
			setValid(true);
		} else {
			setValid(input.valid);
		}
	}, [input.valid, pristine]);

	return [valid, onFocus];
}
