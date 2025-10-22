import React from "react";
import Svg, { Rect, Path, Polygon } from "react-native-svg";

export default function BusinessIcon({
  size = 50,
  fillColor = "#CCA884",
  strokeColor = "#000",
  opacity = 1,
}: {
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  opacity?: number;
}) {
  return (
    <Svg
      width={size}
      height={(size * 33) / 43}
      viewBox="0 0 43 33"
      fill="none"
    >
      {/* المقبض */}
      <Path
        d="M16 2L18.2 0H25.8L28 2H16Z"
        fill={strokeColor}
      />

      {/* جسم الشنطة */}
      <Rect
        x="1"
        y="3"
        width="41"
        height="28"
        rx="1"
        fill={fillColor}
        fillOpacity={opacity}
        stroke={strokeColor}
        strokeWidth={1.5}
      />

      {/* الفاصل الأوسط */}
      <Path
        d="M1 17H42"
        stroke={strokeColor}
        strokeWidth={1.5}
      />

      {/* مثلث القفل الأسود */}
      <Polygon
        points="21.5,13.5 26.5,22 16.5,22"
        fill={strokeColor}
      />

      {/* المثلث الأبيض الداخلي */}
      <Polygon
        points="21.5,15.5 24.5,21 18.5,21"
        fill="white"
      />
    </Svg>
  );
}
