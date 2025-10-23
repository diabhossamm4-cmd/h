import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// Define the component's props
interface GlobeIconProps extends SvgProps {
  size?: number;
  color?: string; // Main fill color
  strokeColor?: string; // Color of the globe lines
}

const GlobeIcon = ({
  size = 27, // Default width
  color = "#CCA885", // Default fill color
  strokeColor = "black", // Default line color
  ...props
}: GlobeIconProps) => {
  // Calculate height to maintain the original aspect ratio (26/27)
  const aspectRatio = 26 / 27;
  const height = size * aspectRatio;

  return (
    <Svg
      width={size}
      height={height}
      viewBox="0 0 27 26"
      fill="none"
      {...props}
    >
      {/* Background Sphere */}
      <Path
        d="M13.192 24.919c6.69 0 12.112-5.423 12.112-12.112C25.304 6.118 19.881.695 13.192.695 6.503.695 1.08 6.118 1.08 12.807c0 6.69 5.423 12.112 12.112 12.112z"
        fill={color} // Use color prop
      />
      
      {/* Globe Lines */}
      <Path
        d="M.25 12.807h25.947M2.025 6.838h22.397M2.025 18.774h22.397M13.192.25v25M15.818.695s3.84 3.156 3.84 12.11c0 8.953-3.84 12.112-3.84 12.112M10.564.695S6.724 3.85 6.724 12.805c0 8.953 3.84 12.112 3.84 12.112"
        stroke={strokeColor} // Use strokeColor prop
        strokeWidth={0.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default GlobeIcon;