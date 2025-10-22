// components/AccountSwitch.tsx
import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, Pressable } from "react-native";
import { AccountMode } from "@/lib/api";
import { Ionicons } from "@expo/vector-icons";
import PersonalIcon from "@/components/ui/profile/PersonalIcon";
import BusinessIcon from "@/components/ui/profile/BusinessIcon";

const BG = "#F2F2F0";
const BORDER = "#CCA88499";
const LEFT_PANEL = "#E0E0E0";
const YELLOW = "#ffcb5c98";
const BLUE = "#1C64FF";

const WRAP_W = 332;
const WRAP_H = 89;
const LEFT_W = 164.8;
const LEFT_H = 79.8;
const LEFT_X = 6.1;
const LEFT_Y = 5.6;

const PILL_W = 58;
const PILL_H = 28;
const KNOB = 20;
const PILL_TOP = 30;

type Props = {
  mode: AccountMode;
  onChange?: (m: AccountMode) => void;
};

export default function AccountSwitch({ mode, onChange }: Props) {
  const anim = useRef(new Animated.Value(mode === "personal" ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: mode === "personal" ? 0 : 1,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [mode]);

  const leftShade = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.2],
  });
  const rightShade = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });
  const pillBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [YELLOW, BLUE],
  });
  const knobLeft = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, PILL_W - KNOB - 4],
  });

  // وظيفة التبديل بالضغط على السويتش فقط
  const toggle = () =>
    onChange?.(mode === "personal" ? "business" : "personal");

  return (
    <View
      className="rounded-3xl"
      style={{
        width: WRAP_W,
        height: WRAP_H,
        backgroundColor: BG,
        borderColor: BORDER,
        borderWidth: 1,
      }}
    >
      {/* ألواح الخلفية */}
      <Animated.View
        style={{
          position: "absolute",
          left: LEFT_X,
          top: LEFT_Y,
          width: LEFT_W,
          height: LEFT_H,
          borderRadius: 12,
          backgroundColor: LEFT_PANEL,
          opacity: leftShade,
        }}
      />
      <Animated.View
        style={{
          position: "absolute",
          right: LEFT_X,
          top: LEFT_Y,
          width: LEFT_W,
          height: LEFT_H,
          borderRadius: 12,
          backgroundColor: LEFT_PANEL,
          opacity: rightShade,
        }}
      />

      {/* الأيكونتان — غير تفاعليتين */}
      <View className="flex-row h-full">
        <View
          className="flex-1 items-center justify-center"
          pointerEvents="none"
        >
          <View
            className="w-[73px] h-[73px] rounded-full items-center justify-center"
            style={{ backgroundColor: "#FFCC5C66" }}
          >
            <PersonalIcon
              size={70}
              fillColor={YELLOW}
              strokeColor={mode === "personal" ? "#000" : "#FFCC5C66"}
              opacity={0.4}
            />
          </View>
        </View>

        <View
          className="flex-1 items-center justify-center"
          pointerEvents="none"
        >
          <Animated.View
            style={{
              width: 73,
              height: 73,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: BLUE + "66",
              opacity: rightShade,
            }}
          >
            <BusinessIcon
              size={50}
              fillColor="#CCA884"
              strokeColor={mode === "business" ? "#000" : "#B5B5B5"}
            />
          </Animated.View>
        </View>
      </View>

      {/* السويتش النصّي — هو الوحيد التفاعلي */}
      <Pressable
        onPress={toggle}
        accessibilityRole="switch"
        accessibilityState={{ checked: mode === "business" }}
        hitSlop={12}
        style={{
          position: "absolute",
          top: PILL_TOP - 6, // وسّع المساحة القابلة للضغط
          left: (WRAP_W - PILL_W) / 2 - 6,
          width: PILL_W + 12,
          height: PILL_H + 12,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View
          pointerEvents="none"
          style={{
            width: PILL_W,
            height: PILL_H,
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: "#000",
            backgroundColor: pillBg,
            justifyContent: "center",
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              top: (PILL_H - KNOB) / 2,
              left: knobLeft,
              width: KNOB,
              height: KNOB,
              backgroundColor: "#fff",
              borderRadius: KNOB / 2,
              borderWidth: 1.5,
              borderColor: "#000",
            }}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}
