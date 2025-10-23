import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// Define the component's props for better type safety
interface CloseIconProps extends SvgProps {
  size?: number;
  color?: string; // Main fill color
  strokeColor?: string; // Stroke color for the 'X' and circle border
}

const CloseIcon = ({
  size = 33, // Default size
  color = "#CDAA87", // Default fill color
  strokeColor = "#010101", // Default stroke color
  ...props
}: CloseIconProps) => {
  return (
    <Svg
      width={size}
      height={size} // Icon is a square (circle)
      viewBox="0 0 33 33"
      fill="none"
      {...props}
    >
      {/* Background Circle */}
      <Path
        d="M32.5 16.5C32.5 25.336 25.336 32.5 16.5 32.5 7.664 32.5 0.5 25.336 0.5 16.5 0.5 7.664 7.664 0.5 16.5 0.5 25.336 0.5 32.5 7.664 32.5 16.5z"
        fill={color}
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      {/* 'X' Lines */}
      <Path
        d="M27.74 5.296L5.261 27.598M5.261 5.475l22.48 22.302"
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export default CloseIcon;