import * as React from "react";
import Svg, {
  G,
  Path,
  Mask,
  Defs,
  Filter,
  FeFlood,
  FeBlend,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
} from "react-native-svg";

export default function DashboardIcon({ size = 35, color = "#CCA885" }) {
  return (
    <Svg
      width={size}
      height={(size * 36) / 35}
      viewBox="0 0 35 36"
      fill="none"
    >
      <G
        filter="url(#filter0_i_1596_5969)"
        // يسمح بالتحكم باللون من prop
      >
        {/* المربعات الأربعة */}
        <Path
          d="M23.7168 23.3506H34.4238C34.7581 23.3506 34.9257 23.7559 34.6895 23.9922L23.9824 34.6992C23.7461 34.9355 23.3408 34.7679 23.3408 34.4336V23.7266C23.3408 23.5195 23.5088 23.3506 23.7168 23.3506Z"
          fill={color}
          stroke="white"
          strokeWidth={0.4}
        />
        <Path
          d="M0.577148 23.3506H11.2842C11.4921 23.3506 11.6602 23.5195 11.6602 23.7266V34.4336C11.6602 34.7679 11.2548 34.9355 11.0186 34.6992L0.310547 23.9922C0.0745244 23.7559 0.242956 23.3506 0.577148 23.3506Z"
          fill={color}
          stroke="white"
          strokeWidth={0.4}
        />
        <Path
          d="M23.3408 0.577148C23.3408 0.242954 23.7461 0.0745231 23.9824 0.310547L34.6895 11.0186C34.9257 11.2548 34.7581 11.6602 34.4238 11.6602H23.7168C23.5084 11.6602 23.3409 11.4925 23.3408 11.2842V0.577148Z"
          fill={color}
          stroke="white"
          strokeWidth={0.4}
        />
        <Path
          d="M11.0186 0.310547C11.2549 0.0747726 11.6602 0.243034 11.6602 0.577148V11.2842C11.6601 11.4925 11.4925 11.6601 11.2842 11.6602H0.577148C0.243034 11.6602 0.0747726 11.2549 0.310547 11.0186L11.0186 0.310547Z"
          fill={color}
          stroke="white"
          strokeWidth={0.4}
        />

        {/* الرموز الداخلية */}
        <Path
          d="M17.3 8.49l-3.6 3.6h7.2l-3.6-3.6zM17.3 26.52l-3.6-3.6h7.2l-3.6 3.6zM26.52 17.31l-3.6-3.6v7.2l3.6-3.6zM8.48 17.31l3.6-3.6v7.2l-3.6-3.6z"
          fill={color}
        />
      </G>

      <Defs>
        {/* الفلتر الداخلي للظل */}
        <Filter
          id="filter0_i_1596_5969"
          x="0"
          y="0"
          width="35"
          height="39.0103"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="4" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend in2="shape" result="effect1_innerShadow_1596_5969" />
        </Filter>
      </Defs>
    </Svg>
  );
}
