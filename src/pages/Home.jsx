import React, { useEffect, useState } from 'react';
import { getCategories } from '../api';
import SearchBar from '../components/SearchBar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [_categories, setCategories] = useState([]);
	const navigate = useNavigate();

	const Categories = () => {
		getCategories().then(res => {
			setCategories(res.data.categories);
		}).catch(err => {
			console.log(err);
			return err;
		});
	};

	const navigateToRecepies = (category) => navigate(`/${category}`);


	useEffect(() => {
		if (_categories.length === 0) {
			Categories();
		}
	}, [_categories]);

	return (
		<main className="container">
			<div>
				<h1>What would you like to eat today <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="food"><g strokeLinecap="round" strokeLinejoin="round"><path fill="none" stroke="#faa41a" d="M13.004 7.377a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M12.896 9.865a1.25 1.25 0 0 1-1.25-1.238 1.25 1.25 0 0 1 1.227-1.262M13.004 12.365a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262m4.977-2.488a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M17.896 9.865a1.25 1.25 0 0 1-1.25-1.238 1.25 1.25 0 0 1 1.227-1.262M18.004 12.365a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.227-1.262M8.391 7.377a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.226-1.262M8.284 9.865a1.25 1.25 0 0 1-1.25-1.238A1.25 1.25 0 0 1 8.26 7.365M8.391 12.365a1.25 1.25 0 0 0 1.25-1.238 1.25 1.25 0 0 0-1.226-1.262"></path><path fill="none" stroke="#383747" d="M8.878 27.123h8.998v-2.976c-1.917.846-3.034.978-4.588 1.01-1.943.04-3.26-.296-4.41-.584z"></path><path fill="#faa41a" stroke="#383747" d="M24.702 16.349c-1.68 6.274-8.101 9.997-14.375 8.316a11.72 11.72 0 0 1-8.3-8.3z"></path><path fill="none" stroke="#383747" d="M2.021 14.344h22.685v2.059H2.021z"></path><path fill="none" stroke="#383747" d="M16.674 14.338c7.8.308 5.839-5.25 11.604-5.752.57-.05.87-.061 1.67-.01l.03-.01c-.995-.592-2.829-1.594-4.36-1.169-.783.218-2.003 1.06-2.82 2.665-2.057 4.504-4.06 4.267-5.69 4.275z"></path><path fill="none" stroke="#fff" d="M21.474 18.116c-.708 2.16-2.603 3.66-4.803 4.068"></path></g></svg>
				</h1>
			</div>
			<div>
				<SearchBar />
			</div>
			<div className="categories">
				{
					_categories.length > 0 && _categories.map(category =>
						<motion.article className="category__card" key={category.idCategory} onClick={() => navigateToRecepies(category.strCategory)} whileHover={{ scale: 1.2 }}>
							<motion.img src={category.strCategoryThumb} alt={category.strCategory} />
							<div className="category__name">
								{category.strCategory}
							</div>
						</motion.article>
					)
				}
			</div>
		</main>
	);
}

export default Home;
