// React imports
import { useState } from 'react';

// App imports
import { Rooms } from './rooms';
import { Dropdown } from './dropdown';
import './styles.scss';

// Context imports
import { useProperty } from '../../../context/filters/property';

export const Property = () => {
	const  {
		propertyName, setPropertyName,
		businessName, setBusinessName,
		businessTypeId, setBusinessTypeId,
		propertyTypeId, setPropertyTypeId
	} = useProperty();

	const propertyDict: any = {
		1: "apto",
		2: "casa",
	}

	const businessDict: any = {
		1: "venda",
		2: "locação",
	}

	return (
		<div className="property-parameters">
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div className="property-parameter">
					<div>Tipo:</div>
					<Dropdown
						imoveisDict={propertyDict}
						propertyName={propertyName}
						setPropertyTypeId={setPropertyTypeId}
					/>
				</div>
				<div className="property-parameter">
					<div>Negócio:</div>
					<Dropdown
						imoveisDict={businessDict}
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