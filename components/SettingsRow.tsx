// components/SettingsRow.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

// تحديد أنواع الخصائص التي يستقبلها المكون
type SettingsRowProps = {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  textColor?: string;
  isFirst?: boolean;
  isLast?: boolean;
};

export default function SettingsRow({
  icon,
  label,
  onPress,
  textColor = "text-black",
  isFirst = false,
  isLast = false,
}: SettingsRowProps) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className={`flex-row items-center justify-between bg-gray-100 p-4 
          ${isFirst ? 'rounded-t-2xl' : ''} 
          ${isLast ? 'rounded-b-2xl' : ''}`}
      >
        <View className="flex-row items-center">
          {icon}
          <Text className={`text-base font-semibold ml-4 ${textColor}`}>
            {label}
          </Text>
        </View>
        <Feather name="chevron-right" size={22} color="#A0A0A0" />
      </TouchableOpacity>
      {/* عرض الخط الفاصل فقط إذا لم يكن العنصر هو الأخير */}
      {!isLast && <View className="h-[1px] bg-gray-200" />}
    </View>
  );
}