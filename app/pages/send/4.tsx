import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

export default function PurposeIncomeScreen() {
  const router = useRouter();

  // الحالات لتخزين الاختيارات
  const [sourceOfIncome, setSourceOfIncome] = useState("");
  const [purposeOfRemittance, setPurposeOfRemittance] = useState("");

  const handleNext = () => {
    if (!sourceOfIncome || !purposeOfRemittance) {
      Alert.alert(
        "Missing Information",
        "Please provide both the source of income and purpose of remittance."
      );
      return;
    }
    // انتقل إلى الخطوة التالية
    router.push("/pages/send/5");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="px-6 pt-5">
          <View className="flex-row items-center justify-between mb-14">
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow />
            </TouchableOpacity>
            {/* يمكن ضبط عدد الخطوات والخطوة الحالية حسب الترتيب الفعلي */}
            <ProgressDots stepsCount={6} currentStep={4} />
            <CustomIcon />
          </View>

          {/* العنوان والنص التعريفي */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-black mb-2">
              Purpose and{"\n"}Income Source
            </Text>
            <Text className="text-sm font-normal text-gray-600">
              Enter key details for your transfer before proceeding.
            </Text>
          </View>

          {/* زر اختيار مصدر الدخل */}
          <TouchableOpacity
            onPress={() => {
              // هنا يمكن فتح مودال أو شاشة اختيار مصدر الدخل
              // وللتجربة نضع قيمة ثابتة
              setSourceOfIncome("Salary");
            }}
            className="bg-white rounded-2xl px-5 py-4 mb-4 shadow-sm border border-gray-200"
            activeOpacity={0.7}
          >
            <Text className="text-base font-medium text-black">
              {sourceOfIncome || "Source of Income"}
            </Text>
          </TouchableOpacity>

          {/* زر اختيار غرض التحويل */}
          <TouchableOpacity
            onPress={() => {
              // هنا يمكن فتح مودال أو شاشة اختيار الغرض من التحويل
              setPurposeOfRemittance("Family Support");
            }}
            className="bg-white rounded-2xl px-5 py-4 mb-4 shadow-sm border border-gray-200"
            activeOpacity={0.7}
          >
            <Text className="text-base font-medium text-black">
              {purposeOfRemittance || "Purpose of Remittance"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* زر Next أسفل الصفحة */}
      <View className="px-6">
        <View className="w-full h-[1px] bg-black mb-2" />
        <TouchableOpacity
          onPress={handleNext}
          className="rounded-full py-4 items-center justify-center mt-4 mb-6"
          style={{ backgroundColor: "#CCA88499" }}
          activeOpacity={0.4}
        >
          <Text className="text-base font-regular text-black">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
