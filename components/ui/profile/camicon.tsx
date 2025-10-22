import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

export default function camicon({ size = 40 }: { size?: number }) {
  return (
    <Svg
      width={size}
      height={(size * 29) / 40} // الحفاظ على النسبة الأصلية
      viewBox="0 0 40 29"
      fill="none"
    >
      <G clipPath="url(#clip0)">
        {/* المثلث العلوي الصغير */}
        <Path
          d="M37.1362 0.638947L33.9001 5.80564L30.6641 0.638947H37.1362Z"
          stroke="black"
          strokeWidth={0.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />

        {/* الخلفية المستطيلة */}
        <Path
          d="M38.7483 3.2233H1.25171V28.1436H38.7483V3.2233Z"
          fill="#CCA884"
          stroke="black"
          strokeMiterlimit={10}
        />

        {/* الدائرة البيضاء في المنتصف */}
        <Path
          d="M30.6639 15.6834C30.6639 21.7096 25.8896 26.5938 19.999 26.5938C14.1083 26.5938 9.33398 21.7096 9.33398 15.6834C9.33398 9.65729 14.1083 4.7731 19.999 4.7731C25.8896 4.7731 30.6639 9.65729 30.6639 15.6834Z"
          fill="white"
          stroke="black"
          strokeWidth={0.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="38.08"
            height="28"
            fill="white"
            transform="translate(0.959961 0.44)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
