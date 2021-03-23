import axios from 'axios';
import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './containers/Main';
import CardStarship from './components/CardStarship';
import StarShipForm from './components/StarShipForm';
import {Button, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {featchAllShips} from './store/actions';

axios.defaults.headers.post['Contant.type'] = 'application/json';

function App() {
	// const [starships, setStarships] = useState([]);
	const [showFormModal, setShowFormModal] = useState(false);

	const [newStarShip, setNewStarShip] = useState({});

	// const getAllStarships = async () => {
	// 	const {data: starships} = await axios.get('http://localhost:5000/starships');
	// };

	// useEffect(() => {
	// setStarships(starships);
	// getAllStarships();
	// }, []);

	const dispatch = useDispatch();
	const starships = useSelector((state) => state.starships);

	useEffect(() => {
		dispatch(featchAllShips());
	}, [dispatch]);

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

	const addNewStarShip = async (e) => {
		e.preventDefault();
		if (checkForm()) {
			await axios.post('http://localhost:5000/starships', newStarShip);
			// await getAllStarships();
			dispatch(featchAllShips());
		} else {
			throw new Error('Form not valid');
		}
	};

	return (
		<>
			<Main>
				{starships?.map((starship) => (
					<Col md={6} lg={4} key={starship.id} className='my-3'>
						<CardStarship starship={starship} />
					</Col>
				))}
			</Main>
			<StarShipForm show={showFormModal} handleClose={handleClose} onInputChange={onInputChange} addPost={addNewStarShip} />
			<Button onClick={handleShow} size='lg' style={{position: 'fixed', bottom: '200px', right: '200px'}}>
				+
			</Button>
		</>
	);
}

export default App;
