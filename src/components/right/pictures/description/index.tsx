// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item, setCurrentId }: any) => {
	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.codigo);
	}

	return (
		<div 
			className="pictures-description-wrapper"
			onMouseOver={(e: any) => onMouseOver(e, item)}
			onMouseOut={() => setCurrentId(null)}
		>
			<div className="pictures-description">
				<div className="referencia">
					<i className="icon tag"></i>
					<span>{item.codigo}</span>
				</div>
				<div className="description-title">
					{item.nome}
				</div>
			</div>
			<div className="values-wrapper">
				<div style={{textAlign: "center"}}>
					<div>Valor de Venda</div>
					<div className="current-value">R$ {siFormat(item.valorVenda)}</div>
				</div>
			</div>
		</div>
	)
}

Description.displayName="Description";