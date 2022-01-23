import React from 'react';
import { Button, Container, Footer } from 'react-bulma-components';
import '../styles/index.scss';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Button color={'quaternary'}>Hello there!</Button>

			<Footer>
				<Container className="has-text-centered has-text-white">
					<p>Sierra Nevada Western Airways &copy; 2022</p>
				</Container>
			</Footer>
		</React.Fragment>
	);
};

export default App;
