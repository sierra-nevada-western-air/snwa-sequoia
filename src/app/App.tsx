import React from 'react';
import { Button, Container, Footer } from 'react-bulma-components';
import '../styles/index.scss';
import CreateUser from './CreateUser';
import { CreateUserRequest } from './CreateUserRequest';

const App: React.FC = () => {
	const fakeClient = (request: CreateUserRequest, router: string): Promise<void> => {
		return new Promise((resolve) => {
			resolve(console.log(request, 'Routing to: ', router));
		});
	};

	return (
		<React.Fragment>
			<Button color={'quaternary'}>Hello there!</Button>
			<CreateUser submit={fakeClient} />
			<Footer>
				<Container className="has-text-centered has-text-white">
					<p>Sierra Nevada Western Airways &copy; 2022</p>
				</Container>
			</Footer>
		</React.Fragment>
	);
};

export default App;
