import axios from 'axios';

export const getMealsByName = (query) => new Promise((resolve, reject) => {
	const response = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
	if (response) {
		resolve(response);
		return;
	} reject(response);
});

export const getMealsByCategories = (query) => new Promise((resolve, reject) => {
	const response = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`);
	if (response) {
		resolve(response);
		return;
	} reject(response);
});
export const getCategories = () => new Promise((resolve, reject) => {
	const response = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
	if (response) {
		console.log(response);
		resolve(response);
		return;
	} reject(response);
});


