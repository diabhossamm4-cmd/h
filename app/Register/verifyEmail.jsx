import BackArrow from "@/components/BackArrow";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function VerifyEmailScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#cca88499] px-6 pt-12">
      {/* Back Button */}
      <TouchableOpacity
        className="absolute top-12 left-5"
        onPress={() => router.push("/Register/Signup")}
      >
        <BackArrow />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-[36px] font-medium text-black mt-24 mb-10">
        An email is on its{"\n"}way to you
      </Text>

      {/* Image */}
      <Image
        source={require("@/assets/images/maill.png")}
        className="self-center mb-8"
        style={{
          width: 160,
          height: 140,
          resizeMode: "contain",
        }}
        resizeMode="contain"
      />

      {/* Description */}
      <Text className="text-[18px] font-medium text-center text-black leading-6 mb-10">
        We’ve sent a verification link to your email address:{" "}
        <Text className="font-medium">user@jaudi.com</Text>. Please click the
        link in the email to verify your account and continue.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        className="bg-white rounded-2xl py-3 items-center w-full mb-4"
        onPress={() => router.push("/final-intro")}
      >
        <Text className="text-black text-[15px] font-regular">Open email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-black rounded-2xl py-3 items-center w-full mb-12"
        onPress={() => router.push("/(auth)/r/ad")}
      >
        <Text className="text-white text-[15px] font-regular">
          Resend email
        </Text>
      </TouchableOpacity>

      {/* Spacer pushes divider + Next button to bottom */}
      <View className="flex-1" />

      {/* Divider */}
      <View className="w-full h-[0.5px] bg-black mb-6" />

      {/* Next Button */}
      <TouchableOpacity
        className="bg-white rounded-full py-3 items-center w-full mb-10"
        onPress={() => router.push("/Register/AccountDetails")}
      >
        <Text className="text-black text-[15px] font-regular">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
