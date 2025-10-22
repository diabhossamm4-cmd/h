import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "@/components/BackArrow";

const DAYS = Array.from({ length: 31 }, (_, i) => ({
  id: i + 1,
  value: i + 1,
}));
const MONTHS = [
  { id: 1, value: "January" },
  { id: 2, value: "February" },
  { id: 3, value: "March" },
  { id: 4, value: "April" },
  { id: 5, value: "May" },
  { id: 6, value: "June" },
  { id: 7, value: "July" },
  { id: 8, value: "August" },
  { id: 9, value: "September" },
  { id: 10, value: "October" },
  { id: 11, value: "November" },
  { id: 12, value: "December" },
];
const YEARS = Array.from({ length: 100 }, (_, i) => ({
  id: 2024 - i,
  value: 2024 - i,
}));

export default function UserInformationForm() {
  const router = useRouter();

  // Form states
  const [legalFirstName, setLegalFirstName] = useState("Hossam");
  const [legalMiddleName, setLegalMiddleName] = useState("");
  const [legalLastName, setLegalLastName] = useState("Diab");

  // Date of birth states
  const [selectedDay, setSelectedDay] = useState({ id: 11, value: 11 });
  const [selectedMonth, setSelectedMonth] = useState({
    id: 1,
    value: "January",
  });
  const [selectedYear, setSelectedYear] = useState({ id: 1965, value: 1965 });

  // Modal states
  const [dayModalOpen, setDayModalOpen] = useState(false);
  const [monthModalOpen, setMonthModalOpen] = useState(false);
  const [yearModalOpen, setYearModalOpen] = useState(false);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setDayModalOpen(false);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setMonthModalOpen(false);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setYearModalOpen(false);
  };

  const renderDayItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleDaySelect(item)}
    >
      <Text className="text-base text-gray-800">{item.value}</Text>
    </TouchableOpacity>
  );

  const renderMonthItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleMonthSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.value}</Text>
    </TouchableOpacity>
  );

  const renderYearItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleYearSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.value}</Text>
    </TouchableOpacity>
  );

  const isFormValid = legalFirstName.trim() && legalLastName.trim();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6 pt-5 bg-white">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity
              onPress={() => router.push("/Register/Personal/Loading")}
            >
              <BackArrow />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text className="text-[36px] font-medium text-black mb-3">
            User Information
          </Text>

          {/* Description */}
          <Text className="text-[14px] text-black font-medium mb-8">
            Review profile information
          </Text>

          {/* Personal Details Section */}
          <Text className="text-[20px] font-medium text-black mb-1">
            Personal Details
          </Text>
          <View className="w-full h-[0.5px] bg-gray-300 mb-6" />

          {/* Legal First Name */}
          <Text className="text-[16px] text-black font-medium mb-3">
            Legal first name(s)
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium  text-black bg-gray-100 mb-4"
            value={legalFirstName}
            onChangeText={setLegalFirstName}
            placeholder=""
            placeholderTextColor="#999"
          />

          {/* Legal Middle Name */}
          <Text className="text-[16px] text-black font-medium mb-3">
            Legal middle name(s)
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black bg-white mb-4"
            value={legalMiddleName}
            onChangeText={setLegalMiddleName}
            placeholder=""
            placeholderTextColor="#999"
          />

          {/* Legal Last Name */}
          <Text className="text-[16px] text-black font-medium mb-3">
            Legal last name(s)
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black bg-gray-100 mb-6"
            value={legalLastName}
            onChangeText={setLegalLastName}
            placeholder=""
            placeholderTextColor="#999"
          />

          {/* Date of Birth */}
          <Text className="text-[16px] text-black font-bold mb-4">
            Date of Birth
          </Text>

          {/* Date Selection Row */}
          <View className="flex-row justify-between mb-6">
            {/* Day */}
            <View className="flex-1 mr-2">
              <Text className="text-[16px] text-black font-medium mb-2">
                Day
              </Text>
              <TouchableOpacity
                className="border border-gray-300 rounded-xl p-4 bg-gray-100 items-center"
                onPress={() => setDayModalOpen(true)}
              >
                <Text className="text-[16px] font-medium text-black">
                  {selectedDay.value}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Month */}
            <View className="flex-1 mx-2">
              <Text className="text-[16px] text-black font-medium mb-2">
                Month
              </Text>
              <TouchableOpacity
                className="border border-gray-300 rounded-xl p-4 bg-gray-100 items-center"
                onPress={() => setMonthModalOpen(true)}
              >
                <Text className="text-[16px] font-regular text-black">
                  {selectedMonth.value}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Year */}
            <View className="flex-1 ml-2">
              <Text className="text-[16px] text-black font-medium mb-2">
                Year
              </Text>
              <TouchableOpacity
                className="border border-gray-300 rounded-xl p-4 bg-gray-100 items-center"
                onPress={() => setYearModalOpen(true)}
              >
                <Text className="text-[16px] font-medium text-black">
                  {selectedYear.value}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Spacer */}
          <View className="flex-1" />

          {/* Divider */}
          <View className="w-full h-[0.5px] bg-gray-700 mb-6" />

          {/* Next Button */}
          <TouchableOpacity
            className={`rounded-full p-5 w-full justify-center items-center mb-6 ${
              isFormValid
                ? "bg-[#cca884cc]"
                : "bg-gray-100 border border-gray-300"
            }`}
            onPress={() => {
              if (isFormValid) {
                router.push("/final-intro");
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
      </ScrollView>

      {/* Day Modal */}
      <Modal
        visible={dayModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white pt-14">
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setDayModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Day
            </Text>
            <View className="w-8" />
          </View>
          <FlatList
            data={DAYS}
            renderItem={renderDayItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </View>
      </Modal>

      {/* Month Modal */}
      <Modal
        visible={monthModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white pt-14">
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setMonthModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Month
            </Text>
            <View className="w-8" />
          </View>
          <FlatList
            data={MONTHS}
            renderItem={renderMonthItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            className="px-5"
          />
        </View>
      </Modal>

      {/* Year Modal */}
      <Modal
        visible={yearModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white pt-14">
          <View className="flex-row items-center justify-between px-5 pb-4 border-b border-gray-300">
            <TouchableOpacity
              onPress={() => setYearModalOpen(false)}
              className="p-1"
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-gray-800">
              Select Year
            </Text>
            <View className="w-8" />
          </View>
          <FlatList
            data={YEARS}
            renderItem={renderYearItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            className="px-5"
            getItemLayout={(data, index) => ({
              length: 56,
              offset: 56 * index,
              index,
            })}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
