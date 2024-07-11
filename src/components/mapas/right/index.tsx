// React imports
import { useState } from 'react';

// App imports
import { Filters } from './filters';
import { Sort } from './sort';
import { Anuncios } from './anuncios'
import './styles.scss';

export const Right = () => {
	return (
		<div className="right">
			<Filters/>
			<Sort/>
			<Anuncios/>
		</div>
	)
}

Right.displayName="Right";