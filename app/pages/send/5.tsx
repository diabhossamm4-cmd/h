import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";

type BankTab = "bankTransfer" | "iban" | "manual";

type Bank = {
  id: string;
  name: string;
  icon: string;
};

const BANKS: Bank[] = [
  { id: "chase", name: "Chase Bank", icon: "🏦" },
  { id: "boa", name: "Bank Of America", icon: "🏛️" },
  { id: "citi", name: "Citigroup", icon: "🏢" },
  { id: "wells", name: "Wells Fargo", icon: "🏪" },
  { id: "hsbc", name: "HSBC", icon: "🏦" },
  { id: "barclays", name: "Barclays", icon: "🏛️" },
];

export default function EnterBankDetailsScreen() {
  const router = useRouter();
  const stepsCount = 6;
  const currentStep = 5;

  const [selectedTab, setSelectedTab] = useState<BankTab>("bankTransfer");

  // Bank Transfer fields
  const [sortCode, setSortCode] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");

  // IBAN fields
  const [iban, setIban] = useState("");
  const [swift, setSwift] = useState("");

  // Manual fields
  const [manualSearch, setManualSearch] = useState("");
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [manualAccountNumber, setManualAccountNumber] = useState("");
  const [showBankDropdown, setShowBankDropdown] = useState(false);

  const filteredBanks = BANKS.filter((bank) =>
    bank.name.toLowerCase().includes(manualSearch.toLowerCase())
  );

  const handleNext = () => {
    if (selectedTab === "bankTransfer") {
      if (!sortCode || !bankAccountNumber) {
        Alert.alert("Missing Fields", "Please enter Sort Code and Account Number.");
        return;
      }
      console.log("Bank Transfer:", { sortCode, bankAccountNumber });
    } else if (selectedTab === "iban") {
      if (!iban || !swift) {
        Alert.alert("Missing Fields", "Please enter IBAN and SWIFT/BIC.");
        return;
      }
      console.log("IBAN:", { iban, swift });
    } else if (selectedTab === "manual") {
      if (!selectedBank || !manualAccountNumber) {
        Alert.alert("Missing Fields", "Please select a bank and enter Account Number.");
        return;
      }
      console.log("Manual:", { bank: selectedBank.name, accountNumber: manualAccountNumber });
    }
    router.push("/pages/send/6"); // انتقل إلى الشاشة التالية
  };

  const renderTab = (label: string, value: BankTab) => {
    const active = selectedTab === value;
    return (
      <TouchableOpacity
        key={value}
        onPress={() => setSelectedTab(value)}
        className={`flex-1 py-3 rounded-full items-center justify-center ${
          active ? "bg-white" : "bg-transparent"
        }`}
        activeOpacity={0.8}
      >
        <Text className={`text-sm font-medium ${active ? "text-black" : "text-gray-400"}`}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-6 pt-5">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-8">
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow />
            </TouchableOpacity>
            <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
            <CustomIcon />
          </View>

          {/* Title */}
          <Text className="text-3xl font-bold text-black mb-2">
            Enter Bank Details
          </Text>
          <Text className="text-sm text-gray-600 mb-6">
            Provide recipient's bank details so they can receive the transfer securely.
          </Text>

          {/* Tabs */}
          <View className="bg-[#E6E4E1] rounded-full p-1 flex-row mb-6">
            {renderTab("Bank Transfer", "bankTransfer")}
            {renderTab("IBAN", "iban")}
            {renderTab("Manual", "manual")}
          </View>

          {/* Bank Transfer Tab */}
          {selectedTab === "bankTransfer" && (
            <>
              <View className="bg-gray-50 rounded-2xl px-5 py-4 mb-4">
                <TextInput
                  value={sortCode}
                  onChangeText={setSortCode}
                  placeholder="Sort Code"
                  placeholderTextColor="#9CA3AF"
                  className="text-base text-black"
                  keyboardType="numeric"
                />
              </View>
              <View className="bg-gray-50 rounded-2xl px-5 py-4 mb-4">
                <TextInput
                  value={bankAccountNumber}
                  onChangeText={setBankAccountNumber}
                  placeholder="Bank Account Number"
                  placeholderTextColor="#9CA3AF"
                  className="text-base text-black"
                  keyboardType="numeric"
                />
              </View>
            </>
          )}

          {/* IBAN Tab */}
          {selectedTab === "iban" && (
            <>
              <View className="bg-gray-50 rounded-2xl px-5 py-4 mb-4">
                <TextInput
                  value={iban}
                  onChangeText={setIban}
                  placeholder="IBAN"
                  placeholderTextColor="#9CA3AF"
                  className="text-base text-black"
                  autoCapitalize="characters"
                />
              </View>
              <View className="bg-gray-50 rounded-2xl px-5 py-4 mb-4">
                <TextInput
                  value={swift}
                  onChangeText={setSwift}
                  placeholder="SWIFT/BIC"
                  placeholderTextColor="#9CA3AF"
                  className="text-base text-black"
                  autoCapitalize="characters"
                />
              </View>
            </>
          )}

          {/* Manual Tab */}
          {selectedTab === "manual" && (
            <>
              {/* Bank Search */}
              <View className="relative mb-4">
                <TouchableOpacity
                  onPress={() => setShowBankDropdown(!showBankDropdown)}
                  className="bg-gray-50 rounded-2xl px-5 py-4 flex-row items-center justify-between"
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center flex-1">
                    {selectedBank && (
                      <Text className="text-2xl mr-3">{selectedBank.icon}</Text>
                    )}
                    <Text className={`text-base ${selectedBank ? "text-black" : "text-gray-400"}`}>
                      {selectedBank ? selectedBank.name : "Search for banks"}
                    </Text>
                  </View>
                  <Feather name="chevron-down" size={20} color="#6B7280" />
                </TouchableOpacity>

                {/* Bank Dropdown */}
                {showBankDropdown && (
                  <View className="mt-2 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    {/* Search Input */}
                    <View className="px-5 py-3 border-b border-gray-100 flex-row items-center">
                      <Feather name="search" size={18} color="#9CA3AF" />
                      <TextInput
                        value={manualSearch}
                        onChangeText={setManualSearch}
                        placeholder="Type to search..."
                        placeholderTextColor="#9CA3AF"
                        className="flex-1 ml-2 text-base text-black"
                      />
                      {manualSearch.length > 0 && (
                        <TouchableOpacity onPress={() => setManualSearch("")}>
                          <Feather name="x-circle" size={18} color="#9CA3AF" />
                        </TouchableOpacity>
                      )}
                    </View>

                    {/* Banks List */}
                    <ScrollView style={{ maxHeight: 200 }}>
                      {filteredBanks.length > 0 ? (
                        filteredBanks.map((bank) => (
                          <TouchableOpacity
                            key={bank.id}
                            onPress={() => {
                              setSelectedBank(bank);
                              setManualSearch("");
                              setShowBankDropdown(false);
                            }}
                            className="px-5 py-4 flex-row items-center justify-between border-b border-gray-100"
                            activeOpacity={0.7}
                          >
                            <View className="flex-row items-center gap-3">
                              <Text className="text-2xl">{bank.icon}</Text>
                              <Text className="text-base font-medium text-black">
                                {bank.name}
                              </Text>
                            </View>
                            {selectedBank?.id === bank.id && (
                              <Feather name="check" size={20} color="#CCA884" />
                            )}
                          </TouchableOpacity>
                        ))
                      ) : (
                        <View className="py-8 items-center">
                          <Text className="text-gray-500">No banks found</Text>
                        </View>
                      )}
                    </ScrollView>
                  </View>
                )}
              </View>

              {/* Account Number */}
              {selectedBank && (
                <View className="bg-gray-50 rounded-2xl px-5 py-4 mb-4">
                  <TextInput
                    value={manualAccountNumber}
                    onChangeText={setManualAccountNumber}
                    placeholder="Account Number"
                    placeholderTextColor="#9CA3AF"
                    className="text-base text-black"
                    keyboardType="numeric"
                  />
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View className="px-6">
        <View className="w-full h-[1px] bg-black mb-2" />
        <TouchableOpacity
          onPress={handleNext}
          className="rounded-full py-4 items-center justify-center mt-4 mb-6"
          style={{ backgroundColor: "#CCA88499" }}
          activeOpacity={0.4}
        >
          <Text className="text-base font-normal text-black">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}