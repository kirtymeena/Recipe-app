import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getMealsByName } from '../api';
import { dropdownVariants, imageVariants } from '../utils/framerMotionUtils';

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const getRecepies = (query) => {
		getMealsByName(query)
			.then((res) => setSearchResult(res.data.meals))
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		let timeout;
		if (searchTerm.length >= 3) {
			timeout = setTimeout(() => getRecepies(searchTerm), 1000);
		}
		if (searchTerm.length === 0) {
			setSearchResult([]);
		}
		return () => clearTimeout(timeout);
	}, [searchTerm]);

   

   

	const navigateToRecepies = (dish) => navigate(`./recipies/${dish}`);
	return (
		<div className="search__layout">
			<div className="search__inner">
				<input type="text" placeholder="Search for dishes" value={searchTerm}
					className="search__input"
					onChange={handleChange}
				/>
				<div className="search__result-layout">
					{searchResult !== null && searchResult.slice(0, 6).map((result) => (
						<AnimatePresence key={result.idMeal}>
							<motion.section className="result__layout"
								variants={dropdownVariants}
								initial="hidden"
								animate="visible"
								exit="hidden"
								onClick={() => navigateToRecepies(result.strMeal)}
							>
								<div>
									<motion.img src={result.strMealThumb} alt="" 
										variants={imageVariants} 
										initial="hidden" 
										animate="visible" 
										transition={{ duration: 0.5 }}
									/>
								</div>
								<div>{result.strMeal}</div>
							</motion.section>
                            :
						</AnimatePresence>
					))}

					{searchTerm.length > 0 && searchResult !== null && searchResult.length > 6 && (
						<div className="more">
							<p onClick={() => navigateToRecepies(searchTerm)} className={`${searchResult.length <= 6 ? 'hide' : 'show'}`}>
                                more
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
