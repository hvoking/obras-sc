// App imports
import { Arrow } from './arrow';
import './styles.scss';

// Third-party imports
import { useNavigate } from 'react-router-dom';

export const Wrapper = ({children}: any) => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	const navigate = useNavigate();
	
	return (
		<div className="wrapper">
			<div className="obras-sc-header">
				<div className="obras-sc-title">
					Obras-SC
				</div>
				<div className="obras-sc-subtitle" onClick={() => navigate("/mapas")}>
					<div>ver mapa</div>
					<Arrow/>
				</div>
			</div>
			{children}
		</div>
	)
}

Wrapper.displayName="Wrapper";