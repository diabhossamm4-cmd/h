import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import Bag from "@/components/buss/bag";
import Person2 from "@/components/buss/person2";
import Person from "@/components/buss/person";

export default function WhatsYourPosition() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity
            onPress={() => router.push("/Register/select-account")}
          >
            <BackArrow />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text className="text-[36px] font-medium text-black mb-3">
          What's your position?
        </Text>

        {/* Subtitle */}
        <Text className="text-[14px] font-Regular text-black mb-14">
          Tell us about your role in the business.
        </Text>

        {/* Position Options */}
        <View className="mb-6">
          {/* Director Option */}
          <TouchableOpacity
            className="flex-row items-center p-4 rounded-2xl mb-6 border border-gray-200 bg-gray-50"
            onPress={() => router.push("/Register/Business/Aboutyourself")}
          >
            {/* Icon Circle */}
            <View className="w-14 h-14 rounded-full bg-[#CCA884] items-center justify-center mr-4">
              <Bag width={23} height={19} strokeColor="#010101" />
            </View>

            {/* Text Content */}
            <View className="flex-1">
              <Text className="text-[12px] text-black font-bold mb-1">
                Director
              </Text>
              <Text className="text-[10px] text-black font-regular mb-1">
                I am a company director.
              </Text>
            </View>

            {/* Arrow */}
            <Text className="text-gray-400 text-xl">›</Text>
          </TouchableOpacity>

          {/* Employee Option */}
          <TouchableOpacity
            className="flex-row items-center p-4 rounded-2xl mb-6 border border-gray-200 bg-gray-50"
            onPress={() => router.push("/Register/Business/Aboutyourself")}
          >
            {/* Icon Circle */}
            <View className="w-14 h-14 rounded-full bg-[#CCA884] items-center justify-center mr-4">
              <Person2 width={23} height={21} strokeColor="#000" />
            </View>

            {/* Text Content */}
            <View className="flex-1">
              <Text className="text-[12px] text-black font-bold mb-1">
                Employee
              </Text>
              <Text className="text-[10px] text-black font-regular mb-1">
                I am an employee or associate.
              </Text>
            </View>

            {/* Arrow */}
            <Text className="text-gray-400 text-xl">›</Text>
          </TouchableOpacity>

          {/* Owner or Shareholder Option */}
          <TouchableOpacity
            className="flex-row items-center p-4 rounded-2xl mb-4 border border-gray-200 bg-gray-50"
            onPress={() => router.push("/Register/Business/Aboutyourself")}
          >
            {/* Icon Circle */}
            <View className="w-14 h-14 rounded-full bg-[#CCA884] items-center justify-center mr-4">
              <Person width={23} height={21} strokeColor="#000" />
            </View>

            {/* Text Content */}
            <View className="flex-1">
              <Text className="text-[12px] text-black font-bold mb-1">
                Owner or Shareholder
              </Text>
              <Text className="text-[10px] text-black font-regular mb-1">
                I run my own business or have shares in one.
              </Text>
            </View>

            {/* Arrow */}
            <Text className="text-gray-400 text-xl">›</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View className="flex-1" />
      </View>
    </SafeAreaView>
  );
}
