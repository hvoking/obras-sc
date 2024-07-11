// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import { propertyDict } from './dict';

const PropertyContext: React.Context<any> = createContext(null)

export const useProperty = () => {
	return (
		useContext(PropertyContext)
	)
}

export const PropertyProvider = ({children}: any) => {
	const [ currentId, setCurrentId ] = useState<any>(null);

	const [ propertyName, setPropertyName ] = useState("apto");
	const [ businessName, setBusinessName ] = useState("venda");

	const [ businessTypeId, setBusinessTypeId ] = useState(1);
	const [ propertyTypeId, setPropertyTypeId ] = useState(1);
	const [ nearest, setNearest ] = useState(8);

	const [ samplesIds, setSamplesIds ] = useState<any>([]);
	const [ rejectedIds, setRejectedIds ] = useState<any>([]);

	const propertyTypeDict: any = {
		1: "apto",
		2: "casa",
	}

	const businessTypeDict: any = {
		1: "venda",
		2: "locação",
	}

	useEffect(() => {
		setPropertyName(propertyTypeDict[propertyTypeId]);
	}, [ propertyTypeId ]);

	useEffect(() => {
		setBusinessName(businessTypeDict[businessTypeId]);
	}, [ businessTypeId ]);
	
	return (
		<PropertyContext.Provider value={{
			currentId, setCurrentId, propertyDict,
			propertyTypeDict, businessTypeDict,
			propertyName, setPropertyName,
			businessName, setBusinessName,
			businessTypeId, setBusinessTypeId,
			propertyTypeId, setPropertyTypeId,
			nearest, setNearest,
			samplesIds, setSamplesIds,
			rejectedIds, setRejectedIds
		}}>
			{children}
		</PropertyContext.Provider>
	)
}

PropertyContext.displayName = "PropertyContext";