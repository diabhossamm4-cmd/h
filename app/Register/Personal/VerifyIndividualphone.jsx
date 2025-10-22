import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";

export default function VerifyPhone() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    setTimer(60);
    setOtp(["", "", "", "", "", ""]);
    console.log("Resending OTP...");
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // عدّل حسب وجود رأس الشاشة
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 bg-white px-6 pt-5 relative">
            <View className="flex-row items-center mb-6">
              <TouchableOpacity
                onPress={() => router.push("/Register/Personal/Accountdetails")}
              >
                <BackArrow />
              </TouchableOpacity>
            </View>

            <Text className="text-[36px] font-medium mb-3 text-black leading-tight">
              Verify Your Phone Number
            </Text>

            <View className="items-center mb-1">
              <Image
                source={require("@/assets/images/q.gif")}
                style={{ width: 222, height: 230 }}
              />
            </View>

            {/* OTP Input Fields with shadow */}
            <View className="flex-row justify-center mb-8 px-2">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  className="w-12 h-16 border rounded-xl text-center text-xl font-semibold text-black bg-white mx-1"
                  style={{
                    borderColor: "#D1D5DB", // gray-300
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  selectTextOnFocus
                />
              ))}
            </View>

            <Text className="text-center text-[#8E949A] text-medium text-[18px] leading-6 mb-8 px-4">
              We've sent a One-Time Password (OTP) to{"\n"} your phone number
              ending in XXXX.{"\n"}Please enter the code below to proceed.
            </Text>

            <View className="items-center mb-8">
              {timer > 0 ? (
                <Text className="text-gray-500 text-sm">
                  Resend code in {timer}s
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResendCode}>
                  <Text className="text-[#C19A6B] text-sm font-medium underline">
                    Resend Code
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex-1" />

            <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

            <TouchableOpacity
              className={`rounded-full p-5 w-full justify-center items-center mb-6 border ${
                isOtpComplete
                  ? "bg-[#cca88498] border-[#E0D5C0]"
                  : "bg-gray-100 border-gray-300"
              }`}
              onPress={() => {
                if (isOtpComplete) {
                  console.log("OTP:", otp.join(""));
                  router.push("/Register/Personal/AccountPassword");
                }
              }}
              disabled={!isOtpComplete}
            >
              <Text
                className={`text-[15px] font-regular ${
                  isOtpComplete ? "text-black" : "text-gray-500"
                }`}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
