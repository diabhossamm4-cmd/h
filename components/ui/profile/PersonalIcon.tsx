import React from "react";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";

// components/ui/profile/PersonalIcon.tsx
export default function PersonalIcon({
  size = 73,
  fillColor = "#FFCC5C66",
  opacity = 0.1,
  strokeColor = "#000",
}: {
  size?: number;
  fillColor?: string;
  opacity?: number;
  strokeColor?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 73 73" fill="none">
      <Rect
        width="73"
        height="73"
        rx="36.5"
        fill={fillColor}
        fillOpacity={opacity}
      />
      <Path
        d="M46.1163 46.8413C46.1163 49.584 47.9095 48.9323 36.7433 48.9323C25.577 48.9323 26.8189 49.584 26.8189 46.8413C26.8189 44.0985 32.937 38.9999 36.7433 38.9999C40.5496 38.9999 46.1163 44.0985 46.1163 46.8413Z"
        fill="white"
      />
      <Ellipse
        cx="37.889"
        cy="29.5556"
        rx="4.44444"
        ry="5.55556"
        fill="white"
      />
      <Path
        d="M26.7778 49C26.7778 43.6306 31.1306 39.2778 36.5001 39.2778C41.8695 39.2778 46.2223 43.6306 46.2223 49M42.0556 29.5556C42.0556 32.6238 39.5682 35.1111 36.5001 35.1111C33.4318 35.1111 30.9445 32.6238 30.9445 29.5556C30.9445 26.4873 33.4318 24 36.5001 24C39.5682 24 42.0556 26.4873 42.0556 29.5556Z"
        fill="#CCA884"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
