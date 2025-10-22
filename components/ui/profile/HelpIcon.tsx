import React from "react";
import Svg, { Path } from "react-native-svg";

export default function HelpIcon({ size = 34 }: { size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
    >
      {/* الدائرة الرمليّة */}
      <Path
        d="M33 17C33 25.836 25.836 33 17 33C8.164 33 1 25.836 1 17C1 8.164 8.164 1 17 1C25.836 1 33 8.164 33 17Z"
        fill="#CCA884"
        stroke="black"
        strokeMiterlimit={10}
      />

      {/* الخط العمودي (الجزء السفلي من علامة التعجب) */}
      <Path
        d="M17 12.9971V22.376"
        stroke="black"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />

      {/* النقطة الصغيرة فوق (رأس علامة التعجب) */}
      <Path
        d="M17.0001 10.6169C16.3254 10.6169 15.7766 10.0681 15.7766 9.39343C15.7766 8.71873 16.3254 8.16992 17.0001 8.16992C17.6748 8.16992 18.2236 8.71873 18.2236 9.39343C18.2236 10.0681 17.6748 10.6169 17.0001 10.6169Z"
        fill="white"
        stroke="black"
        strokeWidth={0.91}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}
