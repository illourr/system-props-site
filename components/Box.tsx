import { ReactNode } from 'react';
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
  css,
  CSSObject,
  Theme,
} from 'system-props';
import styled from 'styled-components';
import { Properties } from 'csstype';

const Foo = styled.div(({ theme }) => ({
  color: theme.colors.gray400,
}));

const system = createSystem();

const extraStyleProps = {
  userSelect: true,
  cursor: true,
  outline: true,
  appearance: true,
  transform: true,
  textTransform: true,
  textDecoration: true,
} as const;

type ExtraBoxProps = {
  [K in keyof typeof extraStyleProps]?: SystemProp<Properties[K]>;
};

export interface BoxProps extends AllSystemProps<'prefix'>, ExtraBoxProps {
  children?: ReactNode;
  sx?: CSSObject | ((theme: Theme) => CSSObject);
}

export const Box = styled.div.withConfig({
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
  }),
  ({ sx, ...props }) => css(sx)(props)
);
