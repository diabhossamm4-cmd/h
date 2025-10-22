// components/Row.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  tint: string;  // لون دائرة الأيقونة
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;

  // جديد:
  className?: string;            // ستايل للرو كله (الحاوي)
  circleClassName?: string;      // ستايل للدائرة
  titleClassName?: string;       // ستايل لنص العنوان
};

export default function Row({
  title,
  tint,
  icon,
  onPress,
  className,
  circleClassName,
  titleClassName,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`mx-5 mb-4 rounded-2xl ${className ?? ""}`}
      style={{ backgroundColor: "#EEEEEC" }}
    >
      <View className="flex-row items-center justify-between px-4 py-4">
        <View className="flex-row items-center">
          <View
            className={`w-14 h-14 rounded-full items-center justify-center mr-3 ${circleClassName ?? ""}`}
            style={{ backgroundColor: tint }}
          >
            <Ionicons name={icon} size={24} color="#000" />
          </View>
          <Text className={`text-[20px] font-semibold text-black ${titleClassName ?? ""}`}>
            {title}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#000" />
      </View>
    </TouchableOpacity>
  );
}
