import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledLi = styled.li`
	padding: 1.7rem 1rem;
	border-bottom: 1px solid ${COLORS.grey};
	font-weight: 600;
	font-family: 'League Spartan', sans-serif;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	color: ${COLORS.grey};
	display: flex;
	align-items: center;
	font-size: 1rem;
	justify-content: space-between;
	@media screen and (min-width: 640px) {
		border-bottom: none;
	}
	@media screen and (min-width: 1024px) {
		border-bottom: none;
	}
`;

const StyledCircle = styled.div`
	width: 25px;
	height: 25px;
	background-color: ${COLORS.grey};
	border-radius: 50%;
	margin-right: 2rem;

	@media screen and (min-width: 1024px) {
		display: none;
	}

	@media screen and (min-width: 640px) {
		display: none;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;

	&.active {
		color: white;
	}

	&.active ${StyledCircle} {
		background-color: ${({ color }) => color};
	}
`;

const StyledContainer = styled.div`
	display: flex;
`;

const StyledArrow = styled.img`
	@media screen and (min-width: 1024px) {
		display: none;
	}
	@media screen and (min-width: 640px) {
		display: none;
	}
`;

export {
	StyledLi,
	StyledCircle,
	StyledDiv,
	StyledNavLink,
	StyledContainer,
	StyledArrow
};
