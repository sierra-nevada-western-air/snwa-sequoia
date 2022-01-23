import { Container, Section } from 'react-bulma-components';
import Form from '../features/forms/Form';
import PasswordInput from '../features/forms/PasswordInput';
import TextInput from '../features/forms/TextInput';
import useInput from '../features/forms/useInput';
import { CreateUserRequest } from './CreateUserRequest';

const CreateUser: React.FC<CreateUserProps> = ({ submit }) => {
	const name = useInput();
	const password = useInput();

	const submitUser = async (): Promise<void> => {
		const request = new CreateUserRequest(name.value, password.value);

		await submit(request, 'user-index');
	};

	return (
		<Section>
			<Container>
				<Form inputs={[name, password]} submit={submitUser}>
					<TextInput input={name} label="Name:" />
					<PasswordInput input={password} />
				</Form>
			</Container>
		</Section>
	);
};

interface CreateUserProps {
	submit(request: CreateUserRequest, routeTo: string): Promise<void>;
}

export default CreateUser;
