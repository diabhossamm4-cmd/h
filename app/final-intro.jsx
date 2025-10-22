import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

export default function FinalIntro() {
  const router = useRouter();
  const { width } = useWindowDimensions(); // نستخدم أبعاد الشاشة لجعل التصميم متجاوبًا

  // تحديد عرض البطاقة والأزرار بناءً على عرض الشاشة
  const cardWidth = width * 0.9;
  const buttonsContainerWidth = width * 0.85;

  // دالة لإعادة عرض شاشات المقدمة (للتجربة)
  const resetIntro = async () => {
    try {
      await AsyncStorage.removeItem("seenIntro");
      router.replace("/intro");
    } catch (error) {
      console.error("Error resetting intro:", error);
    }
  };

  return (
    // تم تعديل الحاوية الرئيسية لتوسيط المحتوى بشكل صحيح
    <View className="flex-1 items-center justify-center bg-white px-5">
      
      {/* البطاقة الرئيسية */}
      <View
        className="bg-[#E0E0E0] rounded-2xl p-5 relative mb-8 items-center justify-around"
        // الأبعاد الآن متجاوبة وتعتمد على حجم الشاشة
        style={{ width: cardWidth, height: cardWidth * 1.4 }} 
      >
        <Text className="text-2xl font-bold text-center text-black px-4 mb-24">
          EASY BREEZY MONEY MANAGEMENT
        </Text>

        {/* الصور المتراكبة */}
        <Image
          source={require("@/assets/images/3a.gif")}
          className="absolute opacity-30"
          style={{
            width: cardWidth * 0.95, // حجم متجاوب
            height: cardWidth * 0.95,
            resizeMode: "contain",
          }}
        />
                <Image
          source={require("@/assets/images/mony.png")}
          className="absolute mb-24"
          style={{
            width: cardWidth * 0.45, // حجم متجاوب
            height: cardWidth * 0.45,
            resizeMode: "contain",
          }}
        />

        <Image
          source={require("@/assets/images/4a.gif")}
          className="absolute"
          style={{
            width: cardWidth * 0.7, // حجم متجاوب
            height: cardWidth * 0.7,
            resizeMode: "contain",
          }}
        />
        <Text
          className="text-lg text-center font-medium text-black px-4"
          style={{ lineHeight: 28 }} // تحسين تباعد الأسطر
        >
          Make sense of your money.{"\n"}Send it anytime, anywhere.
        </Text>
      </View>

      {/* حاوية الأزرار */}
      <View
        className="items-center"
        style={{ width: buttonsContainerWidth }}
      >
        {/* Register + Login */}
        <View className="flex-row justify-center w-full mb-4 gap-x-4">
          <TouchableOpacity
            // الأزرار الآن تأخذ مساحة متساوية تلقائيًا
            className="flex-1 h-[50px] rounded-full border-2 border-[#E0D5C0] bg-[#CCA884] items-center justify-center"
            onPress={() => router.push("/Register/Signup")}
          >
            <Text className="text-base font-regular text-black">Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 h-[50px] rounded-full border-2 border-[#E0D5C0] bg-[#CCA884] items-center justify-center"
            onPress={() => router.push("/r/loading-login")}
          >
            <Text className="text-base font-regular text-black">Login</Text>
          </TouchableOpacity>
        </View>

        {/* Set up Passcode / Biometrics */}
        <TouchableOpacity
          className="w-full h-[50px] rounded-full border-2 border-[#E0D5C0] bg-[#fffcf5] items-center justify-center"
          onPress={() => router.push("/(tabs)/home/h")} // تم تعديل المسار
        >
          <Text className="text-base font-regular text-black">
            Set up Passcode / Biometrics
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}