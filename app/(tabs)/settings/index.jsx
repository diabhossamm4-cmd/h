import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Row({ title }) {
  return (
    <TouchableOpacity className="bg-[#F5F5F5] rounded-2xl px-4 py-5 mb-3 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View className="w-12 h-12 rounded-full bg-[#E8D9C6] mr-3" />
        <Text className="text-[16px]">{title}</Text>
      </View>
      <Text>›</Text>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5 pt-6" contentContainerClassName="pb-24">
        <Text className="text-[40px] font-bold mb-6">Settings</Text>

        <Text className="text-[22px] font-bold mb-2">Manage Account</Text>
        <View className="w-full h-[1px] bg-black/10 mb-4" />
        <Row title="Personal Details" />
        <Row title="Privacy & Security" />
        <Row title="Payment Methods" />

        <Text className="text-[22px] font-bold mt-6 mb-2">Other Account Actions</Text>
        <View className="w-full h-[1px] bg-black/10 mb-4" />
        <Row title="Delete Account" />

        <Text className="text-[22px] font-bold mt-6 mb-2">Other</Text>
        <View className="w-full h-[1px] bg-black/10 mb-4" />
        <Row title="Language" />
      </ScrollView>
    </SafeAreaView>
  );
}
