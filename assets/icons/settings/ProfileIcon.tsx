import * as React from "react";
import Svg, { Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";

// تحديد أنواع الخصائص (props)
interface ProfileIconProps extends SvgProps {
  size?: number;        // للتحكم في عرض الأيقونة
  color?: string;       // لون التعبئة الرئيسي
  strokeColor?: string; // لون الإطار
  headColor?: string;   // لون الجزء العلوي (الرأس)
}

const ProfileIcon = ({
  size = 30, // الحجم الافتراضي
  color = "#CCA885", // اللون الرئيسي الافتراضي
  strokeColor = "black", // لون الإطار الافتراضي
  headColor = "white", // لون الرأس الافتراضي
  ...props
}: ProfileIconProps) => {
  // حساب الارتفاع للحفاظ على الأبعاد
  const aspectRatio = 32 / 30;
  const height = size * aspectRatio;

  return (
    <Svg
      width={size}
      height={height}
      viewBox="0 0 30 32"
      fill="none"
      {...props}
    >
      {/* الجسم المثلثي */}
      <Path
        d="M26.671 10.222L13.411 31.059.151 10.224l26.52-.002z"
        fill={color}
        stroke={strokeColor}
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      
      {/* الرأس البيضاوي */}
      <Path
        d="M18.27 8.259c0 2.664-2.16 4.824-4.825 4.824-2.664 0-4.824-2.16-4.824-4.824 0-2.664 2.159-4.825 4.824-4.825 2.665 0 4.825 2.16 4.825 4.825"
        fill={headColor}
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      
      {/* الجزء العلوي اليميني (الخط) */}
      <Path
        d="M27.718.212l1.296 1.292-7.304 7.326-1.296-1.292L27.718.212z"
        fill="#CDAA87" // لون ثابت حسب الأصل
        stroke={strokeColor}
        strokeWidth={0.3}
        strokeMiterlimit={10}
      />
      
      {/* الأجزاء الصغيرة داخل الرأس (تم تبسيطها لعدم ظهورها بالحجم الصغير) */}
      {/* يمكنك إلغاء التعليق إذا احتجت إليها */}
      {/* <Defs>
        <ClipPath id="a">
          <Rect width={1.537} height={1.553} fill="#fff" transform="matrix(.99998 .00683 .00683 -.99998 20.001 9.231)"/>
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Rect width={1.537} height={1.553} fill="#000" transform="matrix(.99998 .00683 .00683 -.99998 20.001 9.231)"/>
        <Path d="M21.548 7.725l-.01 1.48c0 .032-.038.048-.061.025l-.728-.745-.728-.745c-.023-.023-.006-.062.025-.062l1.465.01c.02 0 .036.016.037.037z" fill="#fff"/>
      </G> 
      */}
    </Svg>
  );
};

export default ProfileIcon;