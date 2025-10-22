import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";

export default function Register() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Header */}
      <View className="flex-row items-center mb-12">
        <TouchableOpacity onPress={() => router.push("/final-intro")} className="pr-4">
          <BackArrow/>
        </TouchableOpacity>
        <ProgressDots stepsCount={5} currentStep={0} />
      </View>

      {/* Title */}
      <Text className="text-[28px] font-medium mb-12">Enter your email</Text>

      {/* Input Group */}
      <View className="mb-8">
        <Text className="text-[16px] font-medium text-black mb-2">Email</Text>
        <TextInput
          className="border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white shadow-sm"
          placeholder="Provide a valid email address"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text className="text-[12px] font-medium text-gray-500 mt-2">
          Provide a valid email address
        </Text>
      </View>

      {/* Spacer */}
      <View className="flex-1" />

      {/* Terms */}
      <Text className="text-[16px] font-medium text-gray-700 mb-6">
        By clicking “Register” you agree to our{" "}
        <Text className="underline font-bold text-black">Terms of Use</Text>{" "}
        and{" "}
        <Text className="underline font-bold text-black">Privacy Policy</Text>
      </Text>
          <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

      {/* Next Button */}
      <TouchableOpacity
        className="bg-[#cca88434] border border-[#E0D5C0] rounded-2xl h-[52px] justify-center items-center mb-10"
        onPress={() => router.push("/Register/verifyEmail")}
      >
        <Text className="text-[16px] font-medium text-black">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
