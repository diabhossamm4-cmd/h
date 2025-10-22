import BackArrow from "@/components/BackArrow";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import ProgressDots from "@/components/ProgressDots";

import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  // باقي الدول ...
];

export default function AccountDetails() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const stepsCount = 5;
  const currentStep = 1;

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      className="flex-row items-center py-4 px-2 border-b border-gray-100"
      onPress={() => handleCountrySelect(item)}
    >
      <Text className="text-2xl mr-4">{item.flag}</Text>
      <Text className="text-base text-gray-800 flex-1">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white px-6 pt-14 items relative">
      {/* Back Button + Progress */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => router.push("/Register/verifyEmail")}>
          <BackArrow/>
        </TouchableOpacity>

        <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
      </View>

      {/* Title */}
      <Text className="text-[36px] font-medium mb-8 text-black">
        Where do you live?
      </Text>

      {/* Subtitle */}
      <Text className="text-sm font-regular mb-16 leading-6   ">
        Select your country of residence from the dropdown.
      </Text>

      {/* Country Dropdown */}
      <TouchableOpacity
        className="flex-row items-center justify-between border border-[#E0D5C0] rounded-xl p-4 mb-10 w-[85%]"
        onPress={() => setIsDropdownOpen(true)}
      >
        <Text
          className={`text-base font-normal flex-1 ${
            selectedCountry ? "text-black" : "text-gray-400"
          }`}
        >
          {selectedCountry ? selectedCountry.name : "Select Residence"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>
      <View className="w-full h-[1px] bg-black absolute bottom-[120px]" />

      {/* Next Button */}
      <TouchableOpacity
        className={`rounded-full p-5 w-[100%] absolute bottom-9  left-5 right-5 border justify-center items-center ${
          selectedCountry
            ? "bg-[#cca8849a] border-[#E0D5C0]"
            : "bg-[#cca88433] border-gray-300"
        }`}
        onPress={() => {
          if (selectedCountry) router.push("/Register/select-account");
        }}
        disabled={!selectedCountry}
      >
        <Text className="text-base font-semibold text-black">Next</Text>
      </TouchableOpacity>

      {/* Country Selection Modal */}
      <Modal
        visible={isDropdownOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white pt-14">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setIsDropdownOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Country
            </Text>
            <View className="w-8" />
          </View>

          {/* Search Input */}
          <View className="flex-row items-center bg-gray-200 mx-5 my-4 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#666" className="mr-4" />
            <TextInput
              className="flex-1 text-base text-gray-800"
              placeholder="Search countries..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus
            />
          </View>

          {/* Countries List */}
          <FlatList
            data={filteredCountries}
            renderItem={renderCountryItem}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </View>
      </Modal>
    </View>
  );
}
