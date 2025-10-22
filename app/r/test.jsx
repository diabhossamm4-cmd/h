import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FinalIntro() {
  const router = useRouter();

  // دالة reset intro
  const resetIntro = async () => {
    try {
      await AsyncStorage.removeItem("seenIntro");
      router.replace("/intro"); // يرجع المستخدم للـ Intro Slider
    } catch (error) {
      console.error("Error resetting intro:", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center pt-[100px] bg-white">
      {/* الصور المتراكبة */}
      <View className="w-[340px] h-[500px] bg-[#E0E0E0] rounded-2xl p-5 relative mb-5 items-center justify-center">
        <Text className="text-[28px] font-bold text-center mb-[300px] text-black">
          EASY BREEZY MONEY MANAGEMENT
        </Text>

        <Image
          source={require("@/assets/images/3a.gif")}
          className="absolute opacity-30"
          style={{
            width: 334,
            height: 334,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("@/assets/images/4a.gif")}
          className="absolute"
          style={{
            width: 274,
            height: 274,
            resizeMode: "contain",
          }}
        />
        <Text 
          className="text-[24px] text-center font-medium text-[#555]"
          style={{ lineHeight: 20 }}
        >
          Make sense of your money.{"\n"}Send it anytime, anywhere.
        </Text>
      </View>

      {/* Register + Login */}
      <View className="flex-row justify-between w-[340px] mb-[35px]">
        <TouchableOpacity
          className="w-[145px] h-[40px] rounded-[25px] border-2 border-[#E0D5C0] bg-[#CCA884] items-center justify-center flex-auto mx-0.5"
          onPress={() => router.push("/r/r/lo")}
        >
          <Text className="text-[15px] font-normal text-black">Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-[145px] h-[40px] rounded-[25px] border-2 border-[#E0D5C0] bg-[#CCA884] items-center justify-center flex-auto mx-0.5"
          onPress={() => router.push("/r/loading-login")}
        >
          <Text className="text-[15px] font-normal text-black">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Set up Passcode / Biometrics */}
      <TouchableOpacity
        className="w-[300px] h-[40px] rounded-[25px] border-2 border-[#E0D5C0] bg-[#fffcf5] items-center justify-center mt-0.5 mb-5"
        onPress={resetIntro}
      >
        <Text className="text-[15px] font-normal text-black">
          Set up Passcode / Biometrics
        </Text>
      </TouchableOpacity>
    </View>
  );
}