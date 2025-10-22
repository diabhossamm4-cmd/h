// app/Register/Personal/Selfie-Capture-UI.jsx
import React from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import CustomIcon from "@/components/CustomIcon";

export default function SelfieCaptureUI() {
  const router = useRouter();
  const { height } = useWindowDimensions();

  // 🔧 تحكم سريع في شكل البيضاوي (أحدّ = أنحف وأطول)
  const ellipseW = 380;             // العرض (قلّل الرقم يخليه أنحف)
  const ellipseH = 480;             // الارتفاع (زوّد الرقم يخليه أطول)
  const borderR  = '50%';    // Ellipse حقيقي مش دائرة
  const bottomOffset = Math.max(height * 0.1, 90); // نزول لتحت زي التصميم

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 px-6 pt-5">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-2">
          <TouchableOpacity onPress={() => router.push("/Register/Personal/Verify-Face")}>
            <BackArrow  />
          </TouchableOpacity>

          <TouchableOpacity className="rounded-full px-3 py-1">
            <CustomIcon width={35} height={30} fill="#CCA884" />
          </TouchableOpacity>
        </View>

        {/* Oval area */}
        <View className="flex-1 relative">
          <View
            className="absolute left-1/2 -translate-x-1/2 bg-white"
            style={{
              width: ellipseW,
              height: ellipseH,
              bottom: bottomOffset,
              borderRadius: borderR, // 👈 يطلع Ellipse حقيقي
              borderWidth: 22,        // حافة أوضح
              borderColor: "#000",
            }}
          />
        </View>

        {/* Processing text */}
        <Text className="text-center text-white text-[14px] font-medium mb-12">
          Processing... this may take a few seconds.
        </Text>

        {/* Capture Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          className="bg-[#CBA984] rounded-full h-[56px] items-center justify-center mb-8 border border-white/20"
          onPress={() => router.push("/Register/Personal/Loading")}
        >
          <Text className="text-[15px] font-regular text-black">Capture</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
