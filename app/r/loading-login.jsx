import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    // هنا تحط أي لوجيك (زي check token, fetch data ... إلخ)
    const timer = setTimeout(() => {
      router.replace("/r/login"); // يوديك على صفحة اللوجين
    }, 2000); // بعد ثانيتين

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/images/coin.gif")}
        style={{ width: 256, height: 256, marginBottom: 20 }}
        // resizeMode="contain"
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    color: "#444",
  },
});
