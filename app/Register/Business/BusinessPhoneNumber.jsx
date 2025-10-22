import BackArrow from "@/components/BackArrow";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", dialCode: "+20" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dialCode: "+966" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", dialCode: "+971" },
];

export default function MobileNumberBusiness() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryModalOpen(false);
    setSearchQuery("");
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      className="flex-row items-center py-4 px-2 border-b border-gray-100"
      onPress={() => handleCountrySelect(item)}
    >
      <Text className="text-2xl mr-4">{item.flag}</Text>
      <View className="flex-1">
        <Text className="text-base text-gray-800">{item.name}</Text>
        <Text className="text-sm text-gray-500">{item.dialCode}</Text>
      </View>
    </TouchableOpacity>
  );

  const isFormValid = mobileNumber.trim();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-5 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity
            onPress={() => router.push("/Register/Business/Aboutyourself")}
          >
            <BackArrow />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text className="text-[36px] font-medium text-black mb-3">
          Mobile Number
        </Text>

        {/* Description */}
        <Text className="text-[14px] text-black font-regular mb-8">
          Provide mobile number that will be registered to designated business.
        </Text>

        {/* Phone Label */}
        <Text className="text-[16px] text-black font-medium mb-3">Phone</Text>

        {/* Phone Input Row */}
        <View className="flex-row mb-8">
          {/* Country Dropdown */}
          <TouchableOpacity
            className="flex-row items- justify-end border border-gray-300 rounded-xl px-4 py-4 mr-3 bg-white min-w-[100px]"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 4,
            }}
            onPress={() => setIsCountryModalOpen(true)}
          >
            <Text className="text-2xl mr-2">{selectedCountry.flag}</Text>
            <Text className="text-base mr-2">{selectedCountry.dialCode}</Text>
            <Ionicons
              className="mr-2 "
              name="chevron-down"
              size={20}
              color="#00000"
            />
          </TouchableOpacity>

          {/* Phone Number Input */}
          <TextInput
            className="flex-1 border border-gray-300 rounded-xl p-4 text-[14px] text-black bg-white"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 4,
            }}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder=""
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>

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
              router.push("/Register/Business/Business_PHONE_VERIF");
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

      {/* Country Selection Modal */}
      <Modal
        visible={isCountryModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white pt-14">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setIsCountryModalOpen(false)}
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
    </SafeAreaView>
  );
}
