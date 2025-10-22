// components/SelfieMask.jsx
import React from "react";
import { useWindowDimensions } from "react-native";
import Svg, { Defs, Mask, Rect, Ellipse } from "react-native-svg";

export default function SelfieMask() {
  const { width, height } = useWindowDimensions();
  const ovalWidth = width * 0.8;
  const ovalHeight = ovalWidth * 1.3;

  return (
    <Svg
      height="100%"
      width="100%"
      style={{ position: 'absolute' }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Defs>
        <Mask id="mask">
          <Rect height="100%" width="100%" fill="white" />
          <Ellipse
            cx={width / 2}
            cy={height / 2.2}
            rx={ovalWidth / 2}
            ry={ovalHeight / 2}
            fill="black"
          />
        </Mask>
      </Defs>
      <Rect
        height="100%"
        width="100%"
        fill="rgba(0, 0, 0, 0.7)"
        mask="url(#mask)"
      />
    </Svg>
  );
}