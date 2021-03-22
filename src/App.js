import axios from 'axios';
import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './containers/Main';
import CardStarship from './components/CardStarship';

axios.defaults.headers.post['Contant.type'] = 'application/json';

function App() {
	const [starships, setStarships] = useState([]);

	useEffect(() => {
		const getAllStarships = async () => {
			const {data: starships} = await axios.get('http://localhost:3000/starships');
			setStarships(starships);
		};
		getAllStarships();
	}, []);

	return (
		<Main>
			<CardStarship starships={starships} />
		</Main>
	);
}

export default App;
