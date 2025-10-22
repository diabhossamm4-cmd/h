import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "@/components/BackArrow";
import { useRouter } from "expo-router";

const INDUSTRIES = [
  { id: "retail", name: "Retail" },
  { id: "tech", name: "Technology" },
  { id: "food", name: "Food & Beverage" },
  // أضف حسب الحاجة
];

const BUSINESS_SIZES = [
  { id: "0-1", name: "0–1" },
  { id: "2-10", name: "2–10" },
  { id: "11-50", name: "11–50" },
  // أضف حسب الحاجة
];

export default function BusinessInfo() {
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [size, setSize] = useState(BUSINESS_SIZES[0]);
  const [website, setWebsite] = useState("");
  const [isIndustryModalOpen, setIndustryModalOpen] = useState(false);
  const [isSizeModalOpen, setSizeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = INDUSTRIES.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSizes = BUSINESS_SIZES.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleIndustrySelect = (item) => {
    setIndustry(item);
    setIndustryModalOpen(false);
    setSearchQuery("");
  };

  const handleSizeSelect = (item) => {
    setSize(item);
    setSizeModalOpen(false);
    setSearchQuery("");
  };

  const isFormValid = true; // لأن الحقول الاختيارية ويمكن تعديل حسب شروطك
  const router = useRouter();

  const renderItem = (item, onSelect) => (
    <TouchableOpacity
      className="py-4 border-b border-gray-100"
      onPress={() => onSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-5">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        className="flex-1"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() =>
              router.push("/Register/Business/Business_SOLETRADER_ADDRESS")
            }
            className="mb-6"
          >
            <BackArrow />
          </TouchableOpacity>

          <Text className="text-[36px] font-medium mb-2">
            Business Information
          </Text>
          <Text className="text-[14px] font-regular mb-6">
            This information will be used to verify your business and your
            account.
          </Text>

          {/* Industry dropdown */}
          <Text className="text-[16px] font-medium mb-2">Industry</Text>
          <TouchableOpacity
            onPress={() => setIndustryModalOpen(true)}
            className="bg-white border border-gray-300 rounded-lg p-4 mb-6 shadow-sm"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-400">{industry.name}</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          {/* Website Input */}
          <Text className="text-[15px] font-medium mb-2">
            Provide online website link if present (Optional)
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-white text-gray-800"
            placeholder="Enter your website URL"
            placeholderTextColor="#999"
            value={website}
            onChangeText={setWebsite}
            autoCapitalize="none"
            keyboardType="url"
          />

          {/* Business Size dropdown */}
          <Text className="text-[16px] font-medium mb-2">Business Size</Text>
          <TouchableOpacity
            onPress={() => setSizeModalOpen(true)}
            className="bg-white border border-gray-300 rounded-lg p-4 mb-8 shadow-sm"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-800">{size.name}</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </View>
          </TouchableOpacity>
        </ScrollView>
        {/* Spacer */}
        <View className="flex-1 mb-9" />

        {/* Divider */}
        <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

        {/* Next Button */}
        <TouchableOpacity
          disabled={!isFormValid}
          onPress={() => {
            if (isFormValid) {
              router.push("/Register/Business/Business_SOLETRADER_ADDRESS3");
            }
          }}
          className={`rounded-full p-5 w-full justify-center items-center mb-6 ${
            isFormValid ? "bg-[#cca88498]" : "bg-gray-100 border border-gray-300"
          }`}
        >
          <Text
            className={`text-base font-semibold ${
              isFormValid ? "text-black" : "text-gray-500"
            }`}
          >
            Next
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Industry Modal */}
      <Modal
        visible={isIndustryModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView className="flex-1 bg-white pt-14">
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setIndustryModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Industry
            </Text>
            <View className="w-8" />
          </View>
          <FlatList
            data={filteredIndustries}
            renderItem={({ item }) => renderItem(item, handleIndustrySelect)}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </SafeAreaView>
      </Modal>

      {/* Business Size Modal */}
      <Modal
        visible={isSizeModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView className="flex-1 bg-white pt-14">
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setSizeModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Business Size
            </Text>
            <View className="w-8" />
          </View>
          <FlatList
            data={filteredSizes}
            renderItem={({ item }) => renderItem(item, handleSizeSelect)}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
