// React imports
import { useState } from 'react';

// App imports
import { Rooms } from './rooms';
import { Dropdown } from './dropdown';
import './styles.scss';

export const Property = () => {
	const [ propertyName, setPropertyName ] = useState("apto");
	const [ businessName, setBusinessName ] = useState("venda");

	const [ businessTypeId, setBusinessTypeId ] = useState(1);
	const [ propertyTypeId, setPropertyTypeId ] = useState(1);

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