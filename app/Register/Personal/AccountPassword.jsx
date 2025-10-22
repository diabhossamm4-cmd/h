import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressDots from "@/components/ProgressDots";
import HideIcon from "@/components/HideIcon";

export default function CreatePasswordScreen() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const router = useRouter();
  const stepsCount = 5;
  const currentStep = 4;

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Progress Dots */}
      <View className="items-center mt-4 mb-8 pt-4">
        <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
      </View>

      {/* Title */}
      <Text className="text-[36px] font-medium text-black mb-10">
        Create Password
      </Text>

      {/* Password Input */}
      <View
        className="w-full flex-row items-center px-4 mb-4 rounded-2xl bg-white"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          elevation: 2,
        }}
      >
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!showPassword}
          className="flex-1 text-base py-4"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <HideIcon
            width={24}
            height={24}
            color={showPassword ? "#C19A6B" : "#AAA"}
          />
        </TouchableOpacity>
      </View>

      {/* Repeat Password Input */}
      <View
        className="w-full flex-row items-center px-4 mb-10 rounded-2xl bg-white"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          elevation: 2,
        }}
      >
        <TextInput
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeholder="Repeat Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!showRepeatPassword}
          className="flex-1 text-base py-4"
        />
        <TouchableOpacity
          onPress={() => setShowRepeatPassword(!showRepeatPassword)}
        >
          <HideIcon color={showRepeatPassword ? "#C19A6B" : "#AAA"} />
        </TouchableOpacity>
      </View>

      <View className="flex-1" />
      <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

      {/* Buttons */}
      <TouchableOpacity
        className="w-full py-4 rounded-2xl mb-4 bg-[#cca88433]"
        onPress={() => router.push("/Register/Personal/KYC")}
      >
        <Text className="text-center text-[15px] font-regular">
          Continue to Verification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="w-full py-4 rounded-2xl mb-6 bg-[#cca88499]">
        <Text className="text-center text-[15px] font-regular">
          Explore Jaudi
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
