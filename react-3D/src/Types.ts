export interface CustomButtonProps {
  title: string;
  type: string;
  customStyles: string;
  handleClick: () => void;
}
export interface TabProps {
  key: string;
  tab: {
    name: string;
    icon: string;
  };
  isFilterTab?: boolean;
  isActiveTab?: boolean;
  handleClick: () => void;
}
export interface FilePickerProps {
  file: any;
  setFile: any;
  readFile: any;
}
export interface DecalType {
  logo: {
    stateProperty: string;
    filterTab: string;
  };
  full: {
    stateProperty: string;
    filterTab: string;
  };
}
export interface MyState {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
  [key: string]: any
}
export interface ActiveFilterTab {
  [key: string]: boolean;
}
