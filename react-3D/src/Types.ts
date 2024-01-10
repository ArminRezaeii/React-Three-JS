export interface CustomButtonProps {
  title: string;
  type: string;
  customStyle: string;
  handleClick: () => void;
}
export interface TabProps {
  key: string;
  tab: {
    name: string;
    icon: string;
  };
  isFilterTab?:null
  isActiveTab?:string
  handleClick: () => void;
}
// export interface ShirtProps{
//   childern
// }