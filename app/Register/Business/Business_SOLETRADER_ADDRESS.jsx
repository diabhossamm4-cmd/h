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
import { useRouter } from "expo-router";
import BackArrow from "@/components/BackArrow";
import { Ionicons } from "@expo/vector-icons";

const REGIONS = [
  { id: "uk", name: "United Kingdom" },
  { id: "us", name: "United States" },
  { id: "ca", name: "Canada" },
  { id: "eg", name: "Egypt" },
  { id: "sa", name: "Saudi Arabia" },
  // ...
];

export default function BusinessAddress() {
  const router = useRouter();
  const [region, setRegion] = useState(REGIONS[0]);
  const [isRegionModalOpen, setRegionModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const filteredRegions = REGIONS.filter((region) =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRegionSelect = (selected) => {
    setRegion(selected);
    setRegionModalOpen(false);
    setSearchQuery("");
  };

  const isFormValid =
    region && address.trim() && city.trim() && postcode.trim();

  const renderRegionItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 border-b border-gray-100"
      onPress={() => handleRegionSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white px-6 pt-5">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() =>
              router.push("/Register/Business/Business_NAME_SOLETRADER")
            }
            className="mt-1 mb-6"
          >
            <BackArrow />
          </TouchableOpacity>

          <Text className="text-[36px] font-Medium mb-2">
            Where is your business based?
          </Text>
          <Text className="text-[14px] font-Regular mb-2">
            Please fill out your registered business address.
          </Text>

          {/* Region selector */}
          <Text className="text-[16px] font-medium mb-2">Region</Text>
          <TouchableOpacity
            onPress={() => setRegionModalOpen(true)}
            className="bg-gray-200 rounded-lg p-4 mb-6"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500">{region.name}</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </View>
          </TouchableOpacity>

          {/* Address input */}
          <Text className="text-[16px] font-medium mb-2">Address</Text>
          <TextInput
            className=" border border-gray-300 rounded-lg p-4 mb-6"
            placeholder="Enter your address"
            placeholderTextColor="#999"
            value={address}
            onChangeText={setAddress}
          />

          {/* City input */}
          <Text className="text-[16px] font-medium mb-2">City</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[14px] text-black bg-white mb-8"
            placeholder="Enter your city"
            placeholderTextColor="#999"
            value={city}
            onChangeText={setCity}
          />

          {/* Postcode input */}
          <Text className="text-[16px] font-medium mb-2">Postcode</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[14px] text-black bg-white mb-8"
            placeholder="Enter postcode"
            placeholderTextColor="#999"
            value={postcode}
            onChangeText={setPostcode}
          />

          {/* Spacer */}
          <View className="flex-1 mb-9" />

          {/* Divider */}
          <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

          {/* Next Button */}
          <TouchableOpacity
            disabled={!isFormValid}
            onPress={() => {
              if (isFormValid) {
                router.push("/Register/Business/Business_SOLETRADER_ADDRESS2");
              }
            }}
            className={`rounded-full p-5 w-full justify-center items-center mb-6 ${
              isFormValid
                ? "bg-[#cca8849a]"
                : "bg-gray-100 border border-gray-300"
            }`}
          >
            <Text
              className={`text-[15px] font-regular ${
                isFormValid ? "text-black" : "text-gray-500"
              }`}
            >
              Next
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Region Selection Modal */}
      <Modal
        visible={isRegionModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView className="flex-1 bg-white pt-14">
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setRegionModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Region
            </Text>
            <View className="w-8" />
          </View>

          <View className="flex-row items-center bg-gray-200 mx-5 my-4 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#666" className="mr-4" />
            <TextInput
              className="flex-1 text-base text-gray-800"
              placeholder="Search regions..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
          </View>

          <FlatList
            data={filteredRegions}
            renderItem={renderRegionItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
