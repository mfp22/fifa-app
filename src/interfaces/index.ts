export interface IStatistics {
  ata: number;
  mid: number;
  def: number;
  overall: number;
}

export interface IButtonComponent {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

export interface ISwitchComponent {
  setChecked: () => void;
  checked: boolean;
}

export interface ITeamComponent {
  team: ITeam;
  onReflesh: () => void;
  locality: string;
}

export interface ITeam {
  id: number;
  name: string;
  league?: string;
  logo: string;
  statistics: IStatistics;
}

export interface IColors {
  white: string;
  background: string;
  cardInner: string;
  card: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  cardText: string;
  success: string;
  successDark: string;
  warning: string;
  danger: string;
  switchColor: string;
  buttonColor: string;
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
