import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';
import SearchGames from '../../../utils/SearchGames';
import { BASE_URL } from '../../../constants/api';

const Home = () => {
	const [games, setGames] = useState([]);
	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then(response => response.json())
			.then(json => {
				setGames(json.results);
				setFilteredGames(json.results);
			})
			.catch(error => console.log(error))
			
	}, []);

	const filterGames = e => {
		const searchValue = e.target.value.toLowerCase();

		const filteredArray = games.filter(game => {
			const lowerCaseName = game.name.toLowerCase();

			if (lowerCaseName.startsWith(searchValue)) {
				return true;
			}
			return false;
		});
		setFilteredGames(filteredArray);
	};

	return (
		<>
			<SearchGames handleSearch={filterGames} />

			<div className="game-list">
				{filteredGames.map(game => {
					const { name, background_image, rating, released, id } = game;

					return (
						<>
							<GameItem
								title={name}
								image={background_image}
								rating={rating}
								release={released}
								key={id}
								id={id}
							/>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Home;
