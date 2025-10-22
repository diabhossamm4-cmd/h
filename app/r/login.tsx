import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HideIcon from "@/components/HideIcon";
import AwesomeAlert from "react-native-awesome-alerts";
import * as Animatable from "react-native-animatable";

// 🔐 Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export default function Login() {
  const router = useRouter();

  // ✅ تحديد أنواع البيانات مع TypeScript
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ حالة التنبيهات المخصصة
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");

  // دالة لعرض الـ Alert المخصص
  const showMyAlert = (title: string, message: string) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const hideMyAlert = () => {
    setAlertVisible(false);
  };

  // 🔐 دالة تسجيل الدخول باستخدام Firebase Authentication
  const handleLogin = async () => {
    if (!email || !password) {
      showMyAlert("Warning", "Please enter your email and password");
      return;
    }
    if (password.length < 8) {
      showMyAlert(
        "Short password",
        "Password must be at least 8 characters long."
      );
      return;
    }

    setLoading(true);
    try {
      // تسجيل الدخول عبر Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // showMyAlert("تم", "تم تسجيل الدخول بنجاح ✅");
      // الانتقال إلى الشاشة التالية
      router.push("/(tabs)/home/h");
    } catch (error: any) {
      console.log("Login Error:", error);
      let errorMessage = "An error occurred while logging in.";

      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email format";
          break;
        case "auth/user-not-found":
          errorMessage = "This email is not registered with us";
          break;
        case "auth/wrong-password":
        case "auth/invalid-credential":
          errorMessage = "Incorrect password";
          break;
        // case "auth/too-many-requests":
        //   errorMessage = "تم حظر الحساب مؤقتًا بسبب محاولات كثيرة، حاول لاحقًا";
        //   break;
      }

      showMyAlert("error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={5} // المسافة الإضافية بين الكيبورد والعنصر
    >
      <View className="flex-1 justify-center items-center bg-white">
        {/* البطاقة */}
        <View className="bg-white rounded-xl p-6 w-[95%]">
          {/* العنوان */}
          <Text className="text-[36px] font-[500] text-center mb-5">
            Log in
          </Text>

          {/* الشعار */}
          <View className="flex-row items-center justify-center mb-12">
            <Image
              source={require("@/assets/images/jau.png")}
              style={{
                width: 167,
                height: 47,
                resizeMode: "contain",
                marginRight: 15,
              }}
            />
            <Text className="text-[16px] font-bold text-center">
              WE MAKE{"\n"}MONEY MOVE
            </Text>
          </View>

          {/* البريد الإلكتروني */}
          <Text className="text-[16px] font-medium mb-2">Email</Text>
          <TextInput
            className="border border-[#e9d7c4] rounded-[15px] p-4 mb-4 text-[17px] bg-white shadow-sm"
            placeholder="Enter your email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* كلمة المرور */}
          <Text className="text-[16px] font-medium mb-2">Password</Text>
          <View className="flex-row items-center border border-[#e9d7c4] rounded-[15px] pr-2 mb-4 bg-white shadow-sm">
            <TextInput
              className="flex-1 p-4 text-[17px]"
              placeholder="Enter your password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              className="p-1"
              onPress={() => setShowPassword(!showPassword)}
            >
              <HideIcon color={showPassword ? "#C19A6B" : "#AAA"} />
            </TouchableOpacity>
          </View>

          {/* نسيان كلمة المرور */}
          <TouchableOpacity>
            <Text className="text-center text-[16px] text-[#8E949A] font-medium mt-5 mb-5">
              Did you forget your password?
            </Text>
          </TouchableOpacity>

          {/* زر تسجيل الدخول */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            className={`rounded-full justify-center items-center h-14 w-full border border-[#E0D5C0] mt-5 mb-7 ${
              loading ? "bg-[#e0d5c060]" : "bg-[#cca88433]"
            }`}
          >
            <Text className="text-[15px] font-semibold text-black">
              {loading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>

          {/* الفاصل */}
          <View className="flex-row items-center mb-5">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-2 font-regular text-[#313131] text-[14px]">
              Or login with
            </Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* تسجيل الدخول بالسوشيال */}
          <View className="flex-row justify-center mb-8">
            <TouchableOpacity className="mx-3">
              <Image
                source={require("@/assets/icons/facebook.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="mx-7">
              <Image
                source={require("@/assets/icons/google.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/final-intro")}
              className="mx-3"
            >
              <Image
                source={require("@/assets/icons/apple.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </View>

          {/* إنشاء حساب جديد */}
          <View className="flex-row justify-center items-center mb-2">
            <Text className="text-center text-gray-600 font-regular text-[18px]">
              Don’t have an account?{" "}
            </Text>
          </View>

          <View className="flex-row underline justify-center items-center">
            <TouchableOpacity onPress={() => router.push("/Register/Signup")}>
              <Text className="text-[18px] underline font-medium">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🔔 الـ Alert المخصص */}
        <Animatable.View animation="zoomIn" duration={400}>
          <AwesomeAlert
            show={alertVisible}
            showProgress={false}
            title={alertTitle}
            message={alertMessage}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="OKAY"
            confirmButtonColor="#C19A6B"
            onConfirmPressed={hideMyAlert}
            titleStyle={{ fontSize: 22, fontWeight: "bold", color: "#333" }}
            messageStyle={{
              fontSize: 18,
              fontWeight: "medium",
              color: "#555",
              marginTop: 5,
            }}
            contentContainerStyle={{ borderRadius: 20 }}
            overlayStyle={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          />
        </Animatable.View>
      </View>
    </KeyboardAwareScrollView>
  );
}
