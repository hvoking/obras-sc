// Context imports
export const Description = ({ item }: any) => {
	return (
		<div 
			className="listing-content" 
			style={{backgroundColor: "rgba(255, 255, 255, 1)"}}
		>
			<div className="title-wrapper">
				<div className="listing-title">{item.nome}</div>
		    	<div className="listing-rating">★</div>
		    </div>
		    <div className="listing-info">{item.dormitorios} dormitorios | {item.suites} suites</div>
		    <div 
		    	className="listing-price" 
		    	style={{color: "rgba(247, 129, 57, 1)", fontSize: "1.4em"}}
		    >
		    	Venda {item.valorVenda} R$
		    </div>
		</div>
	)
}

Description.displayName="Description";