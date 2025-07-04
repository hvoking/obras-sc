// Context imports
export const Pictures = ({ item }: any) => {
	return (
		<img 
		 	src={item.imgUrl}
		 	className="listing-thumbnail"
		 	alt="property"
		 	loading="lazy"
		 />
	)
}

Pictures.displayName="Pictures";