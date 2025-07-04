// App imports
import { Wrapper } from '../wrapper';
import { Filters } from './filters';
import { Pictures } from './pictures';
import { Description } from './description';
import './styles.scss';

// Context imports
import { useProperty } from 'context/filters/property';

export const Anuncios = () => {
	const { setCurrentId, filterProperties } = useProperty();

	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.codigo);
	}
	return (
		<Wrapper>
			<div className="airbnb-listing">
				<Filters/>
				<div className="airbnb-images-wrapper">
					{filterProperties.map((item: any, index: any) => {
						return (
							<div 
								key={index} 
								className="airbnb-description-wrapper" 
								onMouseOver={(e: any) => onMouseOver(e, item)}
							>
								<div className="acrc-link-wrapper">
									<a 
										href={item.link}
										className="airbnb-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										ver + detalhes desse LANÇAMENTO
									</a>
								</div>
								<Pictures item={item}/>
								<Description item={item}/>
							</div>
						)}
					)}
				</div>
			</div>
		</Wrapper>
	)
}

Anuncios.displayName="Anuncios";