import styled from 'styled-components';
import { COLORS } from '../constants/colors';

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.grey};
	padding: 0 1rem;
	@media screen and (min-width: 640px) {
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		padding: 0;
		border: 1px solid ${COLORS.grey};
		margin-top: 250px;
		margin-bottom: 3.5rem;
	}
	@media screen and (min-width: 1024px) {
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		padding: 0;
		border: 1px solid ${COLORS.grey};
		margin-top: 0;
	}
`;

const StyledA = styled.a`
	text-transform: uppercase;
	font-family: 'League Spartan', sans-serif;
	letter-spacing: 1.92857px;
	text-align: center;
	opacity: ${({ isActive }) => (isActive ? '1' : '.5')};
`;

const StyledLi = styled.li`
	padding: 1.6rem 2rem;
	position: relative;

	&::before {
		content: '';
		height: 3px;
		width: calc(100% - 3.5rem);
		background-color: ${({ isActive, color }) =>
			isActive ? color : 'transparent'};
		position: absolute;
		bottom: 1.3rem;
		left: calc(-50% + 3.5rem);
		transform: translate(50%, 0%);
		@media screen and (min-width: 640px) {
			content: '01';
			transform: translate(0%, -50%);
			top: calc(50% - 2px);
			background-color: transparent;
			height: auto;
			width: auto;
			left: 1rem;
			font-size: 0.8rem;
			font-family: 'League Spartan', sans-serif;
			opacity: 0.5;
		}
	}
	@media screen and (min-width: 640px) {
		width: 100%;
		border-bottom: 1px solid ${COLORS.grey};
		background-color: ${({ isActive, color }) =>
			isActive ? color : 'transparent'};
		padding: 1rem 6rem 1rem 4rem;

		&:nth-child(3) {
			border-bottom: none;
			&::before {
				content: '03';
			}
		}

		&:nth-child(2) {
			&::before {
				content: '02';
			}
		}
	}

	@media screen and (min-width: 1024px) {
		width: 100%;
		border-bottom: 1px solid ${COLORS.grey};
		background-color: ${({ isActive, color }) =>
			isActive ? color : 'transparent'};

		&:nth-child(3) {
			border-bottom: none;
		}
	}
`;

const StyledPlanetImage = styled.img`
	height: 150px;
	margin: auto;
	margin-bottom: 1rem;
	@media screen and (min-width: 1024px) {
		width: 60%;
		height: auto;
	}
`;

const StyledPlanetContainer = styled.div`
	margin: 3rem 0.4rem;

	@media screen and (min-width: 640px) {
		position: absolute;
		top: 8rem;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media screen and (min-width: 1024px) {
		position: absolute;
		top: 50%;
		left: -400px;
		transform: translate(-50%, -50%);
	}
`;

const StyledH1 = styled.h1`
	font-family: 'Antonio', sans-serif;
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 1rem;

	@media screen and (min-width: 640px) {
		text-align: left;
		font-size: 3rem;
	}
	@media screen and (min-width: 1024px) {
		text-align: left;
		font-size: 3rem;
	}
`;

const StyledText = styled.p`
	font-family: 'League Spartan', sans-serif;
	margin: 0 2rem;
	text-align: center;
	font-size: 0.9rem;
	line-height: 24px;
	font-weight: 300;
	margin-bottom: 2rem;
	@media screen and (min-width: 640px) {
		text-align: left;
		margin: 0;
	}
	@media screen and (min-width: 1024px) {
		text-align: left;
		margin: 0;
	}
`;

const StyledSource = styled.p`
	text-align: center;
	font-family: 'League Spartan', sans-serif;
	opacity: 0.5;
	font-weight: 300;
	font-size: 1.1rem;
	margin-bottom: 2rem;
	@media screen and (min-width: 640px) {
		text-align: left;
		margin-top: 2rem;
		margin-bottom: 0;
	}
	@media screen and (min-width: 1024px) {
		text-align: left;
		margin-top: 2rem;
	}
`;

const StyledSourceLink = styled.a`
	font-weight: 700;
	text-decoration: underline;
`;

const StyledDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	@media screen and (min-width: 640px) {
		flex-direction: row;
		margin: auto;
		gap: 1rem;
		justify-content: center;
	}
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		margin: auto;
		gap: 2rem;
		justify-content: center;
	}
`;

const StyledContainer = styled.div`
	@media screen and (min-width: 640px) {
		display: flex;
		gap: 18rem;
		width: 100%;
		align-items: center;
		margin-top: 6rem;
	}
	@media screen and (min-width: 1024px) {
		display: flex;
		gap: 18rem;
		width: auto;
		align-items: center;
		margin-top: 6rem;
	}
`;

const StyledTextContainer = styled.div`
	@media screen and (min-width: 640px) {
		margin-top: 190px;
		width: 100%;
	}
	@media screen and (min-width: 1024px) {
		width: 100%;
		margin-top: 4rem;
	}
`;

const StyledMainContainer = styled.div`
	@media screen and (min-width: 640px) {
		display: flex;
		flex-direction: row-reverse;
		margin-bottom: 4rem;
		position: relative;
		align-items: flex-end;
		justify-content: space-between;
		gap: 4rem;
	}
	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: column-reverse;
		margin-left: 45vw;
		margin-bottom: 4rem;
		position: relative;
		align-items: stretch;
	}
`;

const StyledMain = styled.main`
	@media screen and (min-width: 640px) {
		margin: 0 3rem;
	}
	@media screen and (min-width: 1024px) {
		margin: 0 10rem;
	}
`;

export {
	StyledUl,
	StyledA,
	StyledLi,
	StyledPlanetImage,
	StyledPlanetContainer,
	StyledH1,
	StyledText,
	StyledSource,
	StyledSourceLink,
	StyledDataContainer,
	StyledContainer,
	StyledTextContainer,
	StyledMainContainer,
	StyledMain
};
