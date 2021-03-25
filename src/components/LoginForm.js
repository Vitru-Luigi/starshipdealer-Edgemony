import {Col, Form, Button, Modal} from 'react-bootstrap';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../redux/users/userActions';

const LoginForm = ({onInputChange, show, handleClose}) => {
	const [validate, setValidate] = useState(false);
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();

	const checkAndLogin = (e) => {
		e.preventDefault();
		setValidate(true);
		handleClose();
		console.log(name, lastname, email);
		dispatch(login(name, lastname, email));
		// try {
		// 	await addPost(e);
		// 	setValidate(false);
		// } catch (e) {
		// 	window.alert(e);
		// }
	};
	return (
		<Modal size='xl' centered show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add New Starship</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='Form'>
					<Form validated={validate} style={{width: '100%'}}>
						<Form.Row>
							<Col>
								<Form.Control required onChange={(e) => setName(e.target.value)} name='name' type='text' placeholder='Enter your name' />
								<Form.Control.Feedback type='invalid'>Please provide a valid name.</Form.Control.Feedback>
							</Col>
						</Form.Row>
						<br />
						<Form.Row>
							<Col>
								<Form.Control required onChange={(e) => setLastname(e.target.value)} type='text' name='lastname' placeholder='Enter your surname' />
								<Form.Control.Feedback type='invalid'>Please provide a valid surname.</Form.Control.Feedback>
							</Col>
						</Form.Row>
						<br />
						<Form.Row>
							<Col>
								<Form.Control required onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='Enter your email' />
								<Form.Control.Feedback type='invalid'>Please provide a valid email.</Form.Control.Feedback>
							</Col>
						</Form.Row>
						<br />
						<Col>
							<Button onClick={checkAndLogin} variant='primary' type='submit'>
								Submit
							</Button>
						</Col>
					</Form>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default LoginForm;
