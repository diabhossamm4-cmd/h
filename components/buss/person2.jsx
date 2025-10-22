import React from "react";
import Svg, { G, Path, ClipPath, Defs, Rect } from "react-native-svg";

export default function Person2({ width = 23, height = 21, strokeColor = "#010101" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 21" fill="none" >
      <Defs>
        <ClipPath id="clip0_1132_1790">
          <Rect width="12.5635" height="9.87133" fill="white" transform="translate(22.8359 14.0127) rotate(180)" />
        </ClipPath>
        <ClipPath id="clip1_1132_1790">
          <Rect width="16.5309" height="12.9886" fill="white" transform="translate(16.5303 20.1758) rotate(180)" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_1132_1790)">
        <Path
          d="M22.7656 4.17975L16.5542 13.9404L10.3428 4.18052L22.7656 4.17975Z"
          fill="white"
          stroke={strokeColor}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M18.8303 3.25986C18.8303 4.50784 17.8184 5.51972 16.5704 5.51972C15.3224 5.51972 14.3105 4.50784 14.3105 3.25986C14.3105 2.01189 15.3218 1 16.5698 1C17.8178 1 18.8297 2.01189 18.8297 3.25986Z"
        fill="white"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
      <G clipPath="url(#clip1_1132_1790)">
        <Path
          d="M16.4385 7.23805L8.26556 20.0811L0.092641 7.23907L16.4385 7.23805Z"
          fill="white"
          stroke={strokeColor}
          strokeWidth={0.5}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M11.2605 6.02819C11.2605 7.67026 9.92905 9.00169 8.28698 9.00169C6.64491 9.00169 5.31348 7.67026 5.31348 6.02819C5.31348 4.38612 6.64412 3.05469 8.28619 3.05469C9.92826 3.05469 11.2597 4.38612 11.2597 6.02819Z"
        fill="white"
        stroke={strokeColor}
        strokeMiterlimit="10"
      />
    </Svg>
  );
}
