import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
// باقي الاستيرادات...

export default function SuccessScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/pages/send/8"); // ضع هنا اسم الشاشة التي تريد التحويل إليها
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* ضع هنا مكونات الدائرة أو الرسوم الخاصة بك */}
      <View
        style={{
          width: 320,
          height: 320,
          borderRadius: 160,
          // backgroundColor: "#CCA884",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* هنا عنصر السهم أو النصوص المناسبة (يفضل svg أو صورة للشكل الاحترافي) */}

        <Image
          source={require("@/assets/images/sends.gif")}
          // className="absolute"
          style={{
            resizeMode: "contain",
            width: "100%",
            
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 28,
          marginTop: 64,
          color: "#222",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        You’ve successfully sent {"\n"}£30 to Harris Moore
      </Text>
    </View>
  );
}
