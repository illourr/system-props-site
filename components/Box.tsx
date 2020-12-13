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
  AllSystemProps,
  PseudoProps,
  SystemProp,
  shouldForwardProp,
} from 'system-props';
import styled, { CSSProp } from 'styled-components';
import { Property, Properties } from 'csstype';

const system = createSystem();

const extraStyleProps = {
  userSelect: true,
  cursor: true,
  outline: true,
  appearance: true,
  transition: true,
  transform: true,
  textDecoration: true,
} as const;

type ExtraBoxProps = {
  [K in keyof typeof extraStyleProps]?: SystemProp<Properties[K]>;
};

interface BoxProps extends AllSystemProps<'prefix'>, ExtraBoxProps {
  css?: CSSProp;
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
    ...extraStyleProps,
  })
);

export default Box;
