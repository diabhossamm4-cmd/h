import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

export default function UploadDocument() {
  const router = useRouter();

  const stepsCount = 2;
  const currentStep = 1;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-14">
          <TouchableOpacity
            onPress={() => router.push("/Register/Personal/KYC")}
          >
            <BackArrow/>
          </TouchableOpacity>
          <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
          <CustomIcon  />
        </View>

        {/* Title */}
        <Text className="text-[36px] font-medium text-black mb-20">
          Upload Document
        </Text>

        {/* Upload Box */}
        <TouchableOpacity
          className="rounded-2xl h-[180px] justify-center items-center mb-12"
          onPress={() => console.log("Upload document")}
        >
          <Image
            source={require("@/assets/images/G.png")}
            style={{ width: 330, height: 200, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        {/* Info */}
        <Text className="text-[16px] text-black font-medium mb-2">
          Accepted File Formats: (JPEG, PNG, PDF, etc.)
        </Text>
        <Text className="text-[16px] font-regular text-black mb-28">
          Max File Size: 5MB
        </Text>

        {/* Spacer */}
        {/* <View className="flex-1" /> */}

        {/* Next Button */}
        <TouchableOpacity
          className="rounded-full p-5 w-full justify-center items-center mb-6 bg-[#CCA884]"
          onPress={() => router.push("/Register/Personal/Scan-ID")}
        >
          <Text className="text-base font-regular text-[15px]">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
