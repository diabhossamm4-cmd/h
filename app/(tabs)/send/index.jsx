import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SendMoneyDetails() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5 pt-4" contentContainerClassName="pb-24">
        <Text className="text-[36px] font-bold leading-[40px] mb-6">Send Money{"\n"}Details</Text>

        <Text className="text-[18px] font-semibold mb-2">Send Amount</Text>
        <View className="rounded-2xl border border-[#E6E6E6] shadow-sm px-4 py-4 mb-4 flex-row items-center justify-between">
          <TextInput className="flex-1 text-[18px]" defaultValue="15" keyboardType="numeric" />
          <Text className="text-[18px]">USD</Text>
        </View>

        <Text className="text-[18px] font-semibold mb-2">Receiver gets</Text>
        <View className="rounded-2xl border border-[#E6E6E6] shadow-sm px-4 py-4 mb-8 flex-row items-center justify-between">
          <TextInput className="flex-1 text-[18px]" defaultValue="15" keyboardType="numeric" />
          <Text className="text-[18px]">USD</Text>
        </View>

        <Text className="text-[18px] font-semibold mb-2">
          How will the receiver get the money
        </Text>
        <View className="rounded-2xl border border-[#E6E6E6] shadow-sm px-4 py-4 mb-10">
          <Text className="text-black/50">Select Type</Text>
        </View>

        <View className="w-full h-[0.5px] bg-black/10 mb-4" />

        <TouchableOpacity className="bg-[#EFE6DB] rounded-2xl h-[56px] items-center justify-center">
          <Text className="text-[16px]">Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
