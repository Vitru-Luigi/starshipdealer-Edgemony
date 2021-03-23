import axios from 'axios';
import {useState} from 'react';
import {Card, Container, Button} from 'react-bootstrap';

import {useDispatch} from 'react-redux';
import {featchAllShips} from '../store/actions';

import Carddetails from './Carddetails';

const CardStarship = ({starship, fetchAll}) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleShow = () => setOpen(true);

	const deleteStarship = async () => {
		try {
			const res = await axios.delete(`http://localhost:5000/starships/${starship.id}`);
			if (res.status !== 200) {
				throw new Error('Delete Failed');
			}
			dispatch(featchAllShips());
			// fetchAll();
		} catch (e) {
			alert(e);
		}
	};

	return (
		<Card>
			<Card.Header as='h5'>{starship.name}</Card.Header>
			<Card.Img src={starship.image} alt={starship.name} />
			<Card.Body>
				<Card.Title>{starship.model}</Card.Title>
				<Card.Text>{starship.manufacturer}</Card.Text>
			</Card.Body>

			<Container className='d-flex justify-content-around my-3'>
				<Button variant='primary' onClick={handleShow}>
					Details
				</Button>
				<Button variant='secondary' onClick={deleteStarship}>
					Delete
				</Button>
			</Container>
			<Card.Footer>
				<small className='text-muted'>Credits : {starship.cost_in_credits}</small>
			</Card.Footer>
			<Carddetails starship={starship} show={open} handleClose={handleClose} />
		</Card>
	);
};

export default CardStarship;
