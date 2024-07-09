// App imports
import { AppRoutes } from './routes';
import { MainProvider } from './components/mapas/context';
import './styles.scss';

export const App = () => {
  return (
    <MainProvider>
      <div className="App">
        <AppRoutes/>
      </div>
    </MainProvider>
  );
}
