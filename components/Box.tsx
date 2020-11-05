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
  {
    boxSizing: 'border-box',
  },
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
    outline: true,
    appearance: true,
    transition: true,
    transform: true,
    textDecoration: true,
  })
);

export default Box;
