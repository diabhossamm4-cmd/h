import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

export default function MenuIcon({ size = 28 }: { size?: number }) {
  return (
    <Svg
      width={size}
      height={(size * 25) / 28} // الحفاظ على النسبة الأصلية
      viewBox="0 0 28 25"
      fill="none"
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M25.5211 0.0771484H0.078125V24.9231H25.5211V0.0771484Z"
          fill="#CCA884"
          stroke="black"
          strokeMiterlimit={10}
        />
        <Path
          d="M5.62305 5.45215H27.6175"
          stroke="black"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M5.62305 10.3511H27.6175"
          stroke="black"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M5.62305 15.25H27.6175"
          stroke="black"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <Path
          d="M5.62305 20.1489H27.6175"
          stroke="black"
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="27.7778" height="25" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
