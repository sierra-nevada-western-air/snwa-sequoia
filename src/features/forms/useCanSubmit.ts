import { useEffect, useState } from 'react';
import IUseInput from './IUseInput';

export default function useCanSubmit(inputs: Array<IUseInput>): boolean {
	const [submitDisabled, setSubmitDisabled] = useState(true);

	useEffect(() => {
		setSubmitDisabled(!inputs.every((input) => input.valid));
	}, [inputs]);

	return submitDisabled;
}
