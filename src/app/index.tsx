// App imports
import { AppRoutes } from 'routes';
import { ContextProvider } from 'context';
import './styles.scss';

export const App = () => {
	return (
		<ContextProvider>
		  <div className="App">
		    <AppRoutes/>
		  </div>
		</ContextProvider>
	)
}

App.displayName="App";