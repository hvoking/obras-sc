// App imports
import { FiltersProvider } from './filters';
import { ApiProvider } from './api';
import { MapboxProvider } from './mapbox';
import { SizesProvider } from './sizes';
import { MapsProvider } from './maps';

export const ContextProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ApiProvider>
    <MapboxProvider>
    <SizesProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </SizesProvider>
    </MapboxProvider>
    </ApiProvider>
    </FiltersProvider>
  )
}

ContextProvider.displayName="ContextProvider";