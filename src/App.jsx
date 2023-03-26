import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Recepies from './pages/Recepies';
import CategoryList from './pages/CategoryList';

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/recipies/:dish" element={<Recepies />} />
				<Route path="/:category" element={<CategoryList />} />
			</Routes>
		</Router>
	);
}

export default App;
