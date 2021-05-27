import 'styled-components';
import 'system-props';
import { Theme as AppTheme } from './components/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

declare module 'system-props' {
  export interface Theme extends AppTheme {}
}
