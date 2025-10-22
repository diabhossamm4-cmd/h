import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";

const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  // { code: "EG", name: "Egypt", flag: "🇪🇬", dialCode: "+20" },
  // { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dialCode: "+966" },
  // { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", dialCode: "+971" },
  // يمكن إضافة باقي الدول حسب الحاجة
];

export default function TellUsAboutYou() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[2]); // Default to Egypt
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const stepsCount = 5;
  const currentStep = 3;

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

  const isFormValid = firstName.trim() && lastName.trim() && mobileNumber.trim();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 bg-white px-6 pt-5 relative">
          {/* Header */}
          <View className="flex-row items-center mb-6">
            <TouchableOpacity onPress={() => router.push("/Register/select-account")}>
              <BackArrow/>
            </TouchableOpacity>
            
            <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
          </View>

          {/* Title */}
          <Text className="text-[32px] font-medium mb-16 text-black">
            Tell us a bit about you
          </Text>

          {/* First Name */}
          <View className="mb-6">
            <Text className="text-[16px] font-medium mb-3 text-black">First name</Text>
            <TextInput
              className="border border-gray-300 rounded-xl p-4 text-base text-black bg-white"
              value={firstName}
              onChangeText={setFirstName}
              placeholder=""
              placeholderTextColor="#999"
            />
          </View>

          {/* Last Name */}
          <View className="mb-8">
            <Text className="text-[16px] font-medium mb-3 text-black">Last name</Text>
            <TextInput
              className="border border-gray-300 rounded-xl p-4 text-base text-black bg-white"
              value={lastName}
              onChangeText={setLastName}
              placeholder=""
              placeholderTextColor="#999"
            />
          </View>

          {/* Mobile Number Description */}
          <Text className="text-[14px] font-regular text-black mb-6 leading-6">
            Provide mobile number that will be registered to designated user.
          </Text>

          {/* Mobile Number */}
          <View className="mb-8">
            <Text className="text-base font-medium mb-3 text-black">Mobile Number</Text>
            
            <View className="flex-row items-center border border-gray-300 rounded-xl bg-white">
              {/* Country Selector part of the input */}
              <TouchableOpacity
                className="flex-row items-center px-4 py-4 border-r border-gray-300"
                onPress={() => setIsCountryModalOpen(true)}
              >
                <Text className="text-xl mr-2">{selectedCountry.flag}</Text>
                <Text className="text-base text-black mr-2">{selectedCountry.dialCode}</Text>
                <Ionicons name="chevron-down" size={16} color="#666" />
              </TouchableOpacity>

              {/* Phone Number Input */}
              <TextInput
                className="flex-1 p-4 text-base text-black"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                placeholder="Enter your number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>
            
          </View>

          {/* Spacer to push button to bottom */}
          <View className="flex-1" />

          {/* Divider */}
          <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

          {/* Next Button */}
          <TouchableOpacity
            className={`rounded-full p-5 w-full justify-center items-center mb-6 border ${
              isFormValid 
                ? "bg-[#cca88498] border-[#E0D5C0]" 
                : "bg-gray-100 border-gray-300"
            }`}
            onPress={() => {
              if (isFormValid) {
                router.push("/Register/Personal/VerifyIndividualphone");
              }
            }}
            disabled={!isFormValid}
          >
            <Text className={`text-base font-semibold ${
              isFormValid ? "text-black" : "text-gray-500"
            }`}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
            <Text className="text-lg font-semibold text-gray-800">Select Country</Text>
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