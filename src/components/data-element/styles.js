import styled from 'styled-components';

const StyledTitle = styled.h3`
	text-transform: uppercase;
	opacity: 0.5;
	font-weight: 400;
	font-size: 0.8rem;
	font-family: 'League Spartan', sans-serif;
	letter-spacing: 2.5px;
	transform: translateY(2px);
	@media screen and (min-width: 640px) {
		margin-bottom: 0.5rem;
	}
	@media screen and (min-width: 1024px) {
		margin-bottom: 0.5rem;
	}
`;

const StyledData = styled.p`
	text-transform: uppercase;
	font-family: 'Antonio', sans-serif;
	font-size: 1.4rem;
	@media screen and (min-width: 640px) {
		font-size: 1.4rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 1.8rem;
	}
`;

const StyledDiv = styled.div`
	margin: 0 2rem;
	border: 1px solid #4b4b4b;
	padding: 0.8rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (min-width: 640px) {
		margin: 0;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		align-items: flex-start;
	}

	@media screen and (min-width: 1024px) {
		margin: 0;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		align-items: flex-start;
	}
`;

export { StyledTitle, StyledData, StyledDiv };
