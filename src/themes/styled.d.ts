import 'styled-components';
import { ITheme } from 'interfaces';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
