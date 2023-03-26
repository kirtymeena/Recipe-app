import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';

function Card({ title, mealImg }) {
	// const controls = useAnimation();
	const [imageLoading, setImageLoading] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const [pulsing, setPulsing] = useState(true);

	const imageLoaded = () => {
		setImageLoading(false);
		setTimeout(() => setPulsing(false), 600);
	};

	return (
		<div className="card">
			<div className="card__thumbnail">
				<motion.img className="meal-img" src={mealImg} alt="meal-img"
					initial={{ height: '12rem', opacity: 0 }}
					animate={{
						height: imageLoading ? '12rem' : '12rem',
						opacity: imageLoading ? 0 : 1
					}}
					transition={
						({ height: { delay: 0, duration: 0.4 } },
						{ opacity: { delay: 0.5, duration: 0.4 } })
					}
					onLoad={imageLoaded}
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
