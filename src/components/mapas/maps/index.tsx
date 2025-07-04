// React imports
import { useCallback } from 'react';

// App imports
import { Controllers } from './controllers';
import { Tooltip } from './tooltip';
import { Search } from './search';
import './styles.scss';

// Context imports
import { useMapbox } from 'context/mapbox';
import { useGeo } from 'context/filters/geo';
import { useIconLayer } from 'context/maps/layers/icon';

// Third-party imports
import { Map, useControl } from 'react-map-gl';
import { DeckProps } from '@deck.gl/core/typed';
import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import 'mapbox-gl/dist/mapbox-gl.css';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const MapContainer = () => {
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setMarker, setPlaceCoordinates } = useGeo();
	const { iconLayer } = useIconLayer();

	const layers: any = [ iconLayer ];

	const onDblClick = useCallback((event: any) => {
		const lng = event.lngLat.lng;
		const lat = event.lngLat.lat;
		setPlaceCoordinates({ longitude: lng, latitude: lat });
		setMarker({ longitude: lng, latitude: lat });
	}, []);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={currentBasemap}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				preserveDrawingBuffer={true}
			>
				<DeckGLOverlay layers={layers} glOptions={{preserveDrawingBuffer: true}}/>
				<Search/>
				<Tooltip/>
				<Controllers/>
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";