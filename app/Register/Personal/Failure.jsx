import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import CustomIcon from "@/components/CustomIcon";

export default function DocumentVerificationFailure() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity
            onPress={() => router.push("/Register/Personal/Loading")}
          >
            <BackArrow />
          </TouchableOpacity>
          <CustomIcon width={35} height={25} fill="#CCA884" />
        </View>

        {/* Title */}
        <Text className="text-[30px] font-medium text-black mb-3">
          Oops! We need some more info
        </Text>

        {/* Document Card */}
        <TouchableOpacity
          className="rounded-2xl justify-center items-center mb-3"
          onPress={() => console.log("Upload document")}
        >
          <Image
            source={require("@/assets/images/id-card.png")}
            style={{ width: 226, height: 110, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        {/* Description */}
        <Text className="text-[14px] text-black font-medium mb-1">
          We couldn't verify your documents automatically.
        </Text>
        <Text className="text-[14px] text-black font-medium mb-4">
          This might be because:
        </Text>

        {/* Why Did This Happen */}
        <Text className="text-[14px] text-black font-medium mb-3">
          Why Did This Happen?
        </Text>

        {/* Error List */}
        <View className="mb-3">
          <View className="flex-row items-center mb-2">
            <Text className="text-[14px]  text-black mr-2">•</Text>
            <Text className="text-[14px] font-medium text-black flex-1">
              Blurry or unreadable document 📄
            </Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-[14px] text-black mr-2">•</Text>
            <Text className="text-[14px] font-medium text-black flex-1">
              Incorrect or expired ID ❌
            </Text>
          </View>
          <View className="flex-row items-center mb-3">
            <Text className="text-[14px] text-black mr-2">•</Text>
            <Text className="text-[14px] font-medium text-black flex-1">
              Name mismatch between documents 🔄
            </Text>
          </View>
        </View>

        {/* Instructions */}
        <Text className="text-[14px] font-medium  text-black mb-8 leading-5">
          To proceed, please upload a valid proof of address and our team will
          manually review your submission and get back to you shortly.
        </Text>

        {/* Upload Box */}

        <TouchableOpacity
          className="rounded-2xl justify-center items-center mb-3"
          onPress={() => console.log("Upload document")}
        >
          <Image
            source={require("@/assets/images/G.png")}
            style={{ width: 226, height: 110, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        {/* Spacer */}
        <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

        {/* Next Button */}
        <TouchableOpacity
          className="rounded-full p-5 w-full justify-center items-center mb-6 bg-[#cca88433]"
          onPress={() => router.push("/Register/Personal/KYC")}
        >
          <Text className="text-[15px] font-regular ">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
