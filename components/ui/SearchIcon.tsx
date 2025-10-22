import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// تحديد خصائص المكون لجعله أكثر قوة
interface SearchIconProps extends SvgProps {
  size?: number;
  color?: string; // لون التعبئة الداخلي
  strokeColor?: string; // لون الإطار الخارجي
}

const SearchIcon = ({
  size = 21, // الحجم الافتراضي
  color = "#CCA885", // اللون الداخلي الافتراضي
  strokeColor = "#010101", // لون الإطار الافتراضي
  ...props
}: SearchIconProps) => {
  return (
    <Svg
      width={size}
      height={size} // الطول والعرض متساويان
      viewBox="0 0 21 21"
      fill="none"
      {...props}
    >
      {/* الدائرة الداخلية الملونة */}
      <Path
        d="M12.501 2C16.031 2 19 5.073 19 9c0 3.928-2.97 7-6.499 7-3.53 0-6.5-3.072-6.5-7C6 5.072 8.97 2 12.501 2z"
        fill={color}
      />
      {/* الإطار الأسود للعدسة */}
      <Path
        d="M20 9c0 4.418-3.806 8-8.5 8S3 13.418 3 9c0-4.418 3.805-8 8.5-8S20 4.582 20 9z"
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      {/* يد العدسة */}
      <Path
        d="M5.57 15.226L1 19.796"
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export default SearchIcon;