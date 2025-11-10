import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import Bag from "@/components/buss/bag";
import { Ionicons } from "@expo/vector-icons";



export default function SelectAccountScreen() {
  const router = useRouter();

  const stepsCount = 5;
  const currentStep = 2;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-1 bg-white px-6 pt-6 relative">
          {/* Back Button + Progress */}
          <View className="flex-row items-center mb-6">
            <TouchableOpacity
              onPress={() => router.push("/Register/AccountDetails")}
            >
              <BackArrow/>
            </TouchableOpacity>

            <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
          </View>
          <View className="flex-row justify-center mb-6"></View>
          <Text className="text-black text-[36px] font-medium mb-16">
            Select Account
          </Text>
          {/* Personal Account   */}
          <TouchableOpacity
            className="w-full flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 mb-8"
            onPress={() => router.push("/Register/Personal/Accountdetails")}
          >
            <View className="w-14 h-14 rounded-full bg-gray-700 items-center justify-center mr-4">
              {/* <Person width={23} height={21} strokeColor="#000" /> */}
              <Ionicons name="person" size={30} color="#fff" />
            </View>
            <View className="flex-1">
              <Text className="text-[14px] font-bold text-base mb-1">
                Personal
              </Text>
              <Text className="font-regular text-sm leading-5">
                Send, spend, and save money{"\n"}globally with ease.
              </Text>
            </View>
            <Text className="text-black-500 text-2xl">›</Text>
          </TouchableOpacity>
          {/* Business Account   */}
          <TouchableOpacity
            className="w-full flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-4"
            onPress={() => router.push("/Register/Business/Business_TYPE")}
          >
            <View className="w-14 h-14 rounded-full bg-[#c3a68d] items-center justify-center mr-4">
              <Bag width={33} height={29} strokeColor="#010101" />
            </View>
            <View className="flex-1">
              <Text className="text-black font-bold text-base mb-1">
                Business
              </Text>
              <Text className="font-regular text-sm leading-5">
                Manage payments and transfers {"\n"} for your business worldwide
              </Text>
            </View>
            <Text className="text-black-500 text-2xl">›</Text>
          </TouchableOpacity>
        </View>

        <View className="px-6 mt-auto">
          <Text className="text-[16px] font-medium leading-5">
            By selecting an account type, you agree to our{" "}
            <Text className="underline">Use Policy.</Text> Using a personal
            account for Business Purposes is forbidden.
          </Text>
        </View>

        <View className="w-full h-[1px] bg-gray-700 mt-10 mb-20" /> 
      </ScrollView>
    </SafeAreaView>
  );
}
