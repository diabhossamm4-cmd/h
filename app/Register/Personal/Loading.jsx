// app/Register/Personal/ID-Verification-Complete-UI.jsx
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

export default function IDVerificationCompleteUI() {
  const router = useRouter();

  // لو الاسم متغير، ابعته كـ prop أو param من الروتر
  const userName = "Hossam";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-12">
          <TouchableOpacity
            onPress={() => router.push("/Register/Personal/Scan-Face")}
          >
            <BackArrow />
          </TouchableOpacity>

          {/* 2 steps – الثاني Active */}
          <ProgressDots stepsCount={2} currentStep={2} />

          <TouchableOpacity className="rounded-full px-3 py-1">
            <CustomIcon width={30} height={20} />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="mt-8 mb-6">
          <Text className="text-[24px] font-medium  text-black">
            ID Verification Complete!
          </Text>
        </View>

        {/* Congrats line */}
        <Text className="text-[16px] font-regular text-black leading-6">
          Great job <Text className="font-bold">{userName}</Text>! Your KYC has
          been successfully submitted!
        </Text>

        {/* Illustration */}
        <View className="flex-1 items-center justify-center">
          <Image
            source={require("@/assets/images/loadin.png")} // حط الإيضاح المناسب هنا
            // className="w-[260px] h-[120px]"
            style={{
              width: 260,
              height: 260,
            }}
            resizeMode="contain"
          />
          <Text className="text-center text-[16px] font-medium  text-black mb-6">
            You're one step closer!
          </Text>
        </View>

        {/* Bottom text */}

        {/* Divider */}
        <View className="w-full h-[0.5px] bg-black mb-4" />
        <TouchableOpacity
          className="bg-[#CBA984] rounded-2xl h-[56px] items-center justify-center mb-8"
          onPress={() => router.push("/Register/Personal/Aboutyourself")}
          activeOpacity={0.85}
        >
          <Text className="text-[15px] font-regular text-black">Next</Text>
        </TouchableOpacity>
        {/* Next Button */}
        <TouchableOpacity
          className="bg-[#76a4bb] rounded-2xl h-[56px] items-center justify-center mb-8"
          onPress={() => router.push("/Register/Personal/Failure")}
          activeOpacity={0.85}
        >
          <Text className="text-[15px] font-regular  text-black">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
