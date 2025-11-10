import React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';

/**
 * An SVG icon component generated from the provided design.  It renders
 * a pin‑like shape with decorative arcs and a small indicator box on the
 * left.  You can override the overall size via the `width` and `height`
 * props; by default it renders at 48×74 to match the original SVG.
 */
export interface CustomPinIconProps {
  width?: number;
  height?: number;
  [key: string]: any;
}

const CustomPinIcon: React.FC<CustomPinIconProps> = ({ width = 48, height = 74, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 48 74"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1952_3467)">
        <Path
          d="M45.3594 36.0047L34.8955 32.8274L33.0342 38.388L43.4981 41.5653L45.3594 36.0047Z"
          fill="white"
          stroke="black"
          strokeWidth={0.75}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M4 40C6.20914 40 8 38.2091 8 36C8 33.7909 6.20914 32 4 32C1.79086 32 0 33.7909 0 36C0 38.2091 1.79086 40 4 40Z"
        fill="#CCA885"
      />
      <Rect
        x={1}
        y={32}
        width={8}
        height={8}
        rx={4}
        stroke="#231F20"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M7 38.125C6.59904 38.3625 6.12605 38.5 5.61945 38.5C4.17247 38.5 3 37.381 3 36C3 34.619 4.17247 33.5 5.61945 33.5C6.12445 33.5 6.59584 33.6367 6.996 33.8727"
        stroke="#231F20"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M2 35.5H6"
        stroke="#231F20"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M2 36.5H6"
        stroke="#231F20"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M39.8945 29.4887C40.1644 29.547 40.4305 29.3754 40.4887 29.1055L41.4382 24.7068C41.4965 24.4369 41.3249 24.1708 41.055 24.1126C40.785 24.0543 40.519 24.2259 40.4607 24.4958L39.6168 28.4058L35.7068 27.5618C35.4369 27.5035 35.1708 27.6751 35.1126 27.9451C35.0543 28.215 35.2259 28.481 35.4958 28.5393L39.8945 29.4887ZM3.42287 29.2668C11.7552 16.0601 31.1075 16.1345 39.5798 29.271L40.4202 28.729C31.5605 14.9918 11.3081 14.8947 2.57713 28.7332L3.42287 29.2668Z"
        fill="black"
      />
      <Path
        d="M3.1055 44.5113C2.83557 44.453 2.56952 44.6246 2.51126 44.8945L1.5618 49.2932C1.50354 49.5631 1.67513 49.8292 1.94505 49.8874C2.21498 49.9457 2.48103 49.7741 2.53929 49.5042L3.38325 45.5942L7.2932 46.4382C7.56313 46.4965 7.82918 46.3249 7.88744 46.0549C7.94571 45.785 7.77412 45.519 7.50419 45.4607L3.1055 44.5113ZM39.5771 44.7332C31.2448 57.9399 11.8925 57.8655 3.42019 44.729L2.57981 45.271C11.4395 59.0082 31.6919 59.1053 40.4229 45.2668L39.5771 44.7332Z"
        fill="black"
      />
      <Defs>
        <ClipPath id="clip0_1952_3467">
          <Rect width={12} height={12} fill="white" transform="translate(41.3926 29) rotate(60)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CustomPinIcon;