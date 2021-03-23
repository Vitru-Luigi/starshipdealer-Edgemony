import {Container, Row} from 'react-bootstrap';

const Main = ({children}) => (
	<main style={{position: 'relative'}}>
		<Container>
			<Row>{children}</Row>
		</Container>
	</main>
);

export default Main;
