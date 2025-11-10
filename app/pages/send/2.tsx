import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

// Type للبيانات اللي جاية من الشاشة السابقة
type RecipientData = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  country: {
    name: string;
  };
};

export default function ConfirmDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // البيانات اللي جاية من الشاشة السابقة
  // في الحقيقة هتيجي من params، دي بيانات تجريبية
  const recipientData: RecipientData = {
    firstName: "Hossam",
    lastName: "diab",
    mobileNumber: "+",
    email: "hos@Gmail.com",
    country: {
      name: "United Kingdom"
    }
  };

  const stepsCount = 6;
  const currentStep = 2;

  const handleEdit = () => {
    router.back(); // رجوع للشاشة السابقة للتعديل
  };

  const handleNext = () => {
    console.log("Recipient confirmed:", recipientData);
    router.push("/pages/send/3"); // انتقل للشاشة التالية
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex-1">
          <View className="px-6 pt-5">
            {/* Header - نفس الهيدر بالظبط */}
            <View className="flex-row items-center justify-between mb-14">
              <TouchableOpacity onPress={() => router.back()}>
                <BackArrow />
              </TouchableOpacity>
              <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
              <CustomIcon />
            </View>

            {/* Title */}
            <Text className="text-4xl font-medium text-black mb-2">
              Confirm their details
            </Text>
            <Text className="text-sm font-regular text-gray-600 mb-8">
              Review recipient details below
            </Text>
          </View>

          {/* Details Card */}
          <View className="px-6 mt-6">
            <View className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
              {/* Edit Button */}
              <View className="flex-row justify-end items-center px-4 py-4 border-b border-gray-100">
                <TouchableOpacity
                  onPress={handleEdit}
                  className="flex-row items-center gap-2"
                  activeOpacity={0.7}
                >
                  <Feather name="edit-2" size={12} color="#CCA884" />
                  <Text className="text-sm font-medium" style={{ color: "#CCA884" }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Details Rows */}
              <View>
                <DetailRow
                  label="Recipient Name"
                  value={`${recipientData.firstName} ${recipientData.lastName}`}
                />
                <DetailRow
                  label="Mobile Number"
                  value={recipientData.mobileNumber}
                />
                <DetailRow
                  label="Email Address"
                  value={recipientData.email}
                />
                <DetailRow
                  label="Region"
                  value={recipientData.country.name}
                  isLast={true}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Section - نفس الـ style بالظبط */}
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

// Component للصف الواحد من التفاصيل
type DetailRowProps = {
  label: string;
  value: string;
  isLast?: boolean;
};

function DetailRow({ label, value, isLast = false }: DetailRowProps) {
  return (
    <View
      className={`flex-row items-center justify-between px-6 py-5 ${
        !isLast ? "border-b border-gray-100" : ""
      }`}
    >
      <Text className="text-base text-gray-600">{label}</Text>
      <Text className="text-base font-medium text-black text-right flex-1 ml-4">
        {value}
      </Text>
    </View>
  );
}