// App imports
import { Dropdown } from './dropdown';
import { Rooms } from './rooms';
import './styles.scss';

// Context imports
import { useProperty } from '../../../mapas/context/filters/property';

export const Filters = () => {
	const { propertyName, businessName, setBusinessTypeId, setPropertyTypeId, propertyTypeDict, businessTypeDict } = useProperty();
	
	return (
		<div className="samples-header">
			<div className="anuncios-filters-wrapper">
				<div className="stats-title">Filtros</div>
				<div className="filters-wrapper-wrapper">
					<div className="filters-wrapper">
						<div className="anuncios-property-parameter">
							<div>Tipo:</div>
							<Dropdown
								imoveisDict={propertyTypeDict}
								propertyName={propertyName}
								setPropertyTypeId={setPropertyTypeId}
							/>
						</div>
						<div className="anuncios-property-parameter">
							<div>Negócio:</div>
							<Dropdown
								imoveisDict={businessTypeDict}
								propertyName={businessName}
								setPropertyTypeId={setBusinessTypeId}
							/>
						</div>
					</div>
					<Rooms/>
				</div>
			</div>
		</div>
	)
}

Filters.displayName="Filters";