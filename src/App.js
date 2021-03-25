import axios from 'axios';
import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './containers/Main';
import SimpleCard from './components/SimpleCard';
import StarShipForm from './components/StarShipForm';
import {Button, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {addShip, fetchAllShips} from './redux/starships/starshipActions';
import Loader from './components/Loader';
import Message from './components/Message';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

axios.defaults.headers.post['Contant.type'] = 'application/json';

function App() {
	const [showFormModal, setShowFormModal] = useState(false);
	const [showUserFormModal, setShowUserFormModal] = useState(false);
	const [newStarShip, setNewStarShip] = useState({});

	const dispatch = useDispatch();

	const starshipsState = useSelector((state) => state.starships);
	const {loading, error, starships} = starshipsState;

	const addNewStarShip = async (e) => {
		e.preventDefault();
		if (checkForm()) {
			dispatch(addShip(newStarShip));
		} else {
			throw new Error('Form not valid');
		}
	};

	const onStarshipFormChange = (e) => {
		setNewStarShip((starship) => ({...starship, [e.target.name]: e.target.value}));
	};

	// const onUserFormChange = (e) => {
	// 	setNewStarShip((starship) => ({...starship, [e.target.name]: e.target.value}));
	// };

	const handleClose = () => {
		setShowFormModal(false);
		setNewStarShip({});
	};

	const handleShow = () => {
		setShowFormModal(true);
	};

	const handleShowUserForm = () => {
		setShowUserFormModal(true);
	};

	const handleCloseUserForm = () => {
		setShowUserFormModal(false);
	};

	const checkForm = () => newStarShip.name && newStarShip.manufacturer && newStarShip.image && newStarShip.crew >= 0 && newStarShip.passengers >= 0 && newStarShip.cargo_capacity >= 0;

	useEffect(() => {
		dispatch(fetchAllShips());
	}, [dispatch]);

	return (
		<>
			<Header show={handleShowUserForm} />
			{error && <Message variant='warning' msg={error} />}
			{loading ? (
				<Loader />
			) : (
				<Main>
					{starships?.map((starship) => (
						<Col md={6} lg={4} key={starship.id} className='my-3'>
							<SimpleCard starship={starship} />
						</Col>
					))}
				</Main>
			)}
			<StarShipForm show={showFormModal} handleClose={handleClose} onInputChange={onStarshipFormChange} addPost={addNewStarShip} />
			<LoginForm show={showUserFormModal} handleClose={handleCloseUserForm} />
			<Button onClick={handleShow} size='lg' style={{position: 'fixed', bottom: '200px', right: '200px'}}>
				+
			</Button>
		</>
	);
}

export default App;
