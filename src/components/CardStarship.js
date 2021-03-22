import React from 'react';
import {Col, Card, Container, ListGroup} from 'react-bootstrap';

const CardStarship = ({starships}) => {
	return starships.map((starship) => (
		<Col md={6} lg={4} key={starship.id}>
			<Card>
				<Card.Header as='h5'>{starship.name}</Card.Header>
				<Card.Img src={starship.image} alt={starship.name} />
				<Card.Body>
					<Card.Title>{starship.model}</Card.Title>
					<Card.Text>{starship.manufacturer}</Card.Text>
				</Card.Body>
				<Container>
					<ListGroup variant='flush'>
						<ListGroup.Item>length: {starship.length} meters</ListGroup.Item>
						<ListGroup.Item>crew: {starship.crew}</ListGroup.Item>
						<ListGroup.Item>passengers: {starship.passengers}</ListGroup.Item>
						<ListGroup.Item>cargo capacity: {starship.cargo_capacity} meters</ListGroup.Item>
						<ListGroup.Item>consumables: {starship.consumables} </ListGroup.Item>
						<ListGroup.Item>hyperdrive rating: {starship.hyperdrive_rating} </ListGroup.Item>
						<ListGroup.Item>max atmosphering speed: {starship.max_atmosphering_speed} </ListGroup.Item>
						<ListGroup.Item>MGLT: {starship.MGLT} </ListGroup.Item>
					</ListGroup>
				</Container>
				<Card.Footer>
					<small className='text-muted'>Credits : {starship.cost_in_credits}</small>
				</Card.Footer>
			</Card>
		</Col>
	));
};

export default CardStarship;
