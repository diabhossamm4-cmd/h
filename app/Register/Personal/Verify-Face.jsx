// app/Register/Personal/Verify-Face-UI.jsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

export default function FaceVerificationUI() {
  const router = useRouter();
  const stepsCount = 2;
  const currentStep = 2;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5">

        {/* Header */}
        <View className="flex-row items-center justify-between mb-9">
          <TouchableOpacity onPress={() => router.push("/Register/Personal/Scan-ID")}>
            <BackArrow/>
          </TouchableOpacity>
          <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
          <CustomIcon width={35} height={25} fill="#CCA884" />
        </View>

        {/* Title + Subtitle */}
        <Text className="text-[36px] font-medium text-black mb-1">
          Face Verification
        </Text>
        <Text className="text-[14px] font-regular mb-10">
          Secure Your Account with Face Scan
        </Text>

        {/* Face Frame (مكبر + قوس معكوس) */}
        <View className="w-full h-[260px] items-center justify-center mb-12 relative">
          {/* Corners أكبر شوية */}
          <View className="absolute left-14 top-1 w-[100px] h-[100px]"
            style={{ borderLeftWidth: 3, borderTopWidth: 3, borderColor: "#000" }} />
          <View className="absolute right-14 top-1 w-[100px] h-[100px]"
            style={{ borderRightWidth: 3, borderTopWidth: 3, borderColor: "#000" }} />
          <View className="absolute left-14 bottom-1 w-[100px] h-[100px]"
            style={{ borderLeftWidth: 3, borderBottomWidth: 3, borderColor: "#000" }} />
          <View className="absolute right-14 bottom-1 w-[100px] h-[100px]"
            style={{ borderRightWidth: 3, borderBottomWidth: 3, borderColor: "#000" }} />

          {/* دليل الوجه (رأس رمادي + قوس الظهر معكوس لأعلى) */}
          <View className="items-center">
            <View
              className="w-[62px] h-[62px] rounded-full"
              style={{ borderWidth: 2, borderColor: "#000" }}
            />
            {/* القوس المعكوس: rounded-t-full + borderTopWidth */}
            <View
              className="w-[100px] h-[68px] mt-5 rounded-t-full"
              style={{ borderTopWidth: 3, borderColor: "#000" }}
            />
          </View>
        </View>

        {/* Hint */}
        <Text className="text-center text-[14px] font-medium text-black mb-28">
          Scan your face to complete the verification process.
        </Text>

        {/* Button */}
        <TouchableOpacity
          className="bg-[#cca88498] rounded-full h-[56px] items-center justify-center mb-4"
          onPress={() => router.push("/Register/Personal/Scan-Face")}
          activeOpacity={0.85}
        >
          <Text className="text-[15px] font-regular text-black">Scan my face</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
