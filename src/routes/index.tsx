// Routes
import { Anuncios } from 'components/anuncios';
import { Mapas } from 'components/mapas';

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