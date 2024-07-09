// App imports
import { Property } from './property';
import './styles.scss';

export const Filters = () => {
	return (
		<div className="stats-wrapper">
			<div className="stats">
				<div className="stats-title">Filtros</div>
				<Property/>
			</div>
		</div>
	)
}

Filters.displayName="Filters";