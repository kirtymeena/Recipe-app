import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMealsByCategories } from '../api';
import Card from '../components/Card';
import { motion } from 'framer-motion';

function CategoryList() {
	const location = useLocation();
	const [meals, setMeals] = useState([]);

	useMemo(() => {
		const pathname = location.pathname.split('/')[1];
		getMealsByCategories(pathname).then(res => {
			setMeals(res.data.meals);
		}).catch(err => {
			console.log(err);
		});
	}, [location.pathname]);



	const renderList = meals.map(meal => (
		<motion.div key={meal.idMeal} className="card__wrapper"
			whileHover={{ borderRadius: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}
		>
			<Card title={meal.strMeal} mealImg={meal.strMealThumb} />
		</motion.div>
	));



	return (
		<div className="list__layout container">
			<div className="list__wrapper">
				{renderList}
			</div>
		</div>
	);
}

export default CategoryList;
