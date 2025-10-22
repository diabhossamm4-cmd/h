import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";

export default function VerificationIntro() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6 pt-5 bg-white">
          {/* Header */}
          <View className="flex-row items-center mb-12">
            {/* <TouchableOpacity onPress={() => router.back()}>
              <BackArrow width={40} height={30} color="#C19A6B" />
            </TouchableOpacity>
            <ProgressDots stepsCount={stepsCount} currentStep={currentStep} /> */}
          </View>

          {/* Title */}
          <Text className="text-[34px] font-medium text-black mb-14 leading-tight">
            Let’s get you verified
          </Text>

          {/* Description */}
          <Text className="text-[16px] font-medium text-black mb-10 leading-6">
            To keep your account safe and make{"\n"}sure your money-sending is
            as smooth{"\n"} as can be, we need to verify your identity.{"\n"}It
            takes just a few minutes!
          </Text>

          {/* Image */}
          <View className="items-center mb-10">
            <TouchableOpacity
              className="rounded-full p-5 w-full justify-center items-center mb-6 bg-[#ffffff] "
              onPress={() => router.push("/r/r/v")}
            >
              <Image
                source={require("@/assets/images/id-card.png")}
                style={{ width: 220, height: 140, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </View>

          {/* What to Expect */}
          <Text className="text-[14px] font-bold text-black mb-4">
            What to Expect
          </Text>
          <Text className="text-[14px] font-regular text-black mb-3 leading-6">
            Step 1: Upload a government-issued ID 📸
          </Text>
          <Text className="text-[14px] font-regular text-black leading-6">
            Step 2: Take a live selfie for face verification 🤳
          </Text>

          {/* Spacer */}
          <View className="flex-1" />

          {/* Divider */}
          <View className="w-full h-[0.5px] bg-black mb-6" />

          {/* Next Button */}
          <TouchableOpacity
            className="rounded-full p-5 w-full justify-center items-center mb-6 bg-[#cca88433] border border-[#E0D5C0]"
            onPress={() => router.push("/Register/Personal/Verification")}
          >
            <Text className="text-base font-regular text-black">Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
