import React from "react";
import Svg, { G, Path, ClipPath, Defs, Rect } from "react-native-svg";

export default function Person({ width = 17, height = 19, strokeColor = "#010101" }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs>
        <ClipPath id="clip0_1132_2298">
          <Rect width="16.5309" height="12.9886" fill="white" transform="translate(16.5303 18.1758) rotate(-180)" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_1132_2298)">
        <Path
          d="M16.4385 5.23805L8.26556 18.0811L0.092641 5.23907L16.4385 5.23805Z"
          fill="white"
          stroke={strokeColor}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M11.2605 4.02819C11.2605 5.67026 9.92905 7.00169 8.28698 7.00169C6.64491 7.00169 5.31348 5.67026 5.31348 4.02819C5.31348 2.38612 6.64412 1.05469 8.28619 1.05469C9.92826 1.05469 11.2597 2.38612 11.2597 4.02819Z"
        fill="white"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
    </Svg>
  );
}
