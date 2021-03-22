import React from 'react';
import {Col, Card, Container, ListGroup} from 'react-bootstrap';

const CardStarship = ({starships}) => {
	return starships.map((startship) => (
		<Col md={6} lg={12}>
			<Card>
				<Card.Header as='h5'>{startship.name}</Card.Header>
				<Card.Img src={startship.image} />
				<Card.Body>
					<Card.Title>{startship.model}</Card.Title>
					<Card.Text>{startship.manufacturer}</Card.Text>
				</Card.Body>
				<Container>
					<ListGroup variant='flush'>
						<ListGroup.Item>length: {startship.length} meters</ListGroup.Item>
						<ListGroup.Item>crew: {startship.crew}</ListGroup.Item>
						<ListGroup.Item>passengers: {startship.passengers}</ListGroup.Item>
						<ListGroup.Item>cargo capacity: {startship.cargo_capacity} meters</ListGroup.Item>
						<ListGroup.Item>consumables: {startship.consumables} </ListGroup.Item>
						<ListGroup.Item>hyperdrive rating: {startship.hyperdrive_rating} </ListGroup.Item>
						<ListGroup.Item>max atmosphering speed: {startship.max_atmosphering_speed} </ListGroup.Item>
						<ListGroup.Item>MGLT: {startship.MGLT} </ListGroup.Item>
					</ListGroup>
				</Container>
				<Card.Footer>
					<small className='text-muted'>Credits : {startship.cost_in_credits}</small>
				</Card.Footer>
			</Card>
		</Col>
	));
};

export default CardStarship;
