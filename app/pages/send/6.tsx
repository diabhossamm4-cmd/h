import React, { useState } from "react";
import {
  View,
  Text,
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

// بيانات المستلم والحوالة
const recipient = {
  name: "Harris Moore",
  provider: "Jaudi",
  sortCode: "20–12–34",
  accountNumber: "****7745",
};

// بيانات الدفع الأخرى
const sendingAmount = 8888.0;
const transactionFee = 0.36;
const paymentMethodFee = 0.0;
const exchangeRate = 681.1;
const recipientReceives = exchangeRate;

// خيارات الوسائل المحفوظة
const savedMethods = [
  {
    id: "bank7745",
    title: "Account ending in 7745",
    icon: "home",
    iconBgColor: "#1C64FF66",
    iconColor: "#5A7CCB",
  },
  {
    id: "jaudi",
    title: "Jaudi GBP Balance",
    icon: "star",
    iconBgColor: "#FE6C6480",
    iconColor: "#D9787A",
  },
  {
    id: "card5656",
    title: "Card ending in 5656",
    icon: "credit-card",
    iconBgColor: "#FFC84566",
    iconColor: "#D6A747",
  },
];

// خيارات الوسائل الأخرى
const otherMethods = [
  {
    id: "debit",
    title: "Debit Card",
    fee: "0.01 GBP Fee – If you add £20, then you pay £20.01",
    icon: "credit-card",
    iconBgColor: "#CCA88499",
    iconColor: "#AD9279",
  },
  {
    id: "banktransfer",
    title: "Bank Transfer",
    fee: "0.00 GBP Fee – If you add £20, then you pay £20.00",
    icon: "home",
    iconBgColor: "#CCA88499",
    iconColor: "#AD9279",
  },
  {
    id: "credit",
    title: "Credit Card",
    fee: "0.50 GBP Fee – If you add £20, then you pay £20.50",
    icon: "credit-card",
    iconBgColor: "#CCA88499",
    iconColor: "#AD9279",
  },
];

export default function ReviewAndSelectPaymentScreen() {
  const router = useRouter();

  // حالة التحكم في عرض واجهة المراجعة أو اختيار الوسيلة
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  // الوسيلة المختارة مبدئياً
  const [selectedMethodId, setSelectedMethodId] = useState("bank7745");

  // دمج جميع الوسائل للبحث عن التفاصيل بناءً على المعرف
  const allMethods = [...savedMethods, ...otherMethods];
  const selectedMethod = allMethods.find((m) => m.id === selectedMethodId);

  // عند الضغط على Complete Payment
  const handleCompletePayment = () => {
    Alert.alert("Payment Complete", "Your transfer has been processed.");
    router.push("/pages/send/7"); // انتقل إلى شاشة النجاح
  };

  // اختر وسيلة دفع
  const handleSelectMethod = (methodId: string) => {
    setSelectedMethodId(methodId);
    setShowPaymentOptions(false);
  };

  // شاشة المراجعة والدفع
  const renderReviewScreen = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-5">
        {/* رأس الصفحة */}
        <View className="flex-row items-center justify-between mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrow />
          </TouchableOpacity>
          <ProgressDots stepsCount={6} currentStep={6} />
          <CustomIcon />
        </View>

        {/* العنوان */}
        <Text className="text-3xl font-bold text-black mb-6">
          Review &amp; Pay for Transfer
        </Text>

        {/* بيانات المستلم */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#CCA884",
            borderRadius: 24,
            padding: 20,
            marginBottom: 24,
            position: "relative",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "#F5EBDD",
              borderRadius: 8,
              padding: 1,
            }}
          >
            <Feather name="edit-2" size={20} color="#CCA884" />
          </TouchableOpacity>
          

          <View className="flex-row justify-between mt-8 mb-8">
            <Text style={{ color: "#8E8E8E" }}>Recipient</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              {recipient.name}
            </Text>
          </View>
          <View className="flex-row justify-between mb-8">
            <Text style={{ color: "#8E8E8E" }}>Account Provider</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              {recipient.provider}
            </Text>
          </View>
          <View className="flex-row justify-between mb-8">
            <Text style={{ color: "#8E8E8E" }}>Sort Code</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              {recipient.sortCode}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text style={{ color: "#8E8E8E" }}>Account Number</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              {recipient.accountNumber}
            </Text>
          </View>
        </View>

        {/* تفاصيل المبلغ والرسوم */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#CCA884",
            borderRadius: 24,
            padding: 20,
            marginBottom: 24,
            position: "relative",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "#F5EBDD",
              borderRadius: 8,
              // padding: 6,
            }}
          >
            <Feather name="edit-2" size={20} color="#CCA884" />
          </TouchableOpacity>

          <View className="flex-row justify-between mt-8 mb-8">
            <Text style={{ color: "#8E8E8E" }}>Sending Amount</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              ${sendingAmount.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-8">
            <Text style={{ color: "#8E8E8E" }}>Transaction Type Fee</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              ${transactionFee.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-8">
            <Text style={{ color: "#8E8E8E" }}>Payment Method Fee</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              ${paymentMethodFee.toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#CCA884",
              marginBottom: 12,
            }}
          />
          <View className="flex-row justify-between mb-8">
            <Text style={{ color: "#8E8E8E" }}>Exchange Rate</Text>
            <Text style={{ color: "#141414", fontWeight: "500" }}>
              {exchangeRate.toFixed(2)} SLE
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#CCA884",
              marginBottom: 12,
            }}
          />
          <View className="flex-row justify-between">
            <Text style={{ color: "#141414", fontWeight: "700" }}>
              Recipient Receives
            </Text>
            <Text style={{ color: "#141414", fontWeight: "700" }}>
              {recipientReceives.toFixed(2)} SLE
            </Text>
          </View>
        </View>

        {/* قسم طريقة الدفع */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E7DCCF",
            borderRadius: 24,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text style={{ color: "#8E8E8E", fontSize: 16 }}>
              Payment Method
            </Text>
            <TouchableOpacity
              onPress={() => setShowPaymentOptions(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F5EBDD",
                borderRadius: 20,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Text
                style={{
                  color: "#CCA884",
                  fontWeight: "500",
                  marginRight: 4,
                }}
              >
                Change
              </Text>
              <Feather name="chevron-right" size={16} color="#CCA884" />
            </TouchableOpacity>
          </View>

          {/* عرض الوسيلة المختارة */}
          {selectedMethod && (
            <View className="flex-row items-center">
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: selectedMethod.iconBgColor,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 16,
                }}
              >
                <Feather
                  name={selectedMethod.icon as any}
                  size={24}
                  color={selectedMethod.iconColor}
                />
              </View>
              <View>
                <Text style={{ color: "#141414", fontWeight: "600" }}>
                  {selectedMethod.title.includes("ending")
                    ? "Bank Account"
                    : selectedMethod.title}
                </Text>
                <Text style={{ color: "#8E8E8E" }}>
                  {selectedMethod.title}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );

  // شاشة اختيار وسيلة الدفع
  const renderPaymentOptionsScreen = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-5">
        {/* زر الرجوع */}
        <TouchableOpacity onPress={() => setShowPaymentOptions(false)} className="mb-6">
          <BackArrow color="#CCA884" />
        </TouchableOpacity>

        <Text className="text-2xl font-medium text-black mb-8">
          How would you like to pay?
        </Text>

        {/* قسم الوسائل المحفوظة */}
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#141414", marginBottom: 8 }}>
          Saved
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E7DCCF",
            marginBottom: 16,
          }}
        />
        {savedMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            onPress={() => handleSelectMethod(method.id)}
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F8F7F5",
              borderRadius: 24,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 28,
                backgroundColor: method.iconBgColor,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
              }}
            >
              <Feather
                name={method.icon as any}
                size={28}
                color={method.iconColor}
              />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: "500",
                color: "#141414",
              }}
            >
              {method.title}
            </Text>
          </TouchableOpacity>
        ))}

        {/* قسم الوسائل الأخرى */}
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#141414", marginTop: 8, marginBottom: 8 }}>
          Other Methods
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E7DCCF",
            marginBottom: 16,
          }}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E7DCCF",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          {otherMethods.map((method, index) => (
            <TouchableOpacity
              key={method.id}
              onPress={() => handleSelectMethod(method.id)}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 16,
                paddingHorizontal: 20,
                borderBottomWidth: index === otherMethods.length - 1 ? 0 : 1,
                borderBottomColor: "#E7DCCF",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: method.iconBgColor,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 16,
                  }}
                >
                  <Feather
                    name={method.icon as any}
                    size={24}
                    color={method.iconColor}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#141414",
                    }}
                  >
                    {method.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#8E8E8E",
                      marginTop: 4,
                    }}
                    numberOfLines={2}
                  >
                    {method.fee}
                  </Text>
                </View>
              </View>
              <Feather name="chevron-right" size={20} color="#CCA884" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {showPaymentOptions ? renderPaymentOptionsScreen() : renderReviewScreen()}

      {/* زر إكمال الدفع يُعرض فقط في شاشة المراجعة */}
      {!showPaymentOptions && (
        <View className="px-6">
          <TouchableOpacity
            onPress={handleCompletePayment}
            style={{
              backgroundColor: "#E5D4C5",
              borderRadius: 30,
              paddingVertical: 16,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 16, color: "#141414", fontWeight: "600" }}>
              Complete Payment
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
