import React from "react";
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg";

export default function DocumentEditIcon({ size = 30 }: { size?: number }) {
  return (
    <Svg
      width={size}
      height={(size * 28) / 30} // الحفاظ على النسبة الأصلية
      viewBox="0 0 30 28"
      fill="none"
    >
      {/* المستند */}
      <Path
        d="M1.00003 1H24.1902V26.8811H1.00003V1Z"
        fill="#CCA884"
        stroke="black"
        strokeMiterlimit={10}
      />

      {/* الخطوط الأفقية داخل المستند */}
      <Path
        d="M18.9958 6.12793H6.23547"
        stroke="black"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M18.9958 11.3362H6.23547"
        stroke="black"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M18.9958 16.5447H6.23547"
        stroke="black"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M18.9958 21.7529H6.23547"
        stroke="black"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />

      {/* التفاصيل الصغيرة (رمز القلم داخل المستند) */}
      <G clipPath="url(#clip0)">
        <Rect
          width="2.01651"
          height="2.32937"
          transform="matrix(0.999969 0.00781016 0.00597973 -0.999982 17.1729 21.7371)"
          fill="black"
        />
        <Path
          d="M19.2031 19.478L19.1899 21.6981C19.1896 21.7461 19.1393 21.7705 19.1094 21.7356L18.1537 20.618L17.2008 19.5004C17.1709 19.4654 17.1927 19.4077 17.2343 19.408L19.1562 19.423C19.182 19.4232 19.2033 19.4482 19.2031 19.478Z"
          fill="white"
        />
      </G>

      {/* القلم الخارجي (رمز التعديل) */}
      <Path
        d="M27.2997 8.21123L29 10.1487L19.4153 21.135L17.715 19.1976L27.2997 8.21123Z"
        fill="#CCA884"
        stroke="black"
        strokeWidth={0.3}
        strokeMiterlimit={10}
      />

      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="2.01651"
            height="2.32937"
            fill="white"
            transform="matrix(0.999969 0.00781016 0.00597973 -0.999982 17.1729 21.7371)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
