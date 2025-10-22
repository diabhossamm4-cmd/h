import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// Define the component's props for better type safety
interface Bill2IconProps extends SvgProps {
  size?: number;
  color?: string;
  strokeColor?: string;
}

const Bill2Icon = ({
  size = 21, // Default width
  color = "white", // Default fill color
  strokeColor = "black", // Default stroke color
  ...props
}: Bill2IconProps) => {
  // Calculate height automatically to maintain the original aspect ratio
  const aspectRatio = 23 / 21;
  const height = size * aspectRatio;

  return (
    <Svg
      width={size}
      height={height}
      viewBox="0 0 21 23"
      fill="none"
      {...props}
    >
      <Path
        d="M3.064 6.155L1 22h9.5H20l-2.06-15.845C17.936 3.309 14.606 1 10.5 1 6.394 1 3.064 3.309 3.064 6.155z"
        fill={color}
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export default Bill2Icon;