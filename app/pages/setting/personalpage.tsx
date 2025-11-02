import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackArrow from "@/components/BackArrow";

// Define the shape of day, month and year items for strong typing
interface DayItem {
  id: number;
  value: number;
}

interface MonthItem {
  id: number;
  value: string;
}

interface YearItem {
  id: number;
  value: number;
}

// Generate days, months and years arrays with explicit types
const DAYS: DayItem[] = Array.from({ length: 31 }, (_, i) => ({
  id: i + 1,
  value: i + 1,
}));

const MONTHS: MonthItem[] = [
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

const YEARS: YearItem[] = Array.from({ length: 100 }, (_, i) => ({
  id: 2024 - i,
  value: 2024 - i,
}));

export default function UserInformationForm() {
  const router = useRouter();

  // Form states
  const [legalFirstName, setLegalFirstName] = useState<string>("Hossam");
  const [legalMiddleName, setLegalMiddleName] = useState<string>("");
  const [legalLastName, setLegalLastName] = useState<string>("Diab");
  const [legalFirstBank, setLegalFirstBank] =
    useState<string>("United Kingdom");

  // Date of birth states with explicit types
  const [selectedDay, setSelectedDay] = useState<DayItem>({ id: 1, value: 1 });
  const [selectedMonth, setSelectedMonth] = useState<MonthItem>({
    id: 7,
    value: "July",
  });
  const [selectedYear, setSelectedYear] = useState<YearItem>({
    id: 1996,
    value: 1996,
  });

  // Modal states
  const [dayModalOpen, setDayModalOpen] = useState<boolean>(false);
  const [monthModalOpen, setMonthModalOpen] = useState<boolean>(false);
  const [yearModalOpen, setYearModalOpen] = useState<boolean>(false);

  const handleDaySelect = (day: DayItem): void => {
    setSelectedDay(day);
    setDayModalOpen(false);
  };

  const handleMonthSelect = (month: MonthItem): void => {
    setSelectedMonth(month);
    setMonthModalOpen(false);
  };

  const handleYearSelect = (year: YearItem): void => {
    setSelectedYear(year);
    setYearModalOpen(false);
  };

  const renderDayItem = ({ item }: { item: DayItem }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleDaySelect(item)}
    >
      <Text className="text-base text-gray-800">{item.value}</Text>
    </TouchableOpacity>
  );

  const renderMonthItem = ({ item }: { item: MonthItem }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleMonthSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.value}</Text>
    </TouchableOpacity>
  );

  const renderYearItem = ({ item }: { item: YearItem }) => (
    <TouchableOpacity
      className="py-4 px-2 border-b border-gray-100"
      onPress={() => handleYearSelect(item)}
    >
      <Text className="text-base text-gray-800">{item.value}</Text>
    </TouchableOpacity>
  );

  const isFormValid =
    legalFirstName.trim().length > 0 && legalLastName.trim().length > 0;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6 pt-5 bg-white">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity onPress={() => router.push("/(tabs)/settings/s")}>
              <BackArrow />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text className="text-[36px] font-medium text-black mb-3">
            Edit Personal Info{" "}
          </Text>

          {/* Description */}
          <Text className="text-[14px] text-black font-medium mb-8">
            Review profile information
          </Text>

          {/* Legal First Name */}
          <Text className="text-[16px] text-black font-medium mb-3">
            Sending From{" "}
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black bg-gray-100 mb-10"
            value={legalFirstBank}
            onChangeText={setLegalFirstBank}
            placeholder="  "
            placeholderTextColor="#999"
          />

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
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black bg-gray-100 mb-4"
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
          {/* Personal Details Section */}
          <Text className="text-[20px] font-medium text-black mb-2">
            Address{" "}
          </Text>
          <View className="w-full h-[0.5px] bg-gray-300 mb-10" />

          {/* Legal First Name */}
          <Text className="text-[16px] text-black font-medium mb-3">
            Full Address{" "}
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black   mb-10"
            // value={legalFirstName}
            // onChangeText={setLegalFirstName}
            placeholder="Flat 1, Chai Place, 109 Hart Avenue"
            placeholderTextColor="#999"
          />
          {/* Legal First Name */}
          <Text className="text-[16px] text-black font-medium mb-3">City </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black  mb-10"
            // value={legalFirstName}
            // onChangeText={setLegalFirstName}
            placeholder="London"
            placeholderTextColor="#999"
          />
          {/* Legal First Name */}
          <Text className="text-[16px] text-black font-medium mb-3">
            Post Code{" "}
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 text-[16px] font-medium text-black  mb-14"
            // value={legalFirstName}
            // onChangeText={setLegalFirstName}
            placeholder="HA7 7XS"
            placeholderTextColor="#999"
          />

          {/* Spacer */}
          {/* <View className="flex-1 " /> */}

          {/* Divider */}
          {/* <View className="w-full h-[0.5px] bg-gray-700 mb-6" /> */}
          <View className="w-full h-[0.5px] bg-gray-700 mb-6 mt-1" />

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
              save
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
            contentContainerStyle={{ paddingHorizontal: 20 }}
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
            contentContainerStyle={{ paddingHorizontal: 20 }}
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
            contentContainerStyle={{ paddingHorizontal: 20 }}
            // getItemLayout={(data: YearItem[] | null | undefined, index: number) => ({
            //   length: 56,
            //   offset: 56 * index,
            //   index,
            // })}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
