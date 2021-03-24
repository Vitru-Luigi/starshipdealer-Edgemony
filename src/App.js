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

axios.defaults.headers.post['Contant.type'] = 'application/json';

function App() {
	const [showFormModal, setShowFormModal] = useState(false);
	const [newStarShip, setNewStarShip] = useState({});

	const dispatch = useDispatch();

	const starshipDelete = useSelector((state) => state.starshipDelete);
	const {success: successDelete} = starshipDelete;

	const starshipAdd = useSelector((state) => state.starshipAdd);
	const {success: successAdd} = starshipAdd;

	const starshipList = useSelector((state) => state.starshipList);
	const {loading, error, starships} = starshipList;

	const addNewStarShip = async (e) => {
		e.preventDefault();
		if (checkForm()) {
			dispatch(addShip(newStarShip));
		} else {
			throw new Error('Form not valid');
		}
	};

	const onInputChange = (e) => {
		setNewStarShip((starship) => ({...starship, [e.target.name]: e.target.value}));
	};

	const handleClose = () => {
		setShowFormModal(false);
		setNewStarShip({});
	};

	const handleShow = () => {
		setShowFormModal(true);
	};

	const checkForm = () => newStarShip.name && newStarShip.manufacturer && newStarShip.image && newStarShip.crew >= 0 && newStarShip.passengers >= 0 && newStarShip.cargo_capacity >= 0;

	useEffect(() => {
		dispatch(fetchAllShips());
	}, [dispatch, successDelete, successAdd]);

	return (
		<>
			<Header />
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
			<StarShipForm show={showFormModal} handleClose={handleClose} onInputChange={onInputChange} addPost={addNewStarShip} />
			<Button onClick={handleShow} size='lg' style={{position: 'fixed', bottom: '200px', right: '200px'}}>
				+
			</Button>
		</>
	);
}

export default App;
