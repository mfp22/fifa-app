export interface IStatistics {
  ata: number;
  mid: number;
  def: number;
  overall: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
  statistics: IStatistics;
}

export interface IColors {
  white: string;
  background: string;
  card: string;
  text: string;
  success: string;
  warning: string;
  danger: string;
}

export interface IFontSizes {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
}

export interface ITheme {
  name: string;
  colors: IColors;
  fontSize: IFontSizes;
  fontFamily: string;
}
