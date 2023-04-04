import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledH1 = styled.h1`
	text-transform: uppercase;
	font-family: 'Antonio', sans-serif;
	font-weight: 600;
	font-size: 2rem;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 2rem 1.5rem 2rem;
	border-bottom: 1px solid ${COLORS.grey};
	@media screen and (min-width: 640px) {
		border-bottom: none;
		justify-content: center;
	}
	@media screen and (min-width: 1024px) {
		border-bottom: none;
		justify-content: none;
	}
`;

const StyledUl = styled.ul`
	padding: 1rem 4rem;
	height: calc(100vh - 73.5px - 2rem);
	width: 100vw;
	display: flex;
	flex-direction: column;
	gap: 0rem;
	transform: translate(${({ translate }) => translate});
	transition: transform 0.3s;
	position: absolute;
	top: 90px;
	z-index: 1;
	background-color: ${COLORS.bgcolor};
	@media screen and (min-width: 640px) {
		position: static;
		transform: translate(0);
		flex-direction: row;
		height: auto;
		width: auto;
		padding: 0rem 2rem;
	}
	@media screen and (min-width: 1024px) {
		position: static;
		transform: translate(0);
		flex-direction: row;
		height: auto;
		width: auto;
		padding: 0rem 2rem;
	}
`;

const StyledNav = styled.nav`
	@media screen and (min-width: 640px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 1px solid ${COLORS.grey};
	}
	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${COLORS.grey};
	}
`;

const StyledIconMenu = styled.img`
	@media screen and (min-width: 640px) {
		display: none;
	}
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

export { StyledH1, StyledDiv, StyledUl, StyledNav, StyledIconMenu };
