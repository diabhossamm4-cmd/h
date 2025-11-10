// Dashboard.tsx
import CustomIcon from "@/components/CustomIcon";
import BagIcon from "@/components/ui/profile/bill";
import SearchIcon from "@/components/ui/SearchIcon";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const c = {
  bg: "#FFFFFF",
  brown: "#CCA88498",
  yellow: "#FFD56F",
  blue: "#1C64FF66",
  pink: "#FE6C6499",
  gray: "#6B7280",
  lightGray: "#F5F5F5",
  green: "#22C55E",
}; 

const stats = {
  balance: 815.69,
  currency: "USD",
  growth: "+2.3%",
  moneySent: 554.43,
  transactionsCount: 23,
  transactionGrowth: 12,
};

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
        style={{ backgroundColor: tx.type === "out" ? c.pink : c.blue }}
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

    {/* Right */}
    <View className="items-end">
      <Text
        className={`font-semibold text-[15px] ${
          tx.type === "out" ? "text-red-500" : "text-green-600"
        }`}
      >
        {tx.type === "out" ? "-" : "+"} {tx.amount} {tx.currency}
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
const cardImages = [
  // require("@/assets/images/jau.png"),
  require("@/assets/images/Back.png"),
  // require("@/assets/images/jau.png"),
];

export default function Dashboard() {
  const router = useRouter();

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
          <Text className="text-[#00000033] font-regular text-2xl  ml-2">
            |
          </Text>
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

          <TouchableOpacity onPress={() => router.push("/pages/page/help")}>
            <View className="rounded-full px-2 py-[4px] flex-row items-center">
              <CustomIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main */}
      <FlatList
        data={transactions}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={
          <>
            {/* Balance */}
            <View className="px-6 mt-8 flex-row items-end justify-between">
              <View>
                <Text className="text-gray-500 text-sm font-regular">
                  Total Balance
                </Text>
                <Text className="text-2xl font-bold text-black mt-1">
                  {stats.balance}{" "}
                  <Text className="text-sm font-regular">{stats.currency}</Text>
                </Text>
              </View>
              <View className="items-end">
                <Text className="text-blue-600 font-medium text-base">
                  ↑ {stats.growth}
                </Text>
                <Text className="text-gray-500 font-regular text-sm">
                  vs last month
                </Text>
              </View>
            </View>

            {/* Money Sent + Transactions */}
            <View className="flex-row justify-between px-6 mt-6">
              <View>
                <Text className="text-gray-500 text-xs font-medium">
                  Money Sent (Last 30 days)
                </Text>
                <Text className="text-xl font-bold text-black mt-1">
                  {stats.moneySent}{" "}
                  <Text className="text-sm font-regular">{stats.currency}</Text>
                </Text>
              </View>
              <View className="items-end">
                <Text className="text-gray-500 text-xs">
                  Transaction Created (Last 30 days){" "}
                </Text>
                <Text className="text-xl font-bold text-black mt-1">
                  {stats.transactionsCount}{" "}
                  <Text className="text-sm text-blue-600 font-regular">
                    +{stats.transactionGrowth}%
                  </Text>
                </Text>
              </View>
            </View>
            

            <View className="mt-10 align-middle">
              <Text className="px-6 text-2xl font-medium text-black">
                Introducing Jaudi
              </Text>

              <Carousel 
                width={width}
                height={260}
                autoPlay={true}
                // loop={false}
                data={cardImages}
                scrollAnimationDuration={9000}
                renderItem={({ item }) => (
                  <View
                    className="items-center justify-center mt-2 rounded-xl overflow-hidden"
                    style={{
                      shadowColor: "#000",
                      shadowOpacity: 0.1,
                      // shadowRadius: 6,
                      // shadowOffset: { width: 0, height: 5 },
                      elevation: 4,
                    }}
                  >
                    <Image
                    
                      source={item}
                      
                      style={{
                        width: "100%",
                        height: 240,
                        resizeMode: "cover",
                        borderRadius: 24,
                      }}
                      
                    />
                  </View>
                )}
              />
            </View>

            {/* Recent Transactions */}
            <View className="mt-10 flex-row justify-between items-center px-6">
              <Text className="text-2xl font-medium text-black">
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
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View className="mb-24" />}
      />
    </SafeAreaView>
  );
}
