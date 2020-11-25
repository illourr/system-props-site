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
  SystemProps,
  PseudoProps,
  ResponsiveProp,
  shouldForwardProp,
} from 'system-props';
import styled, { CSSProp } from 'styled-components';
import { Property } from 'csstype';

const system = createSystem();

interface BoxProps extends SystemProps {
  css?: CSSProp;
  outline?: ResponsiveProp<Property.Outline>;
  appearance?: ResponsiveProp<Property.Appearance>;
  transition?: ResponsiveProp<Property.Transition>;
  transform?: ResponsiveProp<Property.Appearance>;
  textDecoration?: ResponsiveProp<Property.Transform>;
}

const Box = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    shouldForwardProp(prop) && defaultValidatorFn(prop),
})<BoxProps & PseudoProps<BoxProps>>(
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
