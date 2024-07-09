// App imports
import { Property } from './property';

export const Filters = () => {
	return (
			<div className="anuncios-filters-wrapper">
				<div className="stats-title">Filtros</div>
				<Property/>
			</div>
	)
}

Filters.displayName="Filters";