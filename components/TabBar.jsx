import React, { useEffect, useMemo, useRef } from "react";
import { View, TouchableOpacity, Platform, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// الأيقونات كـ components
import HomeIcon from "@/assets/icons/HomeIcon";
import RecipientsIcon from "@/assets/icons/RecipientsIcon";
import SendIcon from "@/assets/icons/SendIcon";
import TransactionsIcon from "@/assets/icons/TransactionsIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";

const ICONS = {
  home: HomeIcon,
  recipients: RecipientsIcon,
  transactions: TransactionsIcon,
  settings: SettingsIcon,
};

export default function TabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  // refs للأنيميشن لكل تاب (scale/translate)
  const iconScales = useRef(state.routes.map(() => new Animated.Value(1))).current;
  const iconY = useRef(state.routes.map(() => new Animated.Value(0))).current;

  // refs للزر المركزي
  const sendIndex = useMemo(() => state.routes.findIndex(r => r.name === "send"), [state.routes]);
  const sendScale = useRef(new Animated.Value(1)).current;
  const sendPulse = useRef(new Animated.Value(0)).current;

  // أنيميشن حالة التركيز لكل تاب (عدا send)
  useEffect(() => {
    state.routes.forEach((route, i) => {
      const focused = state.index === i;

      if (route.name === "send") return;

      Animated.parallel([
        Animated.spring(iconScales[i], {
          toValue: focused ? 1.08 : 1,
          useNativeDriver: true,
          friction: 6,
          tension: 120,
        }),
        Animated.timing(iconY[i], {
          toValue: focused ? -4 : 0,
          duration: 180,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [state.index]);

  // pulse للزر المركزي لما يكون هو النشط
  useEffect(() => {
    const sendFocused = state.index === sendIndex;
    if (!sendFocused) {
      sendPulse.stopAnimation();
      sendPulse.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(sendPulse, { toValue: 1, duration: 900, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(sendPulse, { toValue: 0, duration: 900, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [state.index, sendIndex]);

  // ضغط الزر المركزي — bounce سريع
  const bounceSend = () => {
    Animated.sequence([
      Animated.spring(sendScale, { toValue: 0.92, useNativeDriver: true, friction: 6, tension: 200 }),
      Animated.spring(sendScale, { toValue: 1, useNativeDriver: true, friction: 5, tension: 180 }),
    ]).start();
  };

  return (
    <LinearGradient
      colors={["#cca8842f", "#fff"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{
        paddingBottom: (insets.bottom || 6) + 2,
      }}
    >
      <View className="flex-row items-end justify-between px-5">
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const color = focused ? "#CBA984" : "#CBA98433";

          const onPress = () => {
            const e = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
            if (!focused && !e.defaultPrevented) navigation.navigate(route.name);
            if (route.name === "send") bounceSend();
          };

          // زر SEND (المركزي)
          if (route.name === "send") {
            // pulse ring style (يستخدم sendPulse)
            const ringScale = sendPulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.25] });
            const ringOpacity = sendPulse.interpolate({ inputRange: [0, 1], outputRange: [0.0, 0.22] });

            return (
              <TouchableOpacity key={route.key} onPress={onPress} activeOpacity={0.8} className="-mt-10 mb-6 items-center">
                <Animated.View
                  style={{
                    transform: [{ scale: sendScale }],
                  }}
                >
                  {/* pulse ring */}
                  {/* <Animated.View
                    pointerEvents="none"
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                      width: 86,
                      height: 86,
                      borderRadius: 43,
                      backgroundColor: "#CCA884",
                      opacity: ringOpacity,
                      transform: [{ scale: ringScale }],
                    }} 
                  /> */}
                  <View
                    style={{
                      width: 66,
                      height: 66,
                      borderRadius: 40,
                      backgroundColor: "#CCA884",
                      borderWidth: 8,
                      borderColor: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#000",
                      shadowOpacity: 0.15,
                      shadowRadius: 10,
                      shadowOffset: { width: 0, height: 6 },
                      elevation: Platform.OS === "android" ? 2 : 0,
                    }}
                  >
                    <SendIcon size={52} color="#000" />
                  </View>
                </Animated.View>
              </TouchableOpacity>
            );
          }

          // باقي التابس
          const Icon = ICONS[route.name];
          return (
            <TouchableOpacity key={route.key} onPress={onPress} activeOpacity={0.5} className="items-center py-1">
              <Animated.View
                style={{
                  transform: [{ scale: iconScales[index] }, { translateY: iconY[index] }],
                }}
              >
                <Icon size={36} color={color} />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
}
