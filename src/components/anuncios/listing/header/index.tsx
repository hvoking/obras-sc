// App imports
import { Filters } from './filters';
import './styles.scss';

export const Header = () => {
	return (
		<div className="samples-header">
			<Filters/>
		</div>
	)
}

Header.displayName="Header";