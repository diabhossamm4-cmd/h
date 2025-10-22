import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileModeSwitch({ onChange }) {
  const [mode, setMode] = useState("personal");
  const translateX = useSharedValue(0);

  const toggle = (newMode) => {
    setMode(newMode);
    onChange?.(newMode);
    translateX.value = withTiming(newMode === "personal" ? 0 : 70, {
      duration: 500,
    });
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      className="flex-row w-[140px] h-[52px] bg-[#F5EFE9] rounded-full border border-[#CCA884]"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
      }}
    >
      {/* Animated Indicator */}
      <Animated.View
        style={[
          indicatorStyle,
          {
            position: "absolute",
            width: 68,
            height: 48,
            margin: 2,
            borderRadius: 24,
            backgroundColor: "#CCA884",
          },
        ]}
      />

      {/* Personal Button */}
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => toggle("personal")}
        activeOpacity={0.8}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={mode === "personal" ? "#000" : "#CCA884"}
        />
      </TouchableOpacity>

      {/* Business Button */}
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => toggle("business")}
        activeOpacity={0.8}
      >
        <Ionicons
          name="briefcase-outline"
          size={24}
          color={mode === "business" ? "#000" : "#CCA884"}
        />
      </TouchableOpacity>
    </View>
  );
}
