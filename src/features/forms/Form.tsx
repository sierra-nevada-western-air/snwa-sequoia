import React, { ReactNode } from 'react';
import { Box, Button } from 'react-bulma-components';
import IUseInput from './IUseInput';
import useCanSubmit from './useCanSubmit';

const Form: React.FC<FormProps> = ({ children, inputs, submit }) => {
	const submitDisabled = useCanSubmit(inputs);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		await submit();
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit}>
			<Box>
				{children}
				<Button type="submit" color={'primary'} disabled={submitDisabled}>
					Submit
				</Button>
			</Box>
		</form>
	);
};

interface FormProps {
	children: ReactNode;
	inputs: Array<IUseInput>;
	submit(): Promise<void>;
}

export default Form;
