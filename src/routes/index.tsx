// Routes
import { Anuncios } from '../components/anuncios';
import { Mapas } from '../components/mapas';
// import { Detalhes } from '../components/detalhes';

// Third party imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Anuncios/>}/>
				<Route path='/mapas' element={<Mapas/>}/>
				{/*<Route path='/detalhes' element={<Detalhes/>}/>*/}
			</Routes>
		</Router>
	)
}

AppRoutes.displayName="AppRoutes"