// Updated Dashboard component matching the provided Figma design
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Custom bag icon used in the top bar
import BagIcon from "@/components/ui/profile/bill";

// Define a colour palette that closely reflects the Figma mockup
const c = {
  bg: "#FFFFFF",           // base background colour
  primary: "#D8C2A8",      // beige used for icons and accents
  primaryDark: "#C19A6B",  // darker beige for badges and circles
  primaryLight: "#F7F2EC", // light beige for card backgrounds
  yellow: "#FFD56F",       // soft yellow accent for star shapes
  blue: "#1273E6",         // blue accent for growth indicators
  greyText: "#6B7280",     // grey for secondary text
  greyLight: "#A1A1A1",    // lighter grey for placeholders
  green: "#22C55E",        // green for positive numbers
  red: "#FE6C64",          // red for negative numbers
};

// Hardcoded statistics, mirroring the original component
const stats = {
  balance: 815.69,
  currency: "USD",
  growth: "+2.3%",
  moneySent: 554.43,
  transactionsCount: 23,
  transactionGrowth: 12,
};

// Example transaction data
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
    title: "Refund from Amazon",
    subtitle: "Received refund",
    date: "21 JAN",
    amount: 54.2,
    currency: "USD",
    type: "in",
  },
  {
    title: "Payment to Netflix",
    subtitle: "Subscription",
    date: "20 JAN",
    amount: 19.99,
    currency: "USD",
    type: "out",
  },
];

// Row component for individual transactions
const TransactionRow = ({ tx }: { tx: any }) => (
  <View
    className="mx-6 mb-4 flex-row justify-between items-center rounded-3xl px-4 py-5"
    style={{
      backgroundColor: c.primaryLight,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    }}
  >
    {/* Left side: icon + info */}
    <View className="flex-row items-center flex-shrink">
      <View
        className="w-12 h-12 rounded-full items-center justify-center mr-4"
        style={{ backgroundColor: c.primaryDark }}
      >
        <Feather
          name={tx.type === "out" ? "minus" : "plus"}
          size={20}
          color="black"
        />
      </View>
      <View>
        <Text className="text-gray-400 text-xs mb-1">{tx.date}</Text>
        <Text className="text-black font-bold text-[15px]" numberOfLines={1}>
          {tx.title}
        </Text>
        <Text
          className="text-gray-600 font-medium text-[13px]"
          numberOfLines={1}
        >
          {tx.subtitle}
        </Text>
      </View>
    </View>

    {/* Right side: amount + actions */}
    <View className="items-end">
      <Text
        className={`font-semibold text-[15px] ${
          tx.type === "out" ? "text-black" : "text-black"
        }`}
      >
        {tx.type === "out" ? "-" : "+"} {tx.amount} {tx.currency}
      </Text>
      <View className="flex-row mt-2">
        <TouchableOpacity
          className="mr-2 rounded-full"
          style={{ backgroundColor: c.primaryLight, padding: 4 }}
        >
          <Feather name="rotate-ccw" size={14} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-full"
          style={{ backgroundColor: c.primaryLight, padding: 4 }}
        >
          <Feather name="git-branch" size={14} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function Dashboard() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: c.bg }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 mt-4">
        {/* Avatar */}
        <TouchableOpacity onPress={() => router.push("/r/profile")}>         
          <View
            className="w-16 h-16 rounded-full items-center justify-center"
            style={{ backgroundColor: c.primaryDark }}
          >
            <Text className="font-bold text-lg text-black">JA</Text>
          </View>
        </TouchableOpacity>

        {/* Search bar */}
        <View
          className="flex-1 mx-3 flex-row items-center rounded-full px-4 py-3"
          style={{
            backgroundColor: c.primaryLight,
            borderColor: c.primaryDark,
            borderWidth: 1.5,
          }}
        >
          <View
            className="w-8 h-8 rounded-full items-center justify-center mr-3"
            style={{ backgroundColor: c.primaryDark }}
          >
            <Feather name="search" size={16} color={c.bg} />
          </View>
          <TextInput
            placeholder="Search"
            placeholderTextColor={c.greyLight}
            className="flex-1 text-black text-base"
          />
        </View>

        {/* Icons */}
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3 relative">
            <View
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: c.primaryDark }}
            >
              {/* Bag icon from project assets */}
              <BagIcon size={18} color="white" />
            </View>
            <View
              className="absolute -top-1 -right-1 rounded-full w-5 h-5 items-center justify-center"
              style={{ backgroundColor: c.bg, borderColor: c.primaryDark, borderWidth: 1 }}
            >
              <Text className="text-[9px] text-black font-semibold">3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: c.primaryDark }}
            >
              <MaterialCommunityIcons
                name="message-question-outline"
                size={18}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <FlatList
        data={transactions}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Balance section */}
            <View className="px-6 mt-8">
              <Text className="text-gray-500 text-sm font-regular">
                Total Balance
              </Text>
              <View className="flex-row items-center justify-between mt-1">
                <Text className="text-3xl font-bold text-black">
                  {stats.balance} <Text className="text-lg font-regular">{stats.currency}</Text>
                </Text>
                <View className="items-end ml-4">
                  <View className="flex-row items-center">
                    <Feather name="arrow-up-right" size={16} color={c.blue} />
                    <Text className="ml-1 text-blue-600 text-sm font-medium">
                      {stats.growth}
                    </Text>
                  </View>
                  <Text className="text-gray-500 text-xs">vs last month</Text>
                </View>
              </View>
            </View>

            {/* Money Sent + Transactions */}
            <View className="flex-row justify-between px-6 mt-8">
              <View className="flex-1">
                <Text className="text-gray-500 text-xs font-medium">
                  Money Sent (Last 30 days)
                </Text>
                <Text className="mt-1 text-xl font-bold text-black">
                  {stats.moneySent} <Text className="text-base font-regular">{stats.currency}</Text>
                </Text>
              </View>
              <View className="flex-1 items-end">
                <Text className="text-gray-500 text-xs font-medium">
                  Transaction Created (Last 30 days)
                </Text>
                <View className="mt-1 flex-row items-baseline">
                  <Text className="text-xl font-bold text-black">
                    {stats.transactionsCount}
                  </Text>
                  <Text className="ml-1 text-sm text-blue-600 font-medium">
                    +{stats.transactionGrowth}%
                  </Text>
                </View>
              </View>
            </View>

            {/* Promotional card
            <View className="mt-10 px-6">
              <View
                className="rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: c.primaryLight,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                <TouchableOpacity
                  style={{ position: "absolute", top: 12, right: 12 }}
                >
                  <Feather
                    name="rotate-ccw"
                    size={20}
                    color={c.greyText}
                  />
                </TouchableOpacity>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={180}
                  color={c.yellow}
                  style={{ position: "absolute", top: -40, left: -60, opacity: 0.4 }}
                />
                <View className="flex-row items-center">
                  <View className="flex-1 pr-4">
                    <Text className="text-xl font-bold text-black">
                      SECURE TRANSACTIONS
                    </Text>
                    <Text className="mt-2 text-base text-black">
                      Your financial security is our priority. Transfer with confidence every time.
                    </Text>
                  </View>
                  <View className="items-center justify-center">
                    <View
                      style={{
                        width: 110,
                        height: 110,
                        borderRadius: 55,
                        backgroundColor: c.primaryDark,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="lock" size={42} color={c.bg} />
                    </View>
                  </View>
                </View>
              </View>
            </View> */}

            {/* Section header for transactions */}
            <View className="mt-12 flex-row justify-between items-center px-6">
              <Text className="text-2xl font-semibold text-black">
                Recent Transactions
              </Text>
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-gray-600 font-regular mr-1">10 days</Text>
                <Feather name="chevron-down" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </>
        }
        renderItem={({ item }) => <TransactionRow tx={item} />}
        ListFooterComponent={<View className="mb-24" />}
      />
    </SafeAreaView>
  );
}