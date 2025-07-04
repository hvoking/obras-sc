// Routes
import { Anuncios } from 'app/anuncios';
import { Mapas } from 'app/mapas';

// Third party imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Anuncios/>}/>
				<Route path='/mapas' element={<Mapas/>}/>
			</Routes>
		</Router>
	)
}

AppRoutes.displayName="AppRoutes"