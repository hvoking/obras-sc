// App imports
import { Filters } from './filters';
import { Anuncios } from './anuncios'
import './styles.scss';

export const Right = () => {
	return (
		<div className="right">
			<Filters/>
			<div className="property-list-wrapper">
				<div className="property-list-title">Listagem de imóveis</div>
			</div>
			<Anuncios/>
		</div>
	)
}

Right.displayName="Right";