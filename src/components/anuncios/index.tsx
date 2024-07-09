// App imports
import { Wrapper } from './wrapper';
import { Listing } from './listing';
import './styles.scss';

export const Anuncios = () => {
	return (
		<Wrapper>
			<Listing/>
		</Wrapper>
	)
}

Anuncios.displayName="Anuncios";