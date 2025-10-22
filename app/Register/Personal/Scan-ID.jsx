import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 px-6 pt-5 bg-black">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-14">
          <TouchableOpacity
            onPress={() => router.push("/Register/Personal/Verification")}
          >
            <BackArrow/>
          </TouchableOpacity>
          <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
          <CustomIcon width={35} height={25} fill="#CCA884" />
        </View>

        {/* Title */}
        <Text className="text-white text-[36px] font-medium mb-2">
          {/* {" "} */}
          Scan Identity card
        </Text>
        <Text className="text-white text-[14px] font-regular mb-12">
          Secure Your Account with the document scan.
        </Text>

        {/* Placeholder Box */}
        <View className="bg-gray-100 w-[100%] h-[230px] rounded-md mt-12 mb-36 justify-center items-center">
          {/* <Text className="text-gray-400">
            [ Camera Preview / Upload Here ]
          </Text> */}
        </View>

        {/* Spacer */}
        {/* <View className="flex-1" /> */}

        {/* Next Button */}
        <TouchableOpacity
          className="rounded-full p-5 w-full justify-center items-center mb-6 bg-[#CCA884]"
          onPress={() => router.push("/Register/Personal/Verify-Face")}
        >
          <Text className="text-base font-regular text-[15px]">Capture </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
