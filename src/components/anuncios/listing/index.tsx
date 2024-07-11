// App imports
import { Header } from './header';
import { Pictures } from './pictures';
import { Description } from './description';
import './styles.scss';

// Context imports
import { useProperty } from '../../mapas/context/filters/property';

export const Listing = () => {
	const { setCurrentId, propertyDict } = useProperty();

	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.codigo);
	}

	return (
		<div className="airbnb-listing">
			<Header/>
			<div className="airbnb-images-wrapper">
				{propertyDict.map((item: any, index: any) => {
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
		)
	}

Listing.displayName="Listing";