import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import axios from "axios";
import BackArrow from "@/components/BackArrow";
import ProgressDots from "@/components/ProgressDots";
import CustomIcon from "@/components/CustomIcon";
import { SafeAreaView } from "react-native-safe-area-context";

// أنواع العملات
type Currency = {
  code: string;
  name: string;
  flag: string;
  exchangeRate: number;
};

const CURRENCIES: Currency[] = [
  {
    code: "USD",
    name: "Exchange Rate 1.00 USD = 1.00 USD",
    flag: "🇺🇸",
    exchangeRate: 1.0,
  },
  {
    code: "SLE",
    name: "Exchange Rate 1.00 USD = 23.20 SLE",
    flag: "🇸🇱",
    exchangeRate: 23.20,
  },
];

// أنواع الدفع
type PaymentType = {
  id: string;
  name: string;
  icon: string; // FontAwesome5 name
  feePercentage: number;
};

const PAYMENT_TYPES: PaymentType[] = [
  { id: "bank", name: "Bank", icon: "university", feePercentage: 4 },
  { id: "card", name: "Debit Card", icon: "credit-card", feePercentage: 3.0 },
  { id: "cash", name: "Cash Pickup", icon: "money-bill-wave", feePercentage: 2.5 },
  { id: "wallet", name: "Wallet", icon: "wallet", feePercentage: 9.5 },
  { id: "mobile", name: "Mobile Money", icon: "mobile-alt", feePercentage: 21.5 },
  { id: "bill", name: "Bill", icon: "money-check", feePercentage: 42.5 },
  { id: "airtime bundel", name: "Airtime Bundel", icon: "mobile", feePercentage: 42.5 },

];

export default function SendAmountScreen() {
  const router = useRouter();

  const recipientName = "Harris Moore";
  const stepsCount = 6;
  const currentStep = 3;

  const [sendAmount, setSendAmount] = useState<string>("");
  const [sendCurrency, setSendCurrency] = useState(CURRENCIES[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(CURRENCIES[1]);
  const [paymentType, setPaymentType] = useState<string>("");
  const [showSendCurrencyDropdown, setShowSendCurrencyDropdown] = useState(false);
  const [showReceiveCurrencyDropdown, setShowReceiveCurrencyDropdown] = useState(false);
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const calculateReceiveAmount = () => {
    if (!sendAmount || parseFloat(sendAmount) <= 0) return "0.00";
    const amount = parseFloat(sendAmount);
    const rate = receiveCurrency.exchangeRate / sendCurrency.exchangeRate;
    return (amount * rate).toFixed(2);
  };

  // حساب الرسوم
  const activeType = PAYMENT_TYPES.find((pt) => pt.id === paymentType);
  const fee =
    sendAmount && activeType
      ? ((parseFloat(sendAmount) * activeType.feePercentage) / 100).toFixed(2)
      : "0.00";

  // إرسال البيانات
  const handleNext = async () => {
    if (!sendAmount || !paymentType || parseFloat(sendAmount) <= 0) {
      Alert.alert("Error", "Please enter the amount and select payment type.");
      return;
    }
    setIsLoading(true);
    try {
      const payload = {
        recipient: recipientName,
        sendAmount: Number(sendAmount),
        sendCurrency: sendCurrency.code,
        receiveAmount: Number(calculateReceiveAmount()),
        receiveCurrency: receiveCurrency.code,
        paymentType,
        fee: Number(fee),
        feePercentage: activeType?.feePercentage || 0,
      };
      console.log("Sending payload:", payload);
      await axios.post("https://your-api-url.com/api/transfer", payload, {
        headers: { "Content-Type": "application/json" },
      });
      Alert.alert("Success", "Data sent successfully.");
      router.push("/pages/send/4"); // انتقل إلى الشاشة التالية
    } catch (err: any) {
      console.error("Error:", err);
      Alert.alert("Error", err?.response?.data?.message || "Failed to submit.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="px-6 pt-5">
          <View className="flex-row items-center justify-between mb-8">
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow />
            </TouchableOpacity>
            <ProgressDots stepsCount={stepsCount} currentStep={currentStep} />
            <CustomIcon />
          </View>

          {/* Title */}
          <Text className="text-sm font-normal text-black mb-8">
            Choose how you would like{" "}
            <Text className="font-bold">{recipientName}</Text> to receive funds.
          </Text>

          {/* Send Amount */}
          <Text className="text-xl font-medium text-black mb-4">
            Send Amount
          </Text>
          <View className="relative mb-6">
            <View className="bg-gray-50 rounded-2xl px-5 py-4 flex-row items-center justify-center">
              <TextInput
                value={sendAmount}
                onChangeText={setSendAmount}
                placeholder="0.00"
                keyboardType="decimal-pad"
                className="flex-auto w-5 text-xl font-normal text-black"
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity
                onPress={() => setShowSendCurrencyDropdown(!showSendCurrencyDropdown)}
                className="flex-row items-center gap-2 ml-3"
                activeOpacity={0.7}
              >
                <View className="items-end">
                  <Text className="text-base font-medium text-black">
                    {sendCurrency.code}
                  </Text>
                  <Text className="text-xs text-gray-500">
                    {sendCurrency.name.split("=")[0].trim()}
                  </Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-white items-center justify-center">
                  <Text className="text-2xl">{sendCurrency.flag}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Send Currency Dropdown */}
            {showSendCurrencyDropdown && (
              <View className="mt-2 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {CURRENCIES.map((currency) => (
                  <TouchableOpacity
                    key={currency.code}
                    onPress={() => {
                      setSendCurrency(currency);
                      setShowSendCurrencyDropdown(false);
                    }}
                    className="px-5 py-4 flex-row items-center justify-between border-b border-gray-100"
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center gap-3">
                      <Text className="text-2xl">{currency.flag}</Text>
                      <View>
                        <Text className="text-base font-medium text-black">
                          {currency.code}
                        </Text>
                        <Text className="text-xs text-gray-500">
                          {currency.name}
                        </Text>
                      </View>
                    </View>
                    {sendCurrency.code === currency.code && (
                      <Feather name="check" size={20} color="#CCA884" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Receiver Gets */}
          <Text className="text-xl font-medium text-black mb-4">
            Receiver gets
          </Text>
          <View className="relative mb-6">
            <View className="bg-gray-50 rounded-2xl px-5 py-4 flex-row items-center">
              <Text className="flex-1 text-xl font-normal text-black">
                {calculateReceiveAmount()}
              </Text>
              <TouchableOpacity
                onPress={() => setShowReceiveCurrencyDropdown(!showReceiveCurrencyDropdown)}
                className="flex-row items-center gap-2 ml-3"
                activeOpacity={0.7}
              >
                <View className="items-end">
                  <Text className="text-base font-medium text-black">
                    {receiveCurrency.code}
                  </Text>
                  <Text className="text-xs text-gray-500">
                    {receiveCurrency.name.split("=")[0].trim()}
                  </Text>
                </View>
                <View className="w-10 h-10 rounded-full bg-white items-center justify-center">
                  <Text className="text-2xl">{receiveCurrency.flag}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Receive Currency Dropdown */}
            {showReceiveCurrencyDropdown && (
              <View className="mt-2 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {CURRENCIES.map((currency) => (
                  <TouchableOpacity
                    key={currency.code}
                    onPress={() => {
                      setReceiveCurrency(currency);
                      setShowReceiveCurrencyDropdown(false);
                    }}
                    className="px-5 py-4 flex-row items-center justify-between border-b border-gray-100"
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center gap-3">
                      <Text className="text-2xl">{currency.flag}</Text>
                      <View>
                        <Text className="text-base font-medium text-black">
                          {currency.code}
                        </Text>
                        <Text className="text-xs text-gray-500">
                          {currency.name}
                        </Text>
                      </View>
                    </View>
                    {receiveCurrency.code === currency.code && (
                      <Feather name="check" size={20} color="#CCA884" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Payment Type */}
          <Text className="text-xl font-medium text-black mb-4">
            How will the receiver get the money
          </Text>
          <View className="relative">
            <TouchableOpacity
              onPress={() => setShowPaymentDropdown(!showPaymentDropdown)}
              className="bg-gray-50 rounded-2xl px-5 py-4 flex-row items-center justify-between"
              activeOpacity={0.7}
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-base text-black flex-1">
                  {paymentType
                    ? PAYMENT_TYPES.find((pt) => pt.id === paymentType)?.name
                    : "Select Type"}
                </Text>
                {activeType && (
                  <>
                    <View className="h-7 w-[1px] bg-gray-300 mx-3" />
                    <FontAwesome5
                      name={activeType.icon}
                      size={25}
                      color="#CCA884"
                    />
                  </>
                )}
              </View>
              <Feather
                name="chevron-down"
                size={20}
                color="#6B7280"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
            {/* Payment Type Dropdown */}
            {showPaymentDropdown && (
              <View className="mt-2 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {PAYMENT_TYPES.map((type) => (
                  <TouchableOpacity
                    key={type.id}
                    onPress={() => {
                      setPaymentType(type.id);
                      setShowPaymentDropdown(false);
                    }}
                    className="px-5 py-4 flex-row items-center justify-between border-b border-gray-100"
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center gap-3">
                      <FontAwesome5 name={type.icon} size={21} color="#CCA884" />
                      <Text className="text-base font-medium text-black">
                        {type.name}
                      </Text>
                    </View>
                    {paymentType === type.id && (
                      <Feather name="check" size={20} color="#CCA884" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {/* Our Fee */}
          {activeType && (
            <View className="mt-4 items-end">
              <Text className="text-sm font-normal text-gray-600">
                Our Fee = {fee} {sendCurrency.code}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View className="px-6">
        <View className="w-full h-[1px] bg-black mb-2" />
        <TouchableOpacity
          onPress={handleNext}
          disabled={isLoading}
          className="rounded-full py-4 items-center justify-center mt-4 mb-6"
          style={{ backgroundColor: isLoading ? "#CCCCCC" : "#CCA88499" }}
          activeOpacity={0.4}
        >
          <Text className="text-base font-normal text-black">
            {isLoading ? "Sending..." : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
