import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function TransferDetailsScreen() {
  const [activeTab, setActiveTab] = useState<"updates" | "details">("updates");
  const router = useRouter();

  // بيانات الجدول الزمني
  const timeline = [
    { time: "22 January at 19:32", description: "Transfer Initiated" },
    {
      time: "22 January at 19:32",
      description: "Money was used in GBP from Jaudi Wallet",
    },
    { time: "22 January at 19:32", description: "We paid out your GBP Successfully" },
    { time: "22 January at 19:32", description: "Transfer complete" },
  ];

  // تفاصيل المعاملة
  const details = {
    sent: "15 USD",
    fees: "0.01",
    converted: "22 January at 19:32",
    exchangeRate: "1.00 USD = 22.74 SLE",
    transactionId: "#JA2312123",
    recipientName: "John Doe",
    receivedAmount: "29.99",
    accountHolder: "Phillip Johnson",
    accountProvider: "Jaudi",
    pickupCode: "N/A",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {/* العنوان */}
        <View style={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: 16 }}>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "#141414" }}>
            Transfer Details
          </Text>
        </View>

        {/* شريط المراحل */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, marginBottom: 24 }}>
          {["Initiated", "Processing", "Reviewing", "Completed"].map((label, index) => (
            <View key={label} style={{ alignItems: "center", flex: 1 }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "#D1B08B",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <Feather name="check" size={24} color="#FFFFFF" />
              </View>
              <Text style={{ fontSize: 12, color: "#505050", textAlign: "center" }}>
                {label}
              </Text>
              {index < 3 && (
                <View
                  style={{
                    position: "absolute",
                    top: 24,
                    left: "100%",
                    width: 20,
                    height: 2,
                    backgroundColor: "#D1B08B",
                  }}
                />
              )}
            </View>
          ))}
        </View>

        {/* تبويبا Updates و Details */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F3F1EE",
            borderRadius: 24,
            marginHorizontal: 24,
            marginBottom: 24,
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveTab("updates")}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 24,
              backgroundColor: activeTab === "updates" ? "#FFFFFF" : "transparent",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: activeTab === "updates" ? "#141414" : "#A0A0A0",
                fontWeight: "600",
              }}
            >
              Updates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("details")}
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 24,
              backgroundColor: activeTab === "details" ? "#FFFFFF" : "transparent",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: activeTab === "details" ? "#141414" : "#A0A0A0",
                fontWeight: "600",
              }}
            >
              Details
            </Text>
          </TouchableOpacity>
        </View>

        {/* تبويب Updates – الخط الزمني */}
        {activeTab === "updates" && (
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 16 }}>Timeline</Text>
            {timeline.map((item, idx) => (
              <View key={idx} style={{ flexDirection: "row", marginBottom: idx === timeline.length - 1 ? 0 : 24 }}>
                {/* الدائرة والخط العمودي */}
                <View style={{ alignItems: "center", width: 40 }}>
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      backgroundColor: "#D1B08B",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <Feather name="check" size={16} color="#FFFFFF" />
                  </View>
                  {idx !== timeline.length - 1 && (
                    <View style={{ width: 2, flex: 1, backgroundColor: "#D1B08B" }} />
                  )}
                </View>
                {/* النصوص */}
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#4A4A4A", marginBottom: 2 }}>{item.time}</Text>
                  <Text style={{ color: "#141414", fontWeight: "500" }}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* تبويب Details – معلومات المعاملة */}
        {activeTab === "details" && (
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 16 }}>
              Transaction Details
            </Text>
            {/* صفوف المعاملة */}
            <View style={{ marginBottom: 12 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Sent</Text>
                <Text style={{ color: "#141414" }}>{details.sent}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Fees</Text>
                <Text style={{ color: "#141414" }}>{details.fees}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Converted</Text>
                <Text style={{ color: "#141414" }}>{details.converted}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Exchange rate</Text>
                <Text style={{ color: "#141414" }}>{details.exchangeRate}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Transaction ID</Text>
                <Text style={{ color: "#141414" }}>{details.transactionId}</Text>
              </View>
            </View>

            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
              {details.recipientName} Received
            </Text>
            <View style={{ marginBottom: 12 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Account Holder Name</Text>
                <Text style={{ color: "#141414" }}>{details.accountHolder}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Account Provider</Text>
                <Text style={{ color: "#141414" }}>{details.accountProvider}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#8E8E8E" }}>Pickup Code</Text>
                <Text style={{ color: "#141414" }}>{details.pickupCode}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#141414" }}>
                Transfer complete
              </Text>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#D1B08B",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="check" size={20} color="#FFFFFF" />
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* زر Finish */}
      <View style={{ paddingHorizontal: 24, marginBottom: 20 }}>
        <TouchableOpacity
                onPress={() => router.push("/(tabs)/home/h")}

        //   onPress={() => {
        //     // يمكن العودة للصفحة الرئيسية أو إغلاق التدفق
        //   }}
          style={{
            backgroundColor: "#F5EBDD",
            borderRadius: 30,
            paddingVertical: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#141414" }}>
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
