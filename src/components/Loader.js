import {Spinner, Container} from 'react-bootstrap';

const Loader = () => (
	<Container style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
		<Spinner animation='grow' />
	</Container>
);

export default Loader;
