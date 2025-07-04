// App imports
import './styles.scss';

// Context imports
import { useTooltip } from 'context/maps/tooltip';

export const Tooltip = () => {
	const { propertyHoverInfo } = useTooltip(); 

	if (!propertyHoverInfo || !propertyHoverInfo.object) return <></>;

	const { x: left, y: top } = propertyHoverInfo;

	return (
		<div 
			className="tooltip-wrapper" 
			style={{ left, top }}
		>
			<img 
				width={170}
				src={propertyHoverInfo.object.imgUrl}
				alt="property"
			/>
		</div>
	)
}

Tooltip.displayName="Tooltip";