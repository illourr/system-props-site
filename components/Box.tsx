import {
	createSystem,
	flexbox,
	grid,
	layout,
	space,
	color,
	shadow,
	typography,
	position,
	border,
} from 'system-props';
import styled from 'styled-components';

const system = createSystem();

const Box = styled.div(
	system({
		...flexbox,
		...grid,
		...layout,
		...space,
		...color,
		...shadow,
		...typography,
		...position,
		...border,
		transition: true,
		transform: true,
		textDecoration: true,
	})
);

export default Box;
