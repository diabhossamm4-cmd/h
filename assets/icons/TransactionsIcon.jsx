import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export default function TransactionsIcon({ size = 41, color = "#CCA885", opacity = 0.6 }) {
  return (
    <Svg
      width={size}
      height={(size * 37) / 41}
      viewBox="0 0 41 37"
      fill="none"
    >
      <G opacity={opacity}>
        {/* المستطيل الأساسي */}
        <Path
          d="M36.9233 1H1V36H36.9233V1Z"
          fill={color}
          stroke="black"
          strokeWidth={0.5}
          strokeMiterlimit={10}
        />

        {/* الخطوط الأفقية */}
        <Path
          d="M8.82617 8.57178H39.8804"
          stroke="black"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />
        <Path
          d="M8.82617 15.4727H39.8804"
          stroke="black"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />
        <Path
          d="M8.82617 22.3735H39.8804"
          stroke="black"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />
        <Path
          d="M8.82617 29.2749H39.8804"
          stroke="black"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />

        {/* الدوائر الجانبية */}
        {[8.48682, 15.4316, 22.376, 29.3203].map((cy, i) => (
          <React.Fragment key={i}>
            <Path
              d={`M5.7881 ${cy}C5.7881 ${cy + 0.73803} 5.18969 ${
                cy + 1.33643
              } 4.45167 ${cy + 1.33643}C3.71364 ${cy + 1.33643} 3.11523 ${
                cy + 0.73803
              } 3.11523 ${cy}C3.11523 ${cy - 0.73802} 3.71329 ${
                cy - 1.33643
              } 4.45131 ${cy - 1.33643}C5.18934 ${cy - 1.33643} 5.78774 ${
                cy - 0.73802
              } 5.78774 ${cy}`}
              fill="white"
            />
            <Path
              d={`M5.7881 ${cy}C5.7881 ${cy + 0.73803} 5.18969 ${
                cy + 1.33643
              } 4.45167 ${cy + 1.33643}C3.71364 ${cy + 1.33643} 3.11523 ${
                cy + 0.73803
              } 3.11523 ${cy}C3.11523 ${cy - 0.73802} 3.71329 ${
                cy - 1.33643
              } 4.45131 ${cy - 1.33643}C5.18934 ${cy - 1.33643} 5.78774 ${
                cy - 0.73802
              } 5.78774 ${cy}`}
              stroke="#010101"
              strokeMiterlimit={10}
            />
          </React.Fragment>
        ))}
      </G>
    </Svg>
  );
}
