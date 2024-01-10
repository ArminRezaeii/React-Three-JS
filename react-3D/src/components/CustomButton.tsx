import { FC } from "react";
import { CustomButtonProps } from "../Types";
import { state } from "../store";
import { useSnapshot } from "valtio";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  type,
  customStyle,
  handleClick,
}) => {
    const snap= useSnapshot(state)
  const genrateStyle = (type: string) => {
    if (type == "filled") {
      return {
        backgroundColor: snap.color,
        color:"#fff"
      };
    }
  };
  return (
    <button
      style={genrateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
export default CustomButton;
