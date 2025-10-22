import * as React from "react";
import Svg, { G, Path, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend } from "react-native-svg";

export default function SendIcon({ size = 53, color = "#CCA885" }) {
  return (
    <Svg
      width={size}
      height={(size * 34) / 53}
      viewBox="0 0 53 34"
      fill="none"
    >
      {/* الظل الأول */}
      <G filter="url(#filter0_d_1596_5995)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.262 3.78135L16.6557 17.9666L16.3021 17.2014L46.9085 3.01613L47.262 3.78135Z"
          fill="black"
        />
      </G>

      {/* الظل الثاني */}
      <G filter="url(#filter1_d_1596_5995)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5749 13.4723L16.3085 17.1628L17.1064 17.4348L18.3728 13.7443L17.5749 13.4723Z"
          fill="black"
        />
      </G>

      {/* الجسم الأساسي */}
      <G filter="url(#filter2_d_1596_5995)">
        <Path
          d="M6 5.70072L47.2971 3.39893L33.9296 24.4732L6 5.70072Z"
          fill="white"
        />
        <Path
          d="M6 5.70072L47.2971 3.39893L33.9296 24.4732L6 5.70072Z"
          stroke={color}
          strokeMiterlimit={10}
        />
      </G>

      {/* الخط النهائي */}
      <G filter="url(#filter3_d_1596_5995)">
        <Path
          d="M20.9002 15.6388L46.977 3.50511L17.2737 13.2247"
          stroke="black"
          strokeWidth={0.5}
        />
      </G>

      <Defs>
        {/* الظل 1 */}
        <Filter
          id="filter0_d_1596_5995"
          x="12.3027"
          y="3.01611"
          width="38.959"
          height="22.9507"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="4" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <FeBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </Filter>

        {/* الظل 2 */}
        <Filter
          id="filter1_d_1596_5995"
          x="12.3086"
          y="13.4722"
          width="10.0645"
          height="11.9624"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="4" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <FeBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </Filter>

        {/* الظل 3 */}
        <Filter
          id="filter2_d_1596_5995"
          x="0.484375"
          y="2.8457"
          width="51.7559"
          height="30.3291"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="4" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <FeBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </Filter>

        {/* الظل 4 */}
        <Filter
          id="filter3_d_1596_5995"
          x="13.1953"
          y="0.267578"
          width="37.8867"
          height="20.5977"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="1" />
          <FeGaussianBlur stdDeviation="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <FeBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <FeBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </Filter>
      </Defs>
    </Svg>
  );
}
