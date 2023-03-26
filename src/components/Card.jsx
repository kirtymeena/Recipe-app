import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';

function Card({ title, mealImg }) {
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5 }
		});
	}, [controls]);

	return (
		<div className="card">
			<div className="card__thumbnail">
				<motion.img className="meal-img" src={mealImg} alt="meal-img"
					animate={controls}
				/>
			</div>
			<div className="card__body">
				<div className="card__text">
					<p className="title">{title}</p>
				</div>
				<div>
					<FaRegHeart size={20} className="heart__icon" />
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	mealImg: PropTypes.string
};

export default Card;
