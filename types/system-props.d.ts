import { Theme as AppTheme } from './components/theme';

declare module 'system-props' {
  export interface Theme extends AppTheme {}
}
