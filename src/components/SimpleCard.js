import {useState} from 'react';
import {Card, Container, Button} from 'react-bootstrap';

import {useDispatch} from 'react-redux';
import {deleteShip} from '../redux/starships/starshipActions';

import SimpleCardDetail from './SimpleCardDetail';

const SimpleCard = ({starship}) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleShow = () => setOpen(true);

	const dispatch = useDispatch();
	const deleteStarship = async () => {
		dispatch(deleteShip(starship.id));
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
			<SimpleCardDetail starship={starship} show={open} handleClose={handleClose} />
		</Card>
	);
};

export default SimpleCard;
