import {useEffect} from 'react';
import {Container, Nav, Navbar, Button, Badge} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/users/userActions';

const Header = ({show}) => {
	const userState = useSelector((state) => state.user);
	const {name, isLogged} = userState;
	const dispatch = useDispatch();
	console.log(userState);
	dispatch(logout);

	useEffect(() => {}, [isLogged]);
	return (
		<Navbar expand='lg' variant='dark' bg='dark'>
			<Container>
				<Navbar.Brand href='#'>Starships Manager</Navbar.Brand>
				<Nav className='ml-auto'>
					{!isLogged ? (
						<Button onClick={show}>Login</Button>
					) : (
						<Container>
							<Badge variant='secondary'>Ciao, {name}</Badge>
							<Button onClick={dispatch(logout)}>Logout</Button>
						</Container>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
