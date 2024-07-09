// App imports
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
			<div className="mapas-obras-sc-header">
				<div className="obras-sc-title">
					Obras-SC
				</div>
				<div className="obras-sc-subtitle" onClick={() => navigate("/")}>
					<div>ver imóveis</div>
					<div style={{width: "15px", display: "grid", gridTemplateColumns: "10px 5px"}}>
						<div className="header-arrow-line"></div>
						<div className="header-arrow-right"></div>
					</div>
				</div>
			</div>
			{children}
		</div>
	)
}

Wrapper.displayName="Wrapper";