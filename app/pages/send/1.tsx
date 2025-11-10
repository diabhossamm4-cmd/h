import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  // KeyboardAvoidingView,
  Platform,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

// ----------- CountrySelector INLINE COMPONENT -----------
type Country = {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
};
interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: Country;
  onSelect: (country: Country) => void;
  label?: string;
}
const CountrySelector: React.FC<CountrySelectorProps> = ({
  countries,
  selectedCountry,
  onSelect,
  label,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery)
  );

  return (
    <>
      {label && (
        <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
      )}
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        className="bg-gray-50 rounded-2xl px-5 py-4 flex-row items-center justify-between mb-4"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center gap-3">
          <Text className="text-2xl">{selectedCountry.flag}</Text>
          <Text className="text-base text-black">{selectedCountry.name}</Text>
        </View>
        <Feather name="chevron-down" size={20} color="#6B7280" />
      </TouchableOpacity>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl" style={{ maxHeight: "90%" }}>
            <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
              <Text className="text-xl font-bold text-gray-600">
                Select Country
              </Text>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                className="w-8 h-8 items-center justify-center"
              >
                <Feather name="x" size={30} color="#000" />
              </TouchableOpacity>
            </View>
            <View className="px-6 py-3">
              <View className="bg-gray-100 rounded-2xl px-4 py-1 flex-row items-center">
                <Feather name="search" size={20} color="#9CA3AF" />
                <TextInput
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Search countries..."
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 ml-2 text-base text-black"
                />
                {searchQuery.length > 0 && (
                  <TouchableOpacity onPress={() => setSearchQuery("")}>
                    <Feather name="x-circle" size={18} color="#9CA3AF" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.code}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onSelect(item);
                    setShowModal(false);
                    setSearchQuery("");
                  }}
                  className="px-6 py-4 flex-row items-center justify-between border-b border-gray-100"
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center gap-3">
                    <Text className="text-2xl">{item.flag}</Text>
                    <View>
                      <Text className="text-base text-black">{item.name}</Text>
                      <Text className="text-sm text-gray-500">
                        {item.dialCode}
                      </Text>
                    </View>
                  </View>
                  {selectedCountry.code === item.code && (
                    <Feather name="check" size={20} color="#CCA884" />
                  )}
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View className="py-8 items-center">
                  <Text className="text-gray-500">No countries found</Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

// ----------- Main AddRecipient SCREEN -----------
const COUNTRIES: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  // { code: "EG", name: "Egypt", flag: "🇪🇬", dialCode: "+20" },
  // { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dialCode: "+966" },
  // { code: "AE", name: "UAE", flag: "🇦🇪", dialCode: "+971" },
  // { code: "FR", name: "France", flag: "🇫🇷", dialCode: "+33" },
  // { code: "DE", name: "Germany", flag: "🇩🇪", dialCode: "+49" },
  // { code: "IT", name: "Italy", flag: "🇮🇹", dialCode: "+39" },
  // { code: "ES", name: "Spain", flag: "🇪🇸", dialCode: "+34" },
];

// يمكن دمج باقي المكونات بنفس الطريقة أو استيرادها
export default function AddRecipientInline() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
  });
  const stepsCount = 6;
  const currentStep = 1;

  const validate = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
    };
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{8,15}$/.test(mobileNumber.replace(/\s/g, ""))) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e !== "");
  };

  const handleNext = () => {
    if (validate()) {
      const recipientData = {
        firstName,
        lastName,
        mobileNumber: `${selectedCountry.dialCode}${mobileNumber}`,
        email,
        country: selectedCountry,
      };
      console.log("Recipient Data:", recipientData);
      router.push("/pages/send/2"); // انتقل إلى الشاشة التالية مع تمرير البيانات إذا لزم الأمر
    } 
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={5} // المسافة الإضافية بين الكيبورد والعنصر
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <View className="px-6 pt-5">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-14">
              <TouchableOpacity
                onPress={() => router.back()}
              >
                <BackArrow />
              </TouchableOpacity>
              <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
              <CustomIcon />
            </View>
            <Text className="text-4xl font-medium text-black mb-2">
              Who are you{"\n"}sending to?
            </Text>
            <Text className="text-sm font-regular text-gray-600 mb-8">
              Add a new recipient for faster and easier transfers.
            </Text>

            {errors.firstName && (
              <Text className="text-sm font-medium text-red-500 mb-2">
                {errors.firstName}
              </Text>
            )}
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              className={`bg-gray-50 rounded-2xl px-5 py-4 text-base text-black mb-4 ${
                errors.firstName ? "border-2 border-red-400" : ""
              }`}
              placeholderTextColor="#9CA3AF"
            />

            {errors.lastName && (
              <Text className="text-sm font-medium text-red-500 mb-2">
                {errors.lastName}
              </Text>
            )}
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              className={`bg-gray-50 rounded-2xl px-5 py-4 text-base text-black mb-4 ${
                errors.lastName ? "border-2 border-red-400" : ""
              }`}
              placeholderTextColor="#9CA3AF"
            />
            {errors.mobileNumber && (
              <Text className="text-sm font-medium text-red-500 mb-2">
                {errors.mobileNumber}
              </Text>
            )}
            <TextInput
              value={mobileNumber}
              onChangeText={setMobileNumber}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              className={`bg-gray-50 rounded-2xl px-5 py-4 text-base text-black mb-4 ${
                errors.mobileNumber ? "border-2 border-red-400" : ""
              }`}
              placeholderTextColor="#9CA3AF"
            />

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email (optional)"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-gray-50 rounded-2xl px-5 py-4 text-base text-black mb-4"
              placeholderTextColor="#9CA3AF"
            />
            <CountrySelector
              countries={COUNTRIES}
              selectedCountry={selectedCountry}
              onSelect={setSelectedCountry}
              label="Region"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
            <View className="px-6">
      
      <View className="w-full h-[1px] bg-black mb-2" />
      <TouchableOpacity
        onPress={handleNext}
        className="rounded-full py-4 items-center justify-center mt-4 mb-6  "
        style={{ backgroundColor: "#CCA88499" }}
        activeOpacity={0.4}
      >
        <Text className="text-base font-regular text-black">Next</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
