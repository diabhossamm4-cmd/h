import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "@/components/BackArrow";

const COMPANY_TYPES = [
  { id: "sole_trader", name: "Sole Trader" },
  { id: "limited_company", name: "Limited Company" },
  { id: "partnership", name: "Partnership" },
  { id: "llp", name: "Limited Liability Partnership (LLP)" },
  { id: "charity", name: "Charity" },
  { id: "cic", name: "Community Interest Company (CIC)" },
];

export default function TellUsAboutBusiness() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [selectedCompanyType, setSelectedCompanyType] = useState(
    COMPANY_TYPES[0]
  );
  const [isCompanyTypeModalOpen, setIsCompanyTypeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanyTypes = COMPANY_TYPES.filter((type) =>
    type.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCompanyTypeSelect = (companyType) => {
    setSelectedCompanyType(companyType);
    setIsCompanyTypeModalOpen(false);
    setSearchQuery("");
  };

  const renderCompanyTypeItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleCompanyTypeSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.name}</Text>
    </TouchableOpacity>
  );

  const isFormValid = companyName.trim();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity
            onPress={() =>
              router.push("/Register/Business/Business_PHONE_VERIF")
            }
          >
            <BackArrow />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text className="text-[36px] font-medium text-black mb-3">
          Tell us about your business
        </Text>

        {/* Description */}
        <Text className="text-[14px] text-black font-regular mb-8">
          Please select and enter your details below.
        </Text>

        {/* Company Type */}
        <Text className="text-[16px] text-black font-medium mb-3">
          Company Type
        </Text>

        <TouchableOpacity
          className="flex-row items-center justify-between border border-gray-300 rounded-xl p-4 mb-6 bg-gray-100"
          onPress={() => setIsCompanyTypeModalOpen(true)}
          style={{
            borderColor: "#D1D5DB", // gray-300
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text className="text-[16px] text-gray-600 flex-1">
            {selectedCompanyType.name}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#666" />
        </TouchableOpacity>

        {/* Company Name */}
        <Text className="text-[14px] text-black font-medium mb-3">
          Company Name
        </Text>

        <TextInput
          className="border border-gray-300 rounded-xl p-4 text-[14px] text-black bg-white mb-8"
          value={companyName}
          onChangeText={setCompanyName}
          placeholder=""
          placeholderTextColor="#999"
          style={{
            borderColor: "#D1D5DB", // gray-300
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />

        {/* Spacer */}
        <View className="flex-1" />

        {/* Divider */}
        <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

        {/* Next Button */}
        <TouchableOpacity
          className={`rounded-full p-5 w-full justify-center items-center mb-6 ${
            isFormValid ? "bg-[#cca88498]" : "bg-gray-100 border border-gray-300"
          }`}
          onPress={() => {
            if (isFormValid) {
              router.push("/Register/Business/Business_SOLETRADER_ADDRESS");
            }
          }}
          disabled={!isFormValid}
        >
          <Text
            className={`text-[15px] font-regular ${
              isFormValid ? "text-black" : "text-gray-500"
            }`}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>

      {/* Company Type Selection Modal */}
      <Modal
        visible={isCompanyTypeModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white pt-14">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setIsCompanyTypeModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Company Type
            </Text>
            <View className="w-8" />
          </View>

          {/* Search Input */}
          <View className="flex-row items-center bg-gray-200 mx-5 my-4 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#666" className="mr-4" />
            <TextInput
              className="flex-1 text-base text-gray-800"
              placeholder="Search company types..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
          </View>

          {/* Company Types List */}
          <FlatList
            data={filteredCompanyTypes}
            renderItem={renderCompanyTypeItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
