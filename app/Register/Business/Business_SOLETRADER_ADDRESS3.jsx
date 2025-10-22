import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import { Ionicons } from "@expo/vector-icons";

// بيانات وهمية للعرض، المفروض إنها تيجي من الـstate أو الـcontext
const mockData = {
  businessName: "Hossam diab",
  country: "egybt",
  businessAddress: "Flat 1, Chai Place, 107 Hart Avenue",
  city: "cairo",
  postcode: "HA7 4EN",
};

export default function ConfirmBusinessInformation() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-5">
      <View className="flex-1">
        <TouchableOpacity onPress={() =>
              router.push("/Register/Business/Business_SOLETRADER_ADDRESS2")
            } className="mt-1 mb-6">
          <BackArrow/>
        </TouchableOpacity>

        {/* Title and Description */}
        <Text className="text-[36px] font-medium text-black mb-2">
          Confirm Business Information
        </Text>
        <Text className="text-[14px] font-regular mb-8">
          Confirm all details entered are correct. Relevant information refers
          to the place where business would take place on a day-to-day basis.
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}

          {/* Business Name Section */}
          <View className="mb-6">
            <Text className="text-[14px] font-medium text-gray-800 mb-3">
              Business Name
            </Text>
            <Text className="text-[14px] text-gray-600 font-regular">
              {mockData.businessName}
            </Text>
          </View>

          {/* Business Address Section */}
          <View className="mb-6">
            <Text className="text-[16px] font-medium text-gray-800 mb-2">
              Business Address
            </Text>
            <View className="w-full h-[0.5px] bg-gray-300 mb-4" />

            {/* Country */}
            <View className="mb-4">
              <Text className="text-[14px] text-gray-600">Country</Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.country}
              </Text>
            </View>

            {/* Business Address */}
            <View className="mb-4">
              <Text className="text-[14px] text-gray-600">
                Business Address
              </Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.businessAddress}
              </Text>
            </View>

            {/* City */}
            <View className="mb-4">
              <Text className="text-[14px] text-gray-600">City</Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.city}
              </Text>
            </View>

            {/* Post Code */}
            <View>
              <Text className="text-[14px] text-gray-600">Post Code</Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.postcode}
              </Text>
            </View>
          </View>
          <View className="mb-6">
            <Text className="text-[16px] font-medium text-gray-800 mb-2">
              Business Information
            </Text>
            <View className="w-full h-[0.5px] bg-gray-300 mb-4" />

            {/* Country */}
            <View className="mb-4">
              <Text className="text-[14px] text-gray-600">Country</Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.country}
              </Text>
            </View>

            {/* Business Address */}
            <View className="mb-4">
              <Text className="text-[14px] text-gray-600">
                Business Address
              </Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.businessAddress}
              </Text>
            </View>

            {/* City */}
            <View className="mb-4">
              <Text className="text-[14px] text-gray-600">City</Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.city}
              </Text>
            </View>

            {/* Post Code */}
            <View>
              <Text className="text-[14px] text-gray-600">Post Code</Text>
              <Text className="text-[16px] text-gray-400 font-regular">
                {mockData.postcode}
              </Text>
            </View>
          </View>

          
        </ScrollView>
        {/* Divider */}
        <View className="w-full h-[0.5px] bg-gray-300 mb-6" />

        {/* Finish Button */}
        <TouchableOpacity
          className="rounded-full p-5 w-full justify-center items-center mb-6 bg-[#cca884d9]"
        //   onPress={() => {
        //     // توجيه المستخدم إلى صفحة إنهاء التسجيل
        //     // router.push("/r/b/finish-screen");
        //   }}
                  onPress={() => router.push("/final-intro")}

        >
          <Text className="text-[15px] font-regular text-black">Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
