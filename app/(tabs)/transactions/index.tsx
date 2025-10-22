// app/r/transactions.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import SearchIcon from "@/components/ui/SearchIcon";
import CustomIcon from "@/components/CustomIcon";
import BagIcon from "@/components/ui/profile/bill";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const c = {
  bg: "#FFFFFF",
  brown: "#CCA88498",
  yellow: "#FFD56F",
  blue: "#8FB3FF",
  pink: "#FE6C64",
  gray: "#6B7280",
  lightGray: "#F5F5F5",
  green: "#22C55E",
};

// بيانات تجريبية (Mock Data)
const transactions = [
  {
    title: "Account ending in 5647",
    subtitle: "Sent from USD Wallet",
    date: "22 JAN",
    amount: 200,
    currency: "USD",
    type: "out",
  },
  {
    title: "To GBP Balance",
    subtitle: "Added to Wallet",
    date: "22 JAN",
    amount: 100,
    currency: "GBP",
    type: "in",
  },
  {
    title: "Kaleb Doe",
    subtitle: "Received from Jaudi Wallet",
    date: "22 JAN",
    amount: 100,
    currency: "GBP",
    type: "in",
  },
  {
    title: "To your SLL Balance",
    subtitle: "Waiting for payment",
    date: "20 JAN",
    amount: 49877,
    currency: "SLL",
    type: "pending",
  },
  {
    title: "Patrick Castillo",
    subtitle: "Waiting for payment",
    date: "19 JAN",
    amount: 100,
    currency: "GBP",
    type: "pending",
  },
  {
    title: "Robin Lamp",
    subtitle: "Sent to GBP Wallet",
    date: "15 JAN",
    amount: 300,
    currency: "GBP",
    type: "out",
  },
];

const tabs = ["All", "Sent", "Received", "Pending"];

// ✅ Transaction Row
const TransactionRow = ({ tx }: any) => (
  <View
    className="mx-6 mb-3 flex-row justify-between items-center rounded-3xl px-4 py-4"
    style={{
      backgroundColor: "#F8F8F7",
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 3,
    }}
  >
    {/* Left */}
    <View className="flex-row items-center flex-shrink">
      <View
        className="w-12 h-12 rounded-full items-center justify-center mr-4"
        style={{
          backgroundColor:
            tx.type === "out" ? c.pink : tx.type === "in" ? c.blue : "#FFD6D6",
        }}
      >
        <Feather
          name={
            tx.type === "out"
              ? "minus"
              : tx.type === "in"
                ? "plus"
                : "alert-circle"
          }
          size={20}
          color="black"
        />
      </View>
      <View>
        <Text className="text-gray-400 text-xs mb-1">{tx.date}</Text>
        <Text className="text-black font-bold text-[15px]" numberOfLines={1}>
          {tx.title}
        </Text>
        <Text className="text-gray-600 text-[13px]" numberOfLines={1}>
          {tx.subtitle}
        </Text>
      </View>
    </View>

    {/* Right */}
    <View className="items-end">
      <Text
        className={`font-semibold text-[15px] ${
          tx.type === "out"
            ? "text-red-500"
            : tx.type === "in"
              ? "text-green-600"
              : "text-gray-400"
        }`}
      >
        {tx.type === "pending"
          ? `${tx.amount} ${tx.currency}`
          : tx.type === "out"
            ? `- ${tx.amount} ${tx.currency}`
            : `+ ${tx.amount} ${tx.currency}`}
      </Text>
      <View className="flex-row mt-2">
        <TouchableOpacity className="bg-[#EDEAE6] px-2 py-[2px] rounded-full mr-2">
          <Feather name="rotate-ccw" size={14} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#EDEAE6] px-2 py-[2px] rounded-full">
          <Feather name="git-branch" size={14} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();

  // فلترة المعاملات
  const filteredTransactions =
    activeTab === "All"
      ? transactions
      : transactions.filter((tx) => {
          if (activeTab === "Sent") return tx.type === "out";
          if (activeTab === "Received") return tx.type === "in";
          if (activeTab === "Pending") return tx.type === "pending";
        });

  return (
    <SafeAreaView className="flex-1 bg-white">
     {/* Header */}
      <View className="flex-row items-center justify-between px-6 mt-2">
        <TouchableOpacity onPress={() => router.push("/r/profile")}>
          <View
            className="w-12 h-12 rounded-full items-center justify-center"
            style={{ backgroundColor: c.brown }}
          >
            <Text className="font-bold text-sm text-black">HD</Text>
          </View>
        </TouchableOpacity>

        <View
          className="flex-auto mx-3 flex-row items-center rounded-2xl px-4 py-2"
          style={{
            // backgroundColor: "#F8F6F2",
            borderColor: c.brown,
            borderWidth: 2,
          }}
        >
          <View className="flex-row items-center">
            <SearchIcon size={20} />
          </View>
          <Text className="text-[#00000033] font-regular text-2xl  ml-2">|</Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#6B6B6B"
            className="flex-1 ml-2 text-black"
          />
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3 relative">
            <BagIcon size={20} color="white" />
            <View className="absolute -top-1 -right-1 bg-[#CDAA87] rounded-full w-4 h-4 items-center justify-center">
              <Text className="text-[9px] text-white font-semibold">8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="rounded-full px-2 py-[4px] flex-row items-center">
              <CustomIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs Filter */}
      <View className="flex-row justify-between items-center px-6 mt-6">
        <View className="flex-row bg-[#F5F5F5] rounded-3xl px-2 py-2">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-2xl mx-1 ${
                activeTab === tab ? "bg-[#CCA88466]" : ""
              }`}
            >
              <Text
                className={`text-[15px] font-semibold ${
                  activeTab === tab ? "text-black" : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity className="ml-2">
          <Feather name="calendar" size={26} color="#CCA884" />
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      <FlatList
        data={filteredTransactions}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <TransactionRow tx={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View className="mb-24" />}
        className="mt-4"
      />
    </SafeAreaView>
  );
}
