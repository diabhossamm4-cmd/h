import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function Bag({ width = 23, height = 19, strokeColor = "#010101" }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1112_5932)">
        <Path
          d="M13.6249 1L11.3939 4.42046L9.16406 1.00103L13.6249 1Z"
          stroke={strokeColor}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <Path
          d="M21.7877 3.22949H1V17.8444H21.7877V3.22949Z"
          fill="white"
          stroke={strokeColor}
          strokeMiterlimit="10"
        />
        <Path
          d="M1 10.5371H21.7877"
          stroke={strokeColor}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <Path
          d="M13.625 8.78174L11.3951 12.2012L9.16418 8.78174L13.625 8.78174Z"
          fill="white"
          stroke={strokeColor}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M29.288 8.58C29.288 9.42 28.856 10.156 27.992 10.788C27.632 11.052 27.4 11.296 27.296 11.52C27.192 11.736 27.14 12.04 27.14 12.432V12.696H26.156V12.396C26.156 11.796 26.248 11.34 26.432 11.028C26.624 10.716 26.98 10.36 27.5 9.96C27.988 9.584 28.232 9.12 28.232 8.568C28.232 8.216 28.112 7.912 27.872 7.656C27.6 7.368 27.232 7.224 26.768 7.224C26.264 7.224 25.868 7.388 25.58 7.716C25.3 8.044 25.16 8.452 25.16 8.94H24.08C24.08 8.212 24.316 7.592 24.788 7.08C25.268 6.56 25.928 6.3 26.768 6.3C27.472 6.3 28.068 6.508 28.556 6.924C29.044 7.34 29.288 7.892 29.288 8.58ZM27.452 15H25.88V13.392H27.452V15Z"
        fill="black"
      />
      <Defs>
        <ClipPath id="clip0_1112_5932">
          <Rect width="34.9879" height="25" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
