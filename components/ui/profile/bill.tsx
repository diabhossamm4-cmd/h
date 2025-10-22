import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// تحديد أنواع الخصائص لجعل المكون أكثر قوة
interface  BillIconProps extends SvgProps {
  size?: number;
  color?: string;
  strokeColor?: string;
}

const BillIcon = ({
  size = 21, // حجم افتراضي
  color = "#CCA884", // لون افتراضي
  strokeColor = "black", // لون الإطار الافتراضي
  ...props
}: BillIconProps) => {
  // حساب الطول بناءً على العرض للحفاظ على الأبعاد الأصلية
  const aspectRatio = 23 / 21;
  const height = size * aspectRatio;

  return (
    <Svg width={size} height={height} viewBox="0 0 21 23" fill="none" {...props}>
      <Path
        d="M3.064 6.155L1 22h9.5H20l-2.06-15.845C17.936 3.309 14.606 1 10.5 1 6.394 1 3.064 3.309 3.064 6.155z"
        fill={color} // استخدام اللون من الـ props
        stroke={strokeColor} // استخدام لون الإطار من الـ props
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export default BillIcon;