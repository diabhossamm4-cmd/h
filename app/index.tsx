import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIntro = async () => {
      try {
        const seenIntro = await AsyncStorage.getItem("seenIntro");
        setTimeout(() => {
          if (seenIntro === "true") {
            router.replace("./final-intro"); // لو شاف الانترو قبل كده
          } else {
            router.replace("./intro"); // أول مرة
          }
          setLoading(false);
        }, 7000); // وقت الـ Splash
      } catch (e) {
        console.log("Error checking intro:", e);
        router.replace("./intro");
      }
    };
    checkIntro();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-[#CCA884]">
        {/* Centered GIF */}
      <Image className="mb-14"
        source={require("@/assets/images/12.gif")}
        style={{ width: 190, height: 190 }}
        resizeMode="contain"
      />
      
      {/* Logo positioned at the bottom */}
      <View className="bottom-16 w-full items-center">
        <Image
          source={require("@/assets/icons/jau2.png")}
          style={{ width: 130, height: 50 }}
          resizeMode="contain"
        />
      </View>
        {/* <Text className="text-[44px] font-mediam pt-[290px]">jaudi</Text> */}
      </View>
    );
  }

  return null;
}