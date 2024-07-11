// App imports
import { Rooms } from './rooms';
import { Dropdown } from './dropdown';
import './styles.scss';

// Context imports
import { useProperty } from '../../../../../mapas/context/filters/property';

export const Property = () => {
	const {
		propertyName, businessName, setBusinessTypeId, setPropertyTypeId, propertyTypeDict, businessTypeDict
	} = useProperty();

	return (
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
	)
}

Property.displayName="Property";