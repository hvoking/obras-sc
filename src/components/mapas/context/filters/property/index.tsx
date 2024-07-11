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

	const [ rooms, setRooms ] = useState<any>(null);
	const [ suites, setSuites ] = useState<any>(null);
	const [ garages, setGarages ] = useState<any>(null);

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

	const filterProperties = propertyDict.filter((item: any) => {
	    const { dormitorios, suites: itemSuites, vagas } = item;

	    return (
	        (rooms === null || rooms === dormitorios) &&
	        (suites === null || suites === itemSuites) &&
	        (garages === null || garages === vagas)
	    );
	});

	useEffect(() => {
		setPropertyName(propertyTypeDict[propertyTypeId]);
	}, [ propertyTypeId ]);

	useEffect(() => {
		setBusinessName(businessTypeDict[businessTypeId]);
	}, [ businessTypeId ]);
	
	return (
		<PropertyContext.Provider value={{
			currentId, setCurrentId, filterProperties,
			propertyTypeDict, businessTypeDict,
			propertyName, setPropertyName,
			businessName, setBusinessName,
			businessTypeId, setBusinessTypeId,
			propertyTypeId, setPropertyTypeId,
			nearest, setNearest,
			samplesIds, setSamplesIds,
			rejectedIds, setRejectedIds,
			rooms, setRooms,
			suites, setSuites,
			garages, setGarages
		}}>
			{children}
		</PropertyContext.Provider>
	)
}

PropertyContext.displayName = "PropertyContext";