import { CSSProp, CSSObject } from 'styled-components';
import { ButtonTheme } from './src/styles';

declare module 'styled-components' {
  type Theme = typeof ButtonTheme;
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}