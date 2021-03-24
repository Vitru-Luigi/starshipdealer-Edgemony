import {Container, Nav, Navbar, Button} from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar expand='lg' variant='dark' bg='dark'>
			<Container>
				<Navbar.Brand href='#'>Starships Manager</Navbar.Brand>
				<Nav className='ml-auto'>
					<Button>Login</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
